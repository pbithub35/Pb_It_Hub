import { NextRequest, NextResponse } from "next/server";
import path from "node:path";
import fs from "node:fs/promises";
import {
  optimizeImage,
  detectImageCategory,
  type ImageCategory,
} from "@/lib/image-optimizer";

// Maximum upload limit: 15 MB   
const MAX_UPLOAD_BYTES = 15 * 1024 * 1024;
const ALLOWED_MIME_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/avif",
  "image/tiff",
];

function sanitizeFilename(originalName: string): string {
  const ext = path.extname(originalName);
  const base = path.basename(originalName, ext);
  const cleanBase = base
    .toLowerCase()
    .replace(/[^a-z0-9-_]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
  const timestamp = Date.now();
  return `${cleanBase || "upload"}-${timestamp}`;
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");
    const requestedCategory = formData.get("category") as ImageCategory | null;

    if (!file || !(file instanceof Blob)) {
      return NextResponse.json(
        { error: "No image file provided in form-data ('file')" },
        { status: 400 },
      );
    }

    if (file.size > MAX_UPLOAD_BYTES) {
      return NextResponse.json(
        {
          error: `File exceeds maximum allowed size of ${MAX_UPLOAD_BYTES / (1024 * 1024)} MB`,
        },
        { status: 413 },
      );
    }

    if (file.type && !ALLOWED_MIME_TYPES.includes(file.type)) {
      return NextResponse.json(
        {
          error: `Unsupported MIME type: ${file.type}. Allowed: JPEG, PNG, WebP, AVIF, TIFF`,
        },
        { status: 415 },
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const filename = file instanceof File ? file.name : "upload.jpg";
    const category: ImageCategory =
      requestedCategory || detectImageCategory(filename);

    // Run Sharp optimization pipeline
    const result = await optimizeImage(buffer, category, true);

    // Save locations
    const uploadBaseName = sanitizeFilename(filename);
    const uploadsDir = path.join(process.cwd(), "public", "images", "uploads");
    const originalsDir = path.join(
      process.cwd(),
      "public",
      "images",
      "_originals",
      "uploads",
    );

    await fs.mkdir(uploadsDir, { recursive: true });
    await fs.mkdir(originalsDir, { recursive: true });

    // 1. Preserve original safely
    const originalExt = path.extname(filename) || `.${result.originalMetadata.format}`;
    const originalTarget = path.join(originalsDir, `${uploadBaseName}${originalExt}`);
    await fs.writeFile(originalTarget, buffer);

    // 2. Write optimized WebP
    const webpFilename = `${uploadBaseName}.webp`;
    await fs.writeFile(path.join(uploadsDir, webpFilename), result.webp.buffer);

    // 3. Write optimized AVIF (if generated)
    let avifFilename: string | undefined;
    if (result.avif) {
      avifFilename = `${uploadBaseName}.avif`;
      await fs.writeFile(path.join(uploadsDir, avifFilename), result.avif.buffer);
    }

    // 4. Write fallback (PNG or JPEG)
    const fallbackExt = result.fallback.format === "png" ? "png" : "jpg";
    const fallbackFilename = `${uploadBaseName}.${fallbackExt}`;
    await fs.writeFile(
      path.join(uploadsDir, fallbackFilename),
      result.fallback.buffer,
    );

    // 5. Write variants
    const variantUrls: Array<{ width: number; url: string; size: number }> = [];
    if (result.variants) {
      for (const variant of result.variants) {
        const variantName = `${uploadBaseName}-${variant.width}w.webp`;
        await fs.writeFile(path.join(uploadsDir, variantName), variant.buffer);
        variantUrls.push({
          width: variant.width,
          url: `/images/uploads/${variantName}`,
          size: variant.size,
        });
      }
    }

    const savedPercent = (
      ((buffer.length - result.webp.size) / buffer.length) *
      100
    ).toFixed(1);

    return NextResponse.json({
      success: true,
      category,
      url: `/images/uploads/${webpFilename}`,
      avifUrl: avifFilename ? `/images/uploads/${avifFilename}` : null,
      fallbackUrl: `/images/uploads/${fallbackFilename}`,
      dimensions: {
        width: result.webp.width,
        height: result.webp.height,
        originalWidth: result.originalMetadata.width,
        originalHeight: result.originalMetadata.height,
      },
      size: result.webp.size,
      originalSize: buffer.length,
      savedPercent: Number(savedPercent),
      variants: variantUrls,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { error: `Image optimization error: ${message}` },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: "ready",
    maxUploadSizeMB: 15,
    allowedMimeTypes: ALLOWED_MIME_TYPES,
    categories: [
      "hero",
      "screenshot",
      "card",
      "thumbnail",
      "avatar",
      "logo",
      "icon",
    ],
    formatsGenerated: ["webp", "avif", "jpeg/png"],
  });
}

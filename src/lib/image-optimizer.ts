import sharp, { type Metadata } from "sharp";
import path from "node:path";
import fs from "node:fs/promises";

export type ImageCategory =
  | "hero"
  | "screenshot"
  | "card"
  | "thumbnail"
  | "avatar"
  | "logo"
  | "icon";

export interface CategoryOptimizationRule {
  maxWidth: number;
  maxHeight?: number;
  webpQuality: number;
  avifQuality: number;
  jpegQuality: number;
  chromaSubsampling?: string;
  losslessWebp?: boolean;
  generateVariants: boolean;
  variantWidths: number[];
}

export const CATEGORY_RULES: Record<ImageCategory, CategoryOptimizationRule> = {
  hero: {
    maxWidth: 1920,
    webpQuality: 82,
    avifQuality: 78,
    jpegQuality: 82,
    generateVariants: true,
    variantWidths: [640, 1080, 1440, 1920],
  },
  screenshot: {
    maxWidth: 1440,
    webpQuality: 85, // higher quality to preserve crisp UI text
    avifQuality: 82,
    jpegQuality: 85,
    chromaSubsampling: "4:4:4", // preserves text sharpness and prevents color bleeding
    generateVariants: true,
    variantWidths: [640, 960, 1280, 1440],
  },
  card: {
    maxWidth: 800,
    webpQuality: 78,
    avifQuality: 72,
    jpegQuality: 78,
    generateVariants: true,
    variantWidths: [400, 640, 800],
  },
  thumbnail: {
    maxWidth: 400,
    webpQuality: 75,
    avifQuality: 68,
    jpegQuality: 75,
    generateVariants: false,
    variantWidths: [200, 400],
  },
  avatar: {
    maxWidth: 400,
    maxHeight: 400,
    webpQuality: 80,
    avifQuality: 75,
    jpegQuality: 80,
    generateVariants: false,
    variantWidths: [128, 256, 400],
  },
  logo: {
    maxWidth: 512,
    maxHeight: 512,
    webpQuality: 88,
    avifQuality: 85,
    jpegQuality: 88,
    losslessWebp: true,
    generateVariants: false,
    variantWidths: [64, 128, 256, 512],
  },
  icon: {
    maxWidth: 192,
    maxHeight: 192,
    webpQuality: 90,
    avifQuality: 85,
    jpegQuality: 90,
    losslessWebp: true,
    generateVariants: false,
    variantWidths: [32, 64, 128, 192],
  },
};

export interface ProcessedBuffer {
  format: "webp" | "avif" | "jpeg" | "png";
  buffer: Buffer;
  width: number;
  height: number;
  size: number;
}

export interface OptimizationResult {
  originalMetadata: {
    width: number;
    height: number;
    format: string;
    size: number;
  };
  webp: ProcessedBuffer;
  avif?: ProcessedBuffer;
  fallback: ProcessedBuffer;
  variants?: Array<{
    width: number;
    height: number;
    format: "webp" | "avif";
    buffer: Buffer;
    size: number;
  }>;
}

/**
 * Automatically determine the best optimization category based on path, filename, and dimensions.
 */
export function detectImageCategory(
  filePathOrName: string,
  width = 0,
  height = 0,
): ImageCategory {
  const normalized = filePathOrName.toLowerCase();

  if (
    normalized.includes("icon") ||
    normalized.endsWith("favicon.ico") ||
    normalized.endsWith("apple-touch-icon.png")
  ) {
    return "icon";
  }

  if (normalized.includes("logo") || normalized.includes("brand")) {
    return "logo";
  }

  if (normalized.includes("avatar") || normalized.includes("profile")) {
    return "avatar";
  }

  if (
    normalized.includes("/work/") ||
    normalized.includes("screenshot") ||
    normalized.includes("preview") ||
    normalized.includes("dashboard")
  ) {
    return "screenshot";
  }

  if (
    normalized.includes("hero") ||
    normalized.includes("banner") ||
    (width >= 1600 && height >= 700)
  ) {
    return "hero";
  }

  if (
    normalized.includes("thumb") ||
    (width > 0 && width <= 400 && height <= 400)
  ) {
    return "thumbnail";
  }

  return "card";
}

/**
 * Validate image buffer and extract metadata.
 */
export async function validateImageBuffer(buffer: Buffer): Promise<{
  valid: boolean;
  metadata?: Metadata;
  error?: string;
}> {
  try {
    const image = sharp(buffer, { failOn: "error" });
    const metadata = await image.metadata();

    if (!metadata.width || !metadata.height || !metadata.format) {
      return { valid: false, error: "Invalid image dimensions or format" };
    }

    const allowedFormats = ["jpeg", "png", "webp", "avif", "tiff", "gif", "svg"];
    if (!allowedFormats.includes(metadata.format)) {
      return {
        valid: false,
        error: `Unsupported image format: ${metadata.format}`,
      };
    }

    return { valid: true, metadata };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return { valid: false, error: `Corrupt or unsupported image: ${message}` };
  }
}

/**
 * Core image optimization function.
 * Preserves visual clarity while applying optimal compression.
 */
export async function optimizeImage(
  inputBuffer: Buffer,
  categoryOrRule: ImageCategory | Partial<CategoryOptimizationRule> = "card",
  generateAvif = true,
): Promise<OptimizationResult> {
  const validation = await validateImageBuffer(inputBuffer);
  if (!validation.valid || !validation.metadata) {
    throw new Error(validation.error ?? "Failed to validate image");
  }

  const meta = validation.metadata;
  const originalWidth = meta.width ?? 1280;
  const originalHeight = meta.height ?? 720;
  const originalFormat = meta.format ?? "unknown";
  const originalSize = inputBuffer.length;

  const rule: CategoryOptimizationRule =
    typeof categoryOrRule === "string"
      ? CATEGORY_RULES[categoryOrRule]
      : { ...CATEGORY_RULES.card, ...categoryOrRule };

  // Determine target dimensions (Never upscale!)
  let targetWidth = originalWidth;
  let targetHeight = originalHeight;

  if (targetWidth > rule.maxWidth) {
    targetWidth = rule.maxWidth;
    targetHeight = Math.round((originalHeight / originalWidth) * targetWidth);
  }

  if (rule.maxHeight && targetHeight > rule.maxHeight) {
    targetHeight = rule.maxHeight;
    targetWidth = Math.round((originalWidth / originalHeight) * targetHeight);
  }

  // Base sharp pipeline with high-quality lanczos3 downsampling
  const createPipeline = () => {
    let pipeline = sharp(inputBuffer).rotate(); // auto-orient based on EXIF
    if (targetWidth !== originalWidth || targetHeight !== originalHeight) {
      pipeline = pipeline.resize(targetWidth, targetHeight, {
        kernel: sharp.kernel.lanczos3,
        fit: "inside",
        withoutEnlargement: true,
      });
    }
    return pipeline;
  };

  // 1. Generate WebP
  let webpPipeline = createPipeline();
  if (rule.losslessWebp && (originalFormat === "png" || originalFormat === "svg")) {
    webpPipeline = webpPipeline.webp({
      lossless: true,
      effort: 6,
    });
  } else {
    webpPipeline = webpPipeline.webp({
      quality: rule.webpQuality,
      effort: 6,
      smartSubsample: true,
    });
  }
  const webpBuffer = await webpPipeline.toBuffer();
  const webpMeta = await sharp(webpBuffer).metadata();

  // 2. Generate AVIF (if enabled)
  let avifResult: ProcessedBuffer | undefined;
  if (generateAvif) {
    try {
      const avifBuffer = await createPipeline()
        .avif({
          quality: rule.avifQuality,
          effort: 6,
          chromaSubsampling: rule.chromaSubsampling ?? "4:2:0",
        })
        .toBuffer();
      const avifMeta = await sharp(avifBuffer).metadata();
      avifResult = {
        format: "avif",
        buffer: avifBuffer,
        width: avifMeta.width ?? targetWidth,
        height: avifMeta.height ?? targetHeight,
        size: avifBuffer.length,
      };
    } catch {
      // AVIF generation optional fallback
    }
  }

  // 3. Fallback (optimized JPEG or PNG)
  let fallbackBuffer: Buffer;
  let fallbackFormat: "jpeg" | "png";

  if (originalFormat === "png" || meta.hasAlpha) {
    fallbackFormat = "png";
    fallbackBuffer = await createPipeline()
      .png({
        compressionLevel: 9,
        palette: true, // quantize palette to save significant bytes for graphic logos
        quality: 85,
        effort: 8,
      })
      .toBuffer();
  } else {
    fallbackFormat = "jpeg";
    fallbackBuffer = await createPipeline()
      .jpeg({
        quality: rule.jpegQuality,
        mozjpeg: true,
        chromaSubsampling: rule.chromaSubsampling ?? "4:2:0",
      })
      .toBuffer();
  }
  const fallbackMeta = await sharp(fallbackBuffer).metadata();

  // 4. Generate Responsive Variants
  const variants: OptimizationResult["variants"] = [];
  if (rule.generateVariants && rule.variantWidths) {
    for (const vWidth of rule.variantWidths) {
      if (vWidth >= originalWidth) continue; // Do not upscale!
      const vHeight = Math.round((originalHeight / originalWidth) * vWidth);

      const vWebp = await sharp(inputBuffer)
        .rotate()
        .resize(vWidth, vHeight, {
          kernel: sharp.kernel.lanczos3,
          fit: "inside",
          withoutEnlargement: true,
        })
        .webp({
          quality: rule.webpQuality,
          effort: 5,
        })
        .toBuffer();

      variants.push({
        width: vWidth,
        height: vHeight,
        format: "webp",
        buffer: vWebp,
        size: vWebp.length,
      });
    }
  }

  return {
    originalMetadata: {
      width: originalWidth,
      height: originalHeight,
      format: originalFormat,
      size: originalSize,
    },
    webp: {
      format: "webp",
      buffer: webpBuffer,
      width: webpMeta.width ?? targetWidth,
      height: webpMeta.height ?? targetHeight,
      size: webpBuffer.length,
    },
    avif: avifResult,
    fallback: {
      format: fallbackFormat,
      buffer: fallbackBuffer,
      width: fallbackMeta.width ?? targetWidth,
      height: fallbackMeta.height ?? targetHeight,
      size: fallbackBuffer.length,
    },
    variants: variants.length > 0 ? variants : undefined,
  };
}

/**
 * Safely backup an original file to public/images/_originals/ if not already preserved.
 */
export async function backupOriginal(
  filePath: string,
  backupRootDir: string = path.join(process.cwd(), "public", "images", "_originals"),
): Promise<string> {
  const relativeFromPublic = path.relative(
    path.join(process.cwd(), "public"),
    filePath,
  );
  const backupTarget = path.join(backupRootDir, relativeFromPublic);

  await fs.mkdir(path.dirname(backupTarget), { recursive: true });

  try {
    await fs.access(backupTarget);
    // Already backed up!
    return backupTarget;
  } catch {
    await fs.copyFile(filePath, backupTarget);
    return backupTarget;
  }
}

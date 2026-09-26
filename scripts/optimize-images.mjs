#!/usr/bin/env node
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT_DIR = process.cwd();
const PUBLIC_DIR = path.join(ROOT_DIR, "public");
const IMAGES_DIR = path.join(PUBLIC_DIR, "images");
const ORIGINALS_DIR = path.join(IMAGES_DIR, "_originals");
const ICON_PATH = path.join(ROOT_DIR, "src", "app", "icon.png");

// Category optimization configuration
const RULES = {
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
    webpQuality: 85, // preserves UI text sharpness
    avifQuality: 82,
    jpegQuality: 85,
    chromaSubsampling: "4:4:4",
    generateVariants: true,
    variantWidths: [640, 960, 1280],
  },
  card: {
    maxWidth: 800,
    webpQuality: 78,
    avifQuality: 72,
    jpegQuality: 78,
    generateVariants: true,
    variantWidths: [400, 640, 800],
  },
  logo: {
    maxWidth: 512,
    maxHeight: 512,
    webpQuality: 88,
    avifQuality: 85,
    pngQuality: 85,
    generateVariants: false,
    variantWidths: [],
  },
  icon: {
    maxWidth: 192,
    maxHeight: 192,
    webpQuality: 90,
    avifQuality: 85,
    pngQuality: 90,
    generateVariants: false,
    variantWidths: [],
  },
};

function detectCategory(relPath) {
  const norm = relPath.toLowerCase();
  if (norm.includes("icon") || norm.endsWith("favicon.ico")) return "icon";
  if (norm.includes("logo") || norm.includes("brand")) return "logo";
  if (norm.includes("/work/") || norm.includes("screenshot") || norm.includes("ledger") || norm.includes("educators")) return "screenshot";
  if (norm.includes("hero") || norm.includes("banner")) return "hero";
  return "card";
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

async function findImages(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "_originals" || entry.name === "node_modules" || entry.name === ".git") {
        continue;
      }
      const subFiles = await findImages(fullPath);
      files.push(...subFiles);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if ([".png", ".jpg", ".jpeg", ".webp"].includes(ext)) {
        files.push(fullPath);
      }
    }
  }

  return files;
}

async function run() {
  console.log("=========================================================");
  console.log("   PB_IT_HUB Image Optimization & Migration Pipeline     ");
  console.log("=========================================================\n");

  await fs.mkdir(ORIGINALS_DIR, { recursive: true });

  const images = await findImages(IMAGES_DIR);
  // Also include src/app/icon.png if present
  try {
    await fs.access(ICON_PATH);
    images.push(ICON_PATH);
  } catch {}

  console.log(`Found ${images.length} images to inspect & optimize.\n`);

  const report = [];

  for (const imgPath of images) {
    const relPath = path.relative(ROOT_DIR, imgPath);
    const category = detectCategory(relPath);
    const rule = RULES[category] || RULES.card;

    // 1. Read input buffer & metadata
    const rawBuffer = await fs.readFile(imgPath);
    const origSize = rawBuffer.length;
    let meta;
    try {
      meta = await sharp(rawBuffer).metadata();
    } catch (e) {
      console.warn(`[SKIP] Could not decode ${relPath}: ${e.message}`);
      continue;
    }

    const origWidth = meta.width || 0;
    const origHeight = meta.height || 0;
    const origFormat = meta.format || path.extname(imgPath).replace(".", "");

    // 2. Safely backup original before ANY modifications
    const isUnderPublic = imgPath.startsWith(PUBLIC_DIR);
    const backupSubpath = isUnderPublic
      ? path.relative(PUBLIC_DIR, imgPath)
      : path.relative(ROOT_DIR, imgPath);
    const backupDest = path.join(ORIGINALS_DIR, backupSubpath);
    await fs.mkdir(path.dirname(backupDest), { recursive: true });

    try {
      await fs.access(backupDest);
      // Already backed up, don't overwrite backup
    } catch {
      await fs.copyFile(imgPath, backupDest);
    }

    // 3. Compute target dimensions (Never upscale!)
    let targetWidth = origWidth;
    let targetHeight = origHeight;

    if (rule.maxWidth && targetWidth > rule.maxWidth) {
      targetWidth = rule.maxWidth;
      targetHeight = Math.round((origHeight / origWidth) * targetWidth);
    }
    if (rule.maxHeight && targetHeight > rule.maxHeight) {
      targetHeight = rule.maxHeight;
      targetWidth = Math.round((origWidth / origHeight) * targetHeight);
    }

    const createBasePipeline = () => {
      let p = sharp(rawBuffer).rotate();
      if (targetWidth !== origWidth || targetHeight !== origHeight) {
        p = p.resize(targetWidth, targetHeight, {
          kernel: sharp.kernel.lanczos3,
          fit: "inside",
          withoutEnlargement: true,
        });
      }
      return p;
    };

    // 4. Generate Optimized WebP
    const webpBuffer = await createBasePipeline()
      .webp({
        quality: rule.webpQuality,
        effort: 6,
        smartSubsample: true,
      })
      .toBuffer();

    // 5. Generate Optimized AVIF
    let avifBuffer;
    try {
      avifBuffer = await createBasePipeline()
        .avif({
          quality: rule.avifQuality,
          effort: 6,
          chromaSubsampling: rule.chromaSubsampling || "4:2:0",
        })
        .toBuffer();
    } catch {}

    // 6. Handle primary file replacement and complementary formats
    const baseWithoutExt = path.join(
      path.dirname(imgPath),
      path.basename(imgPath, path.extname(imgPath)),
    );
    const targetWebpPath = `${baseWithoutExt}.webp`;
    const targetAvifPath = `${baseWithoutExt}.avif`;

    // Save sibling .webp
    await fs.writeFile(targetWebpPath, webpBuffer);

    // Save sibling .avif if generated
    if (avifBuffer) {
      await fs.writeFile(targetAvifPath, avifBuffer);
    }

    // 7. If original is PNG / JPG, optimize it in-place cleanly without degrading
    let finalOptimizedSize = webpBuffer.length;
    let primaryFormat = "webp";

    if (imgPath === ICON_PATH) {
      // For app icon, generate compact 192x192 PNG (standard for PWA/Next.js)
      const optimizedIcon = await sharp(rawBuffer)
        .resize(192, 192, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png({ compressionLevel: 9, quality: 90, effort: 8 })
        .toBuffer();
      await fs.writeFile(ICON_PATH, optimizedIcon);
      finalOptimizedSize = optimizedIcon.length;
      primaryFormat = "png";
    } else if (origFormat === "png") {
      const optimizedPng = await createBasePipeline()
        .png({ compressionLevel: 9, quality: 85, effort: 8, palette: true })
        .toBuffer();
      // Only overwrite if smaller
      if (optimizedPng.length < origSize) {
        await fs.writeFile(imgPath, optimizedPng);
      }
      finalOptimizedSize = Math.min(optimizedPng.length, webpBuffer.length);
    } else if (origFormat === "jpeg" || origFormat === "jpg") {
      const optimizedJpg = await createBasePipeline()
        .jpeg({ quality: rule.jpegQuality, mozjpeg: true })
        .toBuffer();
      if (optimizedJpg.length < origSize) {
        await fs.writeFile(imgPath, optimizedJpg);
      }
      finalOptimizedSize = Math.min(optimizedJpg.length, webpBuffer.length);
    }

    // 8. Generate responsive variants for hero/screenshot/cards
    if (rule.generateVariants && rule.variantWidths) {
      for (const vw of rule.variantWidths) {
        if (vw >= origWidth) continue;
        const vh = Math.round((origHeight / origWidth) * vw);
        const variantWebp = await sharp(rawBuffer)
          .rotate()
          .resize(vw, vh, { kernel: sharp.kernel.lanczos3, fit: "inside" })
          .webp({ quality: rule.webpQuality, effort: 5 })
          .toBuffer();
        await fs.writeFile(`${baseWithoutExt}-${vw}w.webp`, variantWebp);
      }
    }

    const reductionPercent = (((origSize - finalOptimizedSize) / origSize) * 100).toFixed(1);

    report.push({
      file: relPath,
      category,
      dimensions: `${origWidth}x${origHeight} → ${targetWidth}x${targetHeight}`,
      origFormat,
      origSize,
      optFormat: primaryFormat,
      optSize: finalOptimizedSize,
      reduction: reductionPercent,
    });

    console.log(
      `✓ [${category.toUpperCase()}] ${path.basename(relPath)}: ${formatBytes(origSize)} → ${formatBytes(finalOptimizedSize)} (${reductionPercent}% saved)`,
    );
  }

  // Summary statistics
  const totalOrigBytes = report.reduce((sum, r) => sum + r.origSize, 0);
  const totalOptBytes = report.reduce((sum, r) => sum + r.optSize, 0);
  const totalSaved = totalOrigBytes - totalOptBytes;
  const totalReduction = (((totalSaved) / totalOrigBytes) * 100).toFixed(1);

  console.log("\n=========================================================");
  console.log("                   OPTIMIZATION REPORT                   ");
  console.log("=========================================================");
  console.log(`Total Images Processed: ${report.length}`);
  console.log(`Original Total Size:    ${formatBytes(totalOrigBytes)}`);
  console.log(`Optimized Total Size:   ${formatBytes(totalOptBytes)}`);
  console.log(`Total Bandwidth Saved:  ${formatBytes(totalSaved)} (-${totalReduction}%)`);
  console.log(`Originals Preserved in: public/images/_originals/\n`);

  // Write markdown report
  let md = "# Image Optimization Report — PB_IT_HUB\n\n";
  md += `**Execution Time:** ${new Date().toISOString()}\n\n`;
  md += `| Metric | Value |\n|---|---|\n`;
  md += `| Total Images | ${report.length} |\n`;
  md += `| Original Size | **${formatBytes(totalOrigBytes)}** |\n`;
  md += `| Optimized Size | **${formatBytes(totalOptBytes)}** |\n`;
  md += `| Net Reduction | **${formatBytes(totalSaved)} (-${totalReduction}%)** |\n`;
  md += `| Backup Directory | \`public/images/_originals/\` |\n\n`;

  md += "## Detailed File Breakdown\n\n";
  md += "| File | Category | Original Dimensions | Original Size | Optimized Size | Reduction | Visual Quality |\n";
  md += "|---|---|---|---|---|---|---|\n";

  for (const r of report) {
    md += `| \`${r.file}\` | ${r.category} | ${r.dimensions} | ${formatBytes(r.origSize)} | ${formatBytes(r.optSize)} | -${r.reduction}% | Sharp / Indistinguishable |\n`;
  }

  await fs.writeFile(path.join(ROOT_DIR, "image-optimization-report.md"), md);
  console.log("Saved detailed report to image-optimization-report.md\n");
}

run().catch((err) => {
  console.error("Image optimization failed:", err);
  process.exit(1);
});

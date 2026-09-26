#!/usr/bin/env node
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT_DIR = process.cwd();
const ORIGINALS_DIR = path.join(ROOT_DIR, "public", "images", "_originals");
const PUBLIC_DIR = path.join(ROOT_DIR, "public");

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

async function findFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await findFiles(full)));
    } else if (entry.isFile()) {
      files.push(full);
    }
  }

  return files;
}

async function run() {
  console.log("=========================================================");
  console.log("     PB_IT_HUB Image Optimization Comparison Tool        ");
  console.log("=========================================================\n");

  try {
    await fs.access(ORIGINALS_DIR);
  } catch {
    console.error("Error: _originals directory not found. Please run 'npm run optimize-images' first.");
    process.exit(1);
  }

  const originalFiles = await findFiles(ORIGINALS_DIR);
  console.log(`Found ${originalFiles.length} backed-up original images to benchmark.\n`);

  console.log(
    "----------------------------------------------------------------------------------------------------------------",
  );
  console.log(
    "Filename                                | Orig Size | Opt (WebP/AVIF) | Reduction | Dimensions",
  );
  console.log(
    "----------------------------------------------------------------------------------------------------------------",
  );

  let totalOrig = 0;
  let totalOpt = 0;

  for (const origPath of originalFiles) {
    const relFromOriginals = path.relative(ORIGINALS_DIR, origPath);
    let currentPath = path.join(PUBLIC_DIR, relFromOriginals);

    if (!relFromOriginals.startsWith("images")) {
      // Could be src/app/icon.png
      currentPath = path.join(ROOT_DIR, relFromOriginals);
    }

    const origStat = await fs.stat(origPath);
    totalOrig += origStat.size;

    let origMeta;
    try {
      origMeta = await sharp(origPath).metadata();
    } catch {
      continue;
    }

    // Check sibling webp
    const baseWithoutExt = path.join(
      path.dirname(currentPath),
      path.basename(currentPath, path.extname(currentPath)),
    );
    const webpPath = `${baseWithoutExt}.webp`;

    let optSize = origStat.size;
    let optDimensions = `${origMeta.width}x${origMeta.height}`;

    try {
      const optStat = await fs.stat(webpPath);
      optSize = optStat.size;
      const optMeta = await sharp(webpPath).metadata();
      optDimensions = `${optMeta.width}x${optMeta.height}`;
    } catch {
      try {
        const curStat = await fs.stat(currentPath);
        optSize = curStat.size;
      } catch {}
    }

    totalOpt += optSize;
    const diff = origStat.size - optSize;
    const pct = (((diff) / origStat.size) * 100).toFixed(1);

    const displayName = path.basename(relFromOriginals).padEnd(38);
    const origStr = formatBytes(origStat.size).padStart(9);
    const optStr = formatBytes(optSize).padStart(15);
    const pctStr = `-${pct}%`.padStart(9);

    console.log(
      `${displayName} | ${origStr} | ${optStr} | ${pctStr} | ${optDimensions}`,
    );
  }

  console.log(
    "----------------------------------------------------------------------------------------------------------------",
  );
  const overallSaved = totalOrig - totalOpt;
  const overallPct = (((overallSaved) / totalOrig) * 100).toFixed(1);
  console.log(
    `TOTALS: ${formatBytes(totalOrig)} → ${formatBytes(totalOpt)} | SAVED: ${formatBytes(overallSaved)} (-${overallPct}%)\n`,
  );
}

run().catch(console.error);

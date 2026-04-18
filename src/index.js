#!/usr/bin/env node

import { existsSync, mkdirSync, copyFileSync, readdirSync, statSync } from "node:fs";
import { resolve, join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const TEMPLATES_DIR = resolve(__dirname, "..", "templates");

function copyDir(src, dest) {
  mkdirSync(dest, { recursive: true });
  for (const entry of readdirSync(src)) {
    const srcPath = join(src, entry);
    const destPath = join(dest, entry);
    if (statSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      if (existsSync(destPath)) {
        console.log(`  skip: ${destPath} (already exists)`);
      } else {
        copyFileSync(srcPath, destPath);
        console.log(`  create: ${destPath}`);
      }
    }
  }
}

function run() {
  const targetDir = resolve(process.argv[2] || ".");

  if (!existsSync(targetDir)) {
    mkdirSync(targetDir, { recursive: true });
  }

  const kiroDir = join(targetDir, ".kiro");
  console.log(`\nScaffolding Kiro config into ${kiroDir}\n`);
  copyDir(TEMPLATES_DIR, kiroDir);
  console.log("\nDone. Kiro boilerplate is ready.\n");
}

run();

#!/usr/bin/env node
// Downloads all images, videos, favicons from the Artemis Framer template into /public.
// Run: node scripts/download-assets.mjs

import { mkdir, writeFile } from "node:fs/promises";
import { dirname, basename, join } from "node:path";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const IMG_DIR = join(ROOT, "public/images");
const VID_DIR = join(ROOT, "public/videos");
const SEO_DIR = join(ROOT, "public/seo");

const IMAGES = [
  // Hero floating photos (4)
  ["NUTdkRLYEoKo3q0xaYuGtoBUg.jpg", "hero-1.jpg"],
  ["GfQF9MJTOQgip3GZt7WYQlFA.png", "hero-2.png"],
  ["v9by2y3t7Fgrb9sTYB57w099Lk.jpg", "hero-3.jpg"],
  ["sOV9oVng8G6eTcJz9mcCnJarYGE.jpg", "hero-4.jpg"],

  // Sneak peek marquee photos
  ["bItSXFPavhU2dit81jnbKTXR0JE.jpg", "marquee-grand-opening.jpg"],
  ["mTIgomHRzjbLd0XLW5T7qOrhxU.jpg", "marquee-portfolio-1.jpg"],
  ["40YISsvwSJc4RxvqVYZATAMwlM.jpg", "marquee-portfolio-2.jpg"],
  ["W6EKuDKZ6ilw7quzpU9IfkL248E.jpg", "marquee-portfolio-3.jpg"],
  ["5gmEX58ZB6E6bhMpCUhzutgd48.jpg", "marquee-dog-portrait.jpg"],
  ["EkqBLYkO1YzBqFZ5QtGCbxnKg.jpg", "marquee-portfolio-4.jpg"],
  ["Hhqb6e3FMAW5LJAIbJ1sxl6Dnhg.jpg", "marquee-yard-sale.jpg"],
  ["c6idvUjrSpE7PPwnzZRpEBQoLiA.png", "marquee-portfolio-5.png"],

  // Works grid (4 case studies)
  ["btVfj3uYz35Jcg8udVCo6IDHPIw.jpg", "work-finflow.jpg"],
  ["I2DGsvE6BPFKwR3seUVB72UVU.png", "work-launchpad.png"],
  ["HDv7K6e7EoqUaet9WhVVKwNMpA.png", "work-healthsync.png"],
  ["gn78wQvecZqzcGzRKWGkV3NuVE.png", "work-talentbridge.png"],

  // "What I bring" decorative SVG
  ["5bSgVOjwR5iEdfk692ONl843us.svg", "skills-illustration.svg"],

  // About / Behind the canvas polaroids
  ["peS3xlMBI5nrAInAViMhLPV75E.jpg", "about-cat.jpg"],
  ["GTwC3pibWEsTjab4hIEkLaVFfQ.jpg", "about-hiking.jpg"],
  ["SHIa3uWu2UD2oI3xk2CjDiAHAc.png", "about-portrait.png"],

  // Brand logos (64x64)
  ["C0KvfmTftD3so0Yz3V52LgidE.png", "brand-1.png"],
  ["Kjm316F3wf9TSJbhA0oEmjSPcRM.jpg", "brand-2.jpg"],
  ["e2kWTtL12IMp57QHHPh7cxc2MT4.png", "brand-3.png"],
];

const VIDEOS = [
  ["2DpNdbCobj1SacO4OMpr1IvlGE.mp4", "work-video-1.mp4"],
  ["216jYTG59MjWaGTdoFmxyKeLs2Q.mp4", "work-video-2.mp4"],
  ["A4ctABxvbRaq6aq99HPazcljFA.mp4", "work-video-3.mp4"],
  ["NH8EQlfaxl91U2nhBaq8RC4NODQ.mp4", "work-video-4.mp4"],
];

const SEO = [
  ["qTBwlssNxwQI4HTBgvSpbzbuHo.png", "favicon.png"],
  ["hW0Hk44zclSGxbNW0GU6Ubx4Fc.png", "apple-touch-icon.png"],
];

async function ensure(dir) {
  if (!existsSync(dir)) await mkdir(dir, { recursive: true });
}

async function download(url, outPath, label) {
  if (existsSync(outPath)) {
    console.log(`✓ skip (exists) ${label}`);
    return;
  }
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`✗ ${label}: HTTP ${res.status}`);
    return;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  await ensure(dirname(outPath));
  await writeFile(outPath, buf);
  console.log(`✓ ${label} (${(buf.length / 1024).toFixed(1)}KB)`);
}

async function batch(items, base, dir, group) {
  await ensure(dir);
  const chunks = [];
  for (let i = 0; i < items.length; i += 4) chunks.push(items.slice(i, i + 4));
  for (const ch of chunks) {
    await Promise.all(
      ch.map(([src, dest]) =>
        download(`${base}${src}`, join(dir, dest), `${group}/${dest}`),
      ),
    );
  }
}

console.log("Downloading Artemis template assets...\n");
await batch(IMAGES, "https://framerusercontent.com/images/", IMG_DIR, "images");
await batch(VIDEOS, "https://framerusercontent.com/assets/", VID_DIR, "videos");
await batch(SEO, "https://framerusercontent.com/images/", SEO_DIR, "seo");
console.log("\nDone.");

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { dirname, join } from "node:path";
import * as fontkit from "fontkit";
import sharp from "sharp";
import { zipSync } from "fflate";
import { brandCopy } from "../src/lib/brand-copy.ts";

// Fixed artwork uses outlines, never embedded or redistributed font files.
// Run `pnpm prepare:brand-fonts` before this authoring-time export.
const output = "public/brand/downloads";
const ink = "#171715";
const paper = "#FFFFFF";
const acid = "#D8EF45";
const medium = fontkit.openSync("generated/brand-fonts/GeneralSans-Medium.woff2");
const regular = fontkit.openSync("generated/brand-fonts/GeneralSans-Regular.woff2");
const mono = fontkit.openSync("generated/brand-fonts/MesloLGS-Regular.ttf");
const files = {};
const manifest = [];
const geometry =
  '<path d="M22 25 H54 V57 H22 Z M22 73 H54 V105 H22 Z M70 73 H102 V105 H70 Z"/><circle cx="92" cy="30" r="15"/>';
const escape = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;");

function text(font, value, x, baseline, size, tracking = 0) {
  const { glyphs, positions } = font.layout(value);
  let cursor = 0;
  const paths = glyphs
    .map((glyph, i) => {
      const pos = positions[i];
      const path = `<path transform="translate(${cursor + pos.xOffset} ${pos.yOffset})" d="${glyph.path.toSVG()}"/>`;
      cursor += pos.xAdvance + tracking * font.unitsPerEm;
      return path;
    })
    .join("");
  return {
    width: ((cursor - tracking * font.unitsPerEm) * size) / font.unitsPerEm,
    markup: `<g aria-label="${escape(value)}" transform="translate(${x} ${baseline}) scale(${size / font.unitsPerEm} ${-size / font.unitsPerEm})">${paths}</g>`,
  };
}

function svg(width, height, title, content, foreground = ink, background) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img"><title>${escape(title)}</title>${background ? `<path fill="${background}" d="M0 0H${width}V${height}H0Z"/>` : ""}<g fill="${foreground}">${content}</g></svg>\n`;
}

// Original White Room asset: 204.8px symbol box, 78px lettering.
// Normalize its 1.6× artwork to the symbol's 128-unit viewBox, then scale
// the whole lockup for placements. General Sans and tracking stay approved.
function stackedArtwork(wordmarkOnly = false) {
  const x = wordmarkOnly ? 16 : 153.75;
  const first = text(medium, "experimental", x, 61.875, 48.75, -0.045);
  const second = text(medium, "software", x, 108.75, 48.75, -0.045);
  return {
    width: Math.ceil(x + first.width + 20),
    markup: (wordmarkOnly ? "" : geometry) + first.markup + second.markup,
  };
}

function lockup(color, arrangement) {
  if (arrangement === "horizontal") {
    const line = text(medium, "experimental software", 152, 85, 64, -0.045);
    return svg(
      Math.ceil(176 + line.width),
      128,
      "Experimental Software / horizontal lockup",
      geometry + line.markup,
      color,
    );
  }
  const artwork = stackedArtwork(arrangement === "wordmark");
  return svg(
    artwork.width,
    144,
    `Experimental Software / ${arrangement}`,
    artwork.markup,
    color,
  );
}

async function save(name, data) {
  const bytes = typeof data === "string" ? Buffer.from(data) : data;
  await mkdir(dirname(join(output, name)), { recursive: true });
  await writeFile(join(output, name), bytes);
  files[name] = bytes;
  manifest.push({
    file: name,
    bytes: bytes.length,
    sha256: createHash("sha256").update(bytes).digest("hex"),
  });
}

async function artwork(name, source, pngWidth) {
  await save(`${name}.svg`, source);
  await save(
    `${name}.png`,
    await sharp(Buffer.from(source)).resize({ width: pngWidth }).png().toBuffer(),
  );
}

for (const [variant, color] of [
  ["ink", ink],
  ["white", paper],
]) {
  await artwork(
    `symbols/outlier-${variant}`,
    svg(128, 128, "Experimental Software / original Outlier", geometry, color),
    1024,
  );
  for (const arrangement of ["stacked", "horizontal", "wordmark"]) {
    await artwork(
      `logos/${arrangement}-${variant}`,
      lockup(color, arrangement),
      arrangement === "horizontal" ? 2400 : 1600,
    );
  }
}

for (const [variant, color, background] of [
  ["paper", ink, paper],
  ["ink", paper, ink],
  ["acid", ink, acid],
]) {
  await artwork(
    `avatars/avatar-${variant}`,
    svg(
      512,
      512,
      "Experimental Software / Outlier avatar",
      `<g transform="translate(40 40) scale(3.375)">${geometry}</g>`,
      color,
      background,
    ),
    512,
  );
}

function wrappedText(
  font,
  value,
  x,
  baseline,
  size,
  maxWidth,
  lineHeight,
  tracking = 0,
) {
  const lines = [];
  let line = "";
  for (const word of value.split(" ")) {
    const candidate = line ? `${line} ${word}` : word;
    if (line && text(font, candidate, 0, 0, size, tracking).width > maxWidth) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  }
  if (line) lines.push(line);
  return lines
    .map(
      (value, index) =>
        text(font, value, x, baseline + index * lineHeight, size, tracking).markup,
    )
    .join("");
}

function shareCard(width, height, isTemplate = false) {
  const heading = isTemplate
    ? text(regular, "Project name", 56, 340, 104, -0.03).markup
    : wrappedText(regular, brandCopy.headline, 56, 340, 110, width - 112, 114, -0.03);
  const description = isTemplate
    ? text(regular, "A short description of what this project does.", 59, 409, 28)
        .markup
    : "";
  const category = text(mono, brandCopy.category.toUpperCase(), 80, 562, 40);
  const footer = isTemplate
    ? `<path fill="${acid}" d="M56 ${height - 106}H64V${height - 98}H56Z"/>` +
      text(mono, "EXPERIMENTAL SOFTWARE / PROJECT", 80, height - 94, 16).markup
    : `<path fill="${acid}" d="M56 512H${104 + category.width}V582H56Z"/>` +
      category.markup;
  const logoScale = isTemplate ? 32 / 48.75 : 1.08;
  const logo = `<g transform="translate(${56 - 22 * logoScale} ${isTemplate ? 46 : 40}) scale(${logoScale})">${stackedArtwork().markup}</g>`;
  const divider = isTemplate
    ? `<path fill="#DDE1D7" d="M56 172H${width - 56}V173H56Z"/>`
    : "";
  return svg(
    width,
    height,
    isTemplate
      ? "Experimental Software / editable repository cover template"
      : "Experimental Software / social card",
    logo + divider + heading + description + footer,
    ink,
    paper,
  );
}
await artwork("social/experimental-software", shareCard(1200, 630), 1200);
await artwork("templates/repository-cover", shareCard(1280, 640, true), 1280);

const favicon = svg(128, 128, "Experimental Software", geometry, ink, paper);
await save("favicons/favicon.svg", favicon);
for (const [name, size] of [
  ["favicon-32x32.png", 32],
  ["apple-touch-icon.png", 180],
  ["icon.png", 512],
]) {
  const bytes = await sharp(Buffer.from(favicon)).resize(size, size).png().toBuffer();
  await save(`favicons/${name}`, bytes);
  await writeFile(join("public", name), bytes);
}
const icoSizes = [16, 32, 48];
const icoImages = await Promise.all(
  icoSizes.map((size) =>
    sharp(Buffer.from(favicon)).resize(size, size).png().toBuffer(),
  ),
);
const icoHeader = Buffer.alloc(6 + icoSizes.length * 16);
icoHeader.writeUInt16LE(1, 2);
icoHeader.writeUInt16LE(icoSizes.length, 4);
let icoOffset = icoHeader.length;
icoImages.forEach((bytes, index) => {
  const entry = 6 + index * 16;
  icoHeader[entry] = icoSizes[index];
  icoHeader[entry + 1] = icoSizes[index];
  icoHeader.writeUInt16LE(1, entry + 4);
  icoHeader.writeUInt16LE(32, entry + 6);
  icoHeader.writeUInt32LE(bytes.length, entry + 8);
  icoHeader.writeUInt32LE(icoOffset, entry + 12);
  icoOffset += bytes.length;
});
const ico = Buffer.concat([icoHeader, ...icoImages]);
await save("favicons/favicon.ico", ico);
await writeFile("public/favicon.ico", ico);
await writeFile("public/favicon.svg", favicon);
await writeFile("public/social.png", files["social/experimental-software.png"]);

const readme = `# Experimental Software — White Room asset pack 1.1

Approved identity: original Outlier, General Sans, and Meslo LG S.
Reference: https://experimental.software/brand

## Files
- symbols/: original symbol, ink or white, transparent SVG + 1024px PNG.
- logos/: stacked primary lockup, horizontal lockup, and wordmark only. Ink or white; transparent SVG + PNG. All lettering is outlined.
- avatars/: 512px square avatars on paper, ink, or acid. Suitable for GitHub and Notion; padded for circular crops.
- favicons/: browser SVG, multi-size ICO, 32px PNG, 180px Apple touch icon, and 512px app icon.
- social/: 1200 × 630 company share card, SVG + PNG.
- templates/: 1280 × 640 repository cover layout, SVG + PNG. “Project name” is a placeholder, not a launched product. Regenerate from the source script with the actual name and description.
- theme/: CSS and JSON design tokens.
- font-notes.txt and font-licenses/: font setup and license information. Font files are not included.
- manifest.json: SHA-256 checksums for the exported files.

## Usage
Keep the original geometry and the circle's upward/rightward offset. Use ink on light backgrounds, white on ink, or the supplied avatar files. Keep at least half one square's width clear around the visible mark; start at 24px for the full symbol. Never stretch, rotate, rearrange, add effects, or recolor individual pieces of the logo. Use the primary stacked lockup unless the placement needs a horizontal version.

SVG lettering is converted to paths: no installed fonts, font files, or font licenses are needed to display these fixed graphics. For live/editable typography, obtain the fonts separately and read the included notes. These brand files do not grant rights to redistribute font binaries or imply endorsement by Experimental Software.

General Sans Regular 400: headings/body. Medium 500: wordmark. Meslo LG S Regular 400: labels/code. Headline tracking −0.03em; wordmark −0.045em.

The stacked lockup restores the original White Room proportions: a 204.8px symbol box to 78px type, approximately 2.63:1. The normalized SVG uses a 128-unit symbol box and 48.75-unit type. Scale the complete lockup together; do not size the symbol and lettering independently.

Paper #FFFFFF · Ink #171715 · Acid #D8EF45 · Surface #F3F5EF · Muted #62665E · Rule #DDE1D7.

## Regenerating
In the website repository, run pnpm prepare:brand-fonts, then pnpm build:brand-assets. The script scripts/build-brand-assets.mjs preserves the original symbol and outlines the exact approved fonts. Font binaries remain outside the public repository and ZIP.
`;
await save("README.md", readme);
for (const [source, name] of [
  ["public/brand/tokens.json", "theme/tokens.json"],
  ["public/brand/white-room.css", "theme/white-room.css"],
  ["public/brand/font-notes.txt", "font-notes.txt"],
  ["public/brand/font-licenses/apache-2.0.txt", "font-licenses/apache-2.0.txt"],
  ["public/brand/font-licenses/general-sans.txt", "font-licenses/general-sans.txt"],
  ["public/brand/font-licenses/meslo-notices.txt", "font-licenses/meslo-notices.txt"],
])
  await save(name, await readFile(source));
await save(
  "manifest.json",
  JSON.stringify({ version: "1.1", files: [...manifest] }, null, 2) + "\n",
);
const zipFiles = Object.fromEntries(
  Object.entries(files).map(([name, data]) => [
    `experimental-software/${name}`,
    [data, { mtime: new Date("2026-09-07T12:00:00Z") }],
  ]),
);
await writeFile(
  join(output, "experimental-software-brand-kit.zip"),
  zipSync(zipFiles, { level: 6 }),
);
console.log(
  `Exported ${manifest.length} files and experimental-software-brand-kit.zip`,
);

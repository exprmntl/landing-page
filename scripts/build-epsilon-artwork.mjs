import fs from "node:fs/promises";
import * as fontkit from "fontkit";
import sharp from "sharp";

const out = "public/marketing/projects/project-epsilon";
const { colors } = JSON.parse(await fs.readFile("public/brand/tokens.json", "utf8"));
const sans = fontkit.openSync("generated/brand-fonts/GeneralSans-Regular.woff2");
const mono = fontkit.openSync("generated/brand-fonts/MesloLGS-Regular.ttf");

function text(font, value, x, y, size, tracking = 0, color = colors.ink) {
  const run = font.layout(value);
  const scale = size / font.unitsPerEm;
  return run.glyphs.map((glyph, index) => {
    const p = run.positions[index];
    const markup = `<path fill="${color}" transform="translate(${x + p.xOffset * scale} ${y - p.yOffset * scale}) scale(${scale} ${-scale})" d="${glyph.path.toSVG()}"/>`;
    x += p.xAdvance * scale + tracking * size;
    return markup;
  }).join("");
}

// A project motif, separate from the unchanged Original Outlier brand mark.
const epsilon = `<path d="M1024 228C1001 207 970 196 936 198C884 198 852 223 852 256C852 291 883 314 928 314H982M928 314C878 314 844 338 844 375C844 414 880 440 934 440C974 440 1007 427 1033 402" fill="none" stroke="${colors.ink}" stroke-width="27"/>`;
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><title>Project Epsilon — a new experiment</title>
<rect width="1200" height="630" fill="${colors.paper}"/>
${text(mono, "EXPERIMENTAL SOFTWARE", 66, 82, 18, 0, colors.muted)}
${text(sans, "Project", 62, 289, 112, -.03)}
${text(sans, "Epsilon", 62, 409, 112, -.03)}
${text(mono, "WORK IN PROGRESS", 66, 552, 18, 0, colors.muted)}
<rect x="771" y="146" width="338" height="338" fill="${colors.surface}"/>
${epsilon}
<rect x="1095" y="132" width="28" height="28" fill="${colors.accent}"/>
</svg>`;
await fs.mkdir(out, { recursive: true });
await fs.writeFile(`${out}/cover.svg`, svg);
await sharp(Buffer.from(svg)).webp({ quality: 95 }).toFile(`${out}/cover.webp`);
console.log("Built Project Epsilon artwork from White Room brand tokens and outlined type.");

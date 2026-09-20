import fs from "node:fs/promises";
import sharp from "sharp";

const root = "public/marketing/projects/typechinese-artwork";
const brand = `${root}/brand`;
const tokens = JSON.parse(await fs.readFile(`${brand}/tokens.json`, "utf8"));
const css = Object.entries(tokens.colors).map(([key, value]) =>
  `  --typechinese-${key.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`)}: ${value};`
).join("\n");
await fs.writeFile(`${brand}/tokens.css`, `/* Approved palette; opt in during the website redesign. */\n:root {\n${css}\n}\n`);

const mark = await fs.readFile(`${brand}/mark.svg`, "utf8");
const markContent = mark.slice(mark.indexOf(">") + 1, mark.lastIndexOf("</svg>"));
const square = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 84 84"><title>TypeChinese app icon</title><rect width="84" height="84" rx="18" fill="${tokens.colors.background}"/><g transform="translate(16 15.1875) scale(.8125)">${markContent}</g></svg>`;
await fs.writeFile(`${brand}/icon-square.svg`, square);
for (const size of [32, 180, 512]) {
  await sharp(Buffer.from(square)).resize(size, size).png().toFile(`${brand}/icon-square-${size}.png`);
}
await sharp(`${brand}/lockup.svg`, { density: 288 }).png().toFile(`${brand}/lockup.png`);

// The approved composition with the shared warm-ivory background and no wordmark.
const logo = await sharp(`${brand}/lockup.svg`, { density: 288 }).resize({ width: 340 }).png().toBuffer();
const full = await sharp(`${root}/social/keycaps-ivory-background.png`)
  .composite([{ input: logo, left: 106, top: 86 }])
  .png().toBuffer();
await fs.writeFile(`${root}/social/keycaps-branded-full.png`, full);
await sharp(full).resize(1200, 630, { fit: "fill" }).png().toFile(`${root}/social/social.png`);
console.log("Built approved TypeChinese icon exports, palette CSS, and 1200 × 630 social image.");

import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { unzipSync } from "fflate";

// Fonts are build assets, not redistributable repository assets. Keep the exact
// approved files pinned by hash; see docs/brand-fonts.md for sources and terms.
const directory = new URL("../generated/brand-fonts/", import.meta.url);
const fonts = [
  {
    file: "GeneralSans-Regular.woff2",
    url: "https://cdn.fontshare.com/wf/MFQT7HFGCR2L5ULQTW6YXYZXXHMPKLJ3/YWQ244D6TACUX5JBKATPOW5I5MGJ3G73/7YY3ZAAE3TRV2LANYOLXNHTPHLXVWTKH.woff2",
    sha256: "3ec2be771caf168b077ca05af4df1dace77088e2b3a27da570036e61be58a039",
  },
  {
    file: "GeneralSans-Medium.woff2",
    url: "https://cdn.fontshare.com/wf/3RZHWSNONLLWJK3RLPEKUZOMM56GO4LJ/BPDRY7AHVI3MCDXXVXTQQ76H3UXA63S3/SB2OEB6IKZPRR6JT4GFJ2TFT6HBB6AZN.woff2",
    sha256: "c30377df1de8444d07161725c751f458beec07c28034df2fd275d1aa587a239f",
  },
  {
    file: "MesloLGS-Regular.ttf",
    url: "https://raw.githubusercontent.com/andreberg/Meslo-Font/master/dist/v1.2.1/Meslo%20LG%20v1.2.1.zip",
    archiveSha256: "d0bcb7668dda8fa1a0f8162d626adb434c32854e243b5bd52a717cf569af08d0",
    entry: "Meslo LG v1.2.1/MesloLGS-Regular.ttf",
    sha256: "9f142c57ab4fd32f0af16b750e42fe3421013ac83d384439aff9eed0f89b884a",
  },
];

function digest(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

async function prepare(font) {
  const destination = new URL(font.file, directory);
  try {
    if (digest(await readFile(destination)) === font.sha256) return;
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }

  const response = await fetch(font.url, { signal: AbortSignal.timeout(30_000) });
  if (!response.ok)
    throw new Error(`${font.file}: download failed (${response.status})`);
  let bytes = new Uint8Array(await response.arrayBuffer());
  if (font.entry) {
    if (digest(bytes) !== font.archiveSha256) {
      throw new Error(`${font.file}: upstream archive changed; review before updating`);
    }
    bytes = unzipSync(bytes, { filter: (entry) => entry.name === font.entry })[
      font.entry
    ];
  }
  if (!bytes || digest(bytes) !== font.sha256) {
    throw new Error(`${font.file}: font does not match the approved specimen`);
  }
  await writeFile(destination, bytes);
  console.log(`Prepared ${font.file}`);
}

await mkdir(directory, { recursive: true });
await Promise.all(fonts.map(prepare));
console.log("White Room fonts ready.");

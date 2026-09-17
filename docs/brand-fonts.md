# White Room font delivery

Selected pairing: General Sans Regular 400 and Medium 500, with Meslo LG S Regular 400. The Outlier geometry and palette are unchanged. Headlines use −0.03em tracking; the wordmark uses −0.045em; body text uses normal spacing.

`pnpm dev` and `pnpm build` run `prepare:brand-fonts`. It fetches the exact files used in the approved local comparison, checks their SHA-256 hashes, and writes them to `generated/brand-fonts/`. Cached files are verified and reused. A missing, changed, or unavailable download fails the build with an error rather than silently publishing fallback typography. To refresh locally, run `pnpm prepare:brand-fonts`.

`next/font/local` serves the files from this site's build. The marketing homepage, brand guide, and Flight Currency privacy page apply `whiteRoomFonts` from `src/styles/brand-fonts.ts`; portaled brand components use the same classes. These classes provide the variables consumed by `.brand-theme`. Generic fallback families remain only for the loading/error state; font synthesis is disabled. The IDE retains its existing font stack.

## Sources and terms

- General Sans: official Fontshare WOFF2 files for weights 400 and 500. https://www.fontshare.com/fonts/general-sans
- Meslo LG S: `MesloLGS-Regular.ttf` from André Berg's original Meslo LG v1.2.1 ZIP. https://github.com/andreberg/Meslo-Font/tree/master/dist/v1.2.1
- Public notes and license notices: `public/brand/font-notes.txt` and `public/brand/font-licenses/`.

Fontshare's ITF Free Font License v2.0 (17 August 2026) permits commercial websites, self-hosted webfonts, and logos without purchase fees. It restricts distributing font files through repositories and making fonts available as a selectable authoring resource for third parties. Keep the font binaries out of source, theme downloads, and the IDE repository mirror. Other projects should obtain their own files from Fontshare. https://www.fontshare.com/licenses/itf-ffl

The original Meslo project publishes Apache 2.0 terms, which permit commercial use without a purchase fee. Keep the Apache license and the retained Apple, Tavmjong Bah, and Bitstream notices. Meslo remains the selected font; no purchase or replacement is pending.

Provenance note: Meslo is a Menlo derivative. The original About PDF contains tentative wording about making it public domain, while the same release and README explicitly supply Apache 2.0 terms. The v1.2.1 font's name table retains upstream copyrights but does not include a separate license field. This is a limitation of the upstream documentation, not evidence of a fee or a prohibition on this website's use. The earlier launch checklist overstated this uncertainty as a release decision. These notes describe the published license, not an independent legal clearance of the entire upstream chain.

No font purchase was made. No Apple-installed Helvetica or Menlo font file is included in the project.

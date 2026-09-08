# White Room font delivery

Selected pairing: General Sans Regular 400 and Medium 500, with Meslo LG S Regular 400. The Outlier geometry and palette are unchanged. Headlines use −0.03em tracking; the wordmark uses −0.045em; body text uses normal spacing.

`pnpm dev` and `pnpm build` run `prepare:brand-fonts`. It fetches the exact files used in the approved local comparison, checks their SHA-256 hashes, and writes them to `generated/brand-fonts/`. Cached files are verified and reused. A missing, changed, or unavailable download fails the build with an error rather than silently publishing fallback typography. To refresh locally, run `pnpm prepare:brand-fonts`.

`next/font/local` serves the files from this site's build and preloads them on `/brand`. Apply `whiteRoomFonts` from `src/styles/brand-fonts.ts` to the page root and portaled dialog content. These classes provide the variables consumed by `.brand-theme`. Generic fallback families remain only for the loading/error state; font synthesis is disabled. The homepage is not styled with these classes.

## Sources and terms

- General Sans: official Fontshare WOFF2 files for weights 400 and 500. https://www.fontshare.com/fonts/general-sans
- Meslo LG S: `MesloLGS-Regular.ttf` from André Berg's original Meslo LG v1.2.1 ZIP. https://github.com/andreberg/Meslo-Font/tree/master/dist/v1.2.1
- Public notes and license notices: `public/brand/font-notes.txt` and `public/brand/font-licenses/`.

Fontshare's ITF Free Font License v2.0 (17 August 2026) permits commercial websites, self-hosted webfonts, and logos without purchase fees. It restricts distributing font files through repositories and making fonts available as a selectable authoring resource for third parties. Keep the font binaries out of source, theme downloads, and the IDE repository mirror. Other projects should obtain their own files from Fontshare. https://www.fontshare.com/licenses/itf-ffl

The original Meslo project publishes Apache 2.0 terms and retains Apple, Tavmjong Bah, and Bitstream copyright notices. Its About PDF acknowledges uncertainty about rights to the underlying Menlo-derived work. No upstream Apple grant establishing general redistribution was located in the research. The design choice and this implementation are not a legal clearance claim; the Apache notice does not by itself settle upstream rights. Preserve this caveat when sharing the system with other projects.

No font purchase was made. No Apple-installed Helvetica or Menlo font file is included in the project.

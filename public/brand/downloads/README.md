# Experimental Software — White Room asset pack 1.1

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

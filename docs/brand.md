# White Room / brand guide

The reference lives at `/brand`. Selected identity: Original Outlier (U0) + White Room, September 7, 2026. The marketing homepage uses the same theme, with the existing IDE experience preserved at `/code`.

The brand guide and component styling are approved. Version 1.1 locks in General Sans + Meslo LG S and the revised headline spacing. Future website redesigns should preserve `/brand` as the reference for the selected identity.

- `src/app/brand/page.tsx`: guide content and page metadata.
- `src/app/brand/brand.css`: guide layout only.
- `src/components/brand/Outlier.tsx`: exact original mark geometry.
- `src/styles/white-room.css`: reusable tokens and component styling. Scope with `brand-theme` and `brand-ui`; include those classes on portaled dialog content as well.
- `src/styles/brand-fonts.ts`: the two selected fonts, served by Next.js. Apply `whiteRoomFonts` to the guide root and portaled content so both inherit the font variables.
- `scripts/prepare-brand-fonts.mjs`: downloads the exact approved font files into ignored `generated/brand-fonts/` before development and production builds; verifies SHA-256 checksums and reuses valid cached files.
- `src/components/ui/`: official shadcn Base Nova component source, adapted for local imports, client boundaries, Lucide icons, and forwarding tab orientation to Base UI. Source: `https://ui.shadcn.com/r/styles/base-nova/{component}.json`, retrieved September 7, 2026. Base UI handles interaction, focus, and keyboard behavior.
- `src/components/brand/ComponentPlayground.tsx`: interactive examples; form state lasts only for the current page session.
- `public/brand/`: original SVG/PNG, selected identity JSON, and downloadable theme. Keep `white-room.css` synchronized with `src/styles/white-room.css` when changing the theme.

General Sans Regular (400) is used for headlines and body text; Medium (500) for the wordmark. Meslo LG S Regular (400) is used for labels, metadata, and code. Display tracking is −0.03em; wordmark tracking remains −0.045em. Body text uses normal spacing. The marketing homepage and brand guide deliver these as webfonts. The IDE keeps its existing font stack.

The downloadable theme specifies font families and tracking tokens but does not include font files. See [font delivery and licensing](brand-fonts.md), including the unresolved upstream Meslo licensing question. Typography selection does not assert that all downstream redistribution uses are licensed.

The page expands the initial visual study with 14px interactive labels, 12px secondary metadata, 44px minimum buttons/inputs, a stronger input border, a visible ink focus outline, and a reserved error color. These are interface accessibility choices; the selected brand palette and original logo geometry remain unchanged.

Run `pnpm dev` and open `/brand`. No publication is required for local review.

## Company language

The reference is `/brand#language`, with shared copy in `src/lib/brand-copy.ts`.

- Category: **software lab**.
- Headline: **From experimentation to production.**
- Introduction: **We’re a software lab developing, launching, and growing software products, with experimentation shaping what we build and how we build it.**
- Voice: company-focused, direct, deliberate, and ambitious. Use “we.” The company introduction does not name the founder or narrow the company to current project categories.
- Navigation and catalog: **Projects**. A product is a project released for ongoing use; an experiment explores or tests an idea. This vocabulary does not require separate public sections or classify all small projects as experiments.
- Core verbs: **develop, launch, and grow**; **develop and operate** for ongoing company responsibility. Research describes exploration.
- The homepage gives all six projects the same image-led card treatment, puts TypeChinese first, and marks RxRecall as New. badminton.fyi is labeled Database with equal visual prominence; Orb UI is labeled Open source.

The visual identity and typography remain White Room 1.1. The wording above replaces earlier marketing copy; historical layout studies retain their earlier copy for comparison.

## Downloadable kit

The guide's `/brand#wallpapers` section includes iPhone Lock Screen and Home Screen wallpapers, macOS wallpapers, and personal LinkedIn/X banners in paper and ink, with individual PNG/SVG links and a dedicated ZIP. The Home Screen pair keeps the app area blank and places the original mark and wordmark on either side of Search, using the supplied iPhone screenshot for positioning. These are also included in the complete kit. Masters live under `public/brand/downloads/wallpapers/`; `build:brand-assets` preserves their bytes and rebuilds both archives. The LinkedIn personal banner is 1584×396 and remains separate from the existing company-page cover.

`pnpm build:brand-assets` regenerates `public/brand/downloads/` and its ZIP after fonts have been prepared. It includes transparent ink/white SVG and PNG symbols, stacked/horizontal lockups, wordmarks, paper/ink/acid avatars, browser and Apple touch icons, a 1200×630 share card, a finished 1280×640 GitHub repository social preview, Notion/LinkedIn/X covers, a separate repository-cover template, theme files, and usage notes. The share card uses the original White Room stacked-logo proportions and the shared homepage headline, with SOFTWARE LAB highlighted in acid as its current supporting label. The social card is approved for this PR: no divider, the original stacked-logo proportions, and the acid SOFTWARE LAB label. The separate template contains placeholder copy and must be regenerated for the actual project.

The stacked asset follows the original White Room logo layout: a 204.8px symbol box with 78px lettering, a box-to-font-size ratio of approximately 2.63:1. Its normalized 128-unit symbol uses 48.75-unit General Sans Medium lettering at −0.045em tracking. This ratio describes the full symbol viewBox and font size, not the visible ink bounds. Scale the entire lockup together. It supersedes the later export's 128:62.5 proportions; existing responsive HTML logo treatments are separate implementations.

All text in the artwork is outlined using the approved font files. The SVGs have no font or external resource dependencies. The ZIP includes a checksum manifest and excludes font binaries. Generated downloads are excluded from the in-browser repository mirror; the export script remains visible there.

# White Room / brand guide

The reference lives at `/brand`. Selected identity: Original Outlier (U0) + White Room, September 7, 2026. The website homepage remains the existing IDE experience.

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

General Sans Regular (400) is used for headlines and body text; Medium (500) for the wordmark. Meslo LG S Regular (400) is used for labels, metadata, and code. Display tracking is −0.03em; wordmark tracking remains −0.045em. Body text uses normal spacing. These are delivered as webfonts, rather than relying on visitors' installed fonts. The homepage keeps its existing font stack and IDE experience.

The downloadable theme specifies font families and tracking tokens but does not include font files. See [font delivery and licensing](brand-fonts.md), including the unresolved upstream Meslo licensing question. Typography selection does not assert that all downstream redistribution uses are licensed.

The page expands the initial visual study with 14px interactive labels, 12px secondary metadata, 44px minimum buttons/inputs, a stronger input border, a visible ink focus outline, and a reserved error color. These are interface accessibility choices; the selected brand palette and original logo geometry remain unchanged.

Run `pnpm dev` and open `/brand`. No publication is required for local review.

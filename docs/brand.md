# White Room / brand guide

The reference lives at `/brand`. Selected identity: Original Outlier (U0) + White Room, September 7, 2026. The website homepage remains the existing IDE experience.

The brand guide and component styling are approved for the initial public release. Future website redesigns should preserve `/brand` as the reference for the selected identity.

- `src/app/brand/page.tsx`: guide content and page metadata.
- `src/app/brand/brand.css`: guide layout only.
- `src/components/brand/Outlier.tsx`: exact original mark geometry.
- `src/styles/white-room.css`: reusable tokens and component styling. Scope with `brand-theme` and `brand-ui`; include those classes on portaled dialog content as well.
- `src/components/ui/`: official shadcn Base Nova component source, adapted for local imports, client boundaries, Lucide icons, and forwarding tab orientation to Base UI. Source: `https://ui.shadcn.com/r/styles/base-nova/{component}.json`, retrieved September 7, 2026. Base UI handles interaction, focus, and keyboard behavior.
- `src/components/brand/ComponentPlayground.tsx`: interactive examples; form state lasts only for the current page session.
- `public/brand/`: original SVG/PNG, selected identity JSON, and downloadable theme. Keep `white-room.css` synchronized with `src/styles/white-room.css` when changing the theme.

Helvetica Neue Regular is used for headlines/body; Medium for the wordmark. Menlo Regular is used for labels/metadata. Font files are not bundled. The local Mac preview uses installed fonts. Consistent public web typography requires the appropriate webfont licensing and delivery setup; Arial and generic monospace are declared fallbacks, not newly selected brand fonts.

The page expands the initial visual study with 14px interactive labels, 12px secondary metadata, 44px minimum buttons/inputs, a stronger input border, a visible ink focus outline, and a reserved error color. These are interface accessibility choices; the selected brand palette and original logo geometry remain unchanged.

Run `pnpm dev` and open `/brand`. No publication is required for local review.

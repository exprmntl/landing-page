# TypeChinese approved identity

Approved September 20, 2026: the 中 speech bubble and General Sans Medium wordmark, with dark “Type” and warm red “Chinese.” This is the canonical reusable asset bundle. Website rollout is deferred to the broader redesign.

The 中 character is scaled to 85% of its initial size around the bubble's center, giving it more space above and below. Bubble silhouette and wordmark proportions remain unchanged.

## Palette

| Role | Color |
| --- | --- |
| Brand red | `#D03030` |
| Wordmark ink | `#202124` |
| Shared page and square icon background | `#F6F4EE` |
| Card behind the wordmark | `#FFFFFF` |

The page and square icon use one shared warm background token; cards use white. `tokens.json` is the source; `tokens.css` provides reusable CSS variables for the future website redesign.

## Assets

- `lockup.svg`: approved full-color horizontal logo and wordmark; outlined lettering, no font dependency.
- `mark.svg`: transparent symbol.
- `lockup-mono.svg`, `mark-mono.svg`: charcoal versions.
- `lockup-white.svg`, `mark-white.svg`: reversed versions.
- `icon-square.svg`: approved symbol on its warm background, with the review tile's proportions and corner radius.
- `icon-square-32.png`, `icon-square-180.png`, `icon-square-512.png`: raster icon exports.
- `lockup.png`: transparent high-resolution full lockup.
- `GeneralSans-Medium.woff2` and `general-sans-license.txt`: wordmark font and license.

The approved SVGs are saved independently of the exploratory directions. Run `node scripts/build-typechinese-brand-assets.mjs` from the repo root to rebuild raster exports, CSS tokens, and the social image.

Selected social artwork: `../social/social.png` (1200 × 630). All three original alternatives remain in `../variants/`.

# Project screenshots

## Current gallery exports

Emote uses `emote-social.png`, copied unchanged from the approved social image at https://useemote.com/social/emote-social-card.png on September 21, 2026. It replaces the Project Epsilon teaser. The 1730×909 source preserves the full composition in the gallery's approximately 1.9:1 slot.

All nine gallery images match the 1200×630 social-image slot. Keep this ratio
when replacing an image: `object-fit: contain` preserves the complete artwork,
but differently shaped exports will produce bars.

- RxRecall uses `rxrecall-social.jpg`, copied from its published social image at https://rx-recall.com/opengraph-image.jpg?opengraph-image.05in78mhf2hqf.jpg.
- Orb UI uses `orb-ui-artwork/homepage-social.png`, the approved composition with its actual homepage orb. Editable source and provenance are in that directory.
- Flight Currency uses `../extension-artwork/google-flights-currency/social.webp`, recomposed for 1200×630 with the complete text and ticket illustration.
- badminton.fyi uses `badminton-artwork/editorial-social.png`, the selected editorial social export.
- Codex Updater uses `codex-updater-social.png`, copied unchanged from its repository's `assets/promo/social-card.png`.

## Historical exports and capture notes

The notes below describe earlier exports. The older 16:9 versions are no longer used by the current gallery.

The current badminton.fyi card uses `badminton-editorial.webp`: the owner-selected black-and-white racket close-up with “Find your next racket.” Approved September 20, 2026, replacing the three-racket artwork. This is generated editorial artwork, not a product photograph. Source, social export, and prompts are in `badminton-artwork/editorial.md`.

Captured from the live, public interfaces on September 8, 2026 for the Experimental Software homepage layout studies, with additional homepage images captured on September 16. These are static screenshots or published project artwork, not embedded interactive demos. Optimized as WebP without changing the interface content.

- `orb-ui.webp`: https://orb-ui.com/ — live voice demo, cloud theme, simulated signal.
- `wavelength.webp`: https://experimental.software/wavelength — approved social artwork featuring the game’s dial, reused September 18, 2026.
- `typechinese.webp`: https://typechinese.io/practice/hsk-1-vocabulary/simplified — practice screen, pinyin enabled, before a typing session.
- `badminton.webp`: https://badminton.fyi/ — searchable racket database, light theme.
- `badminton-detail.webp`: https://badminton.fyi/rackets/yonex/astrox-100zz — racket profile, light theme.
- `badminton-social.webp`: promotional artwork generated September 20, 2026 for the live badminton.fyi racket database. Three illustrative rackets accompany “Find your next racket” and “Compare specs. Find your fit.” This is artwork, not an application screenshot or a depiction of specific racket models. The 1280×720 landing-page export preserves the full composition with ivory padding. Source, 1200×630 social export, and generation prompt are in `badminton-artwork/`.
- `rxrecall.webp`: https://rx-recall.com/ — public homepage, including an actual Today app screenshot and the site's illustrated Lock Screen preview.
- `codex-updater-schedule.webp`: approved promotional artwork generated September 20, 2026, featuring the Codex Updater logo, “Updates on your schedule,” and a timeline highlighting the 2–3 a.m. update window. The 16:9 export preserves the full graphic with navy padding. The original, social-sharing export, landing-page export, and generation prompts live in https://github.com/exprmntl/codex-updater/tree/main/assets/promo. This is artwork, not an application screenshot.
- `typechinese-home.webp`: https://typechinese.io/ — landing page introducing Chinese typing practice, captured September 16. Used in the current Gallery; the practice-screen image remains for historical layout studies.
- `keyboard.webp`: https://keyboardlayout.app/ — layout choices, typing passage, and on-screen keyboard, captured September 16 before the domain migration; the link points to the current site.
- `keyboard-social.png`: original 1200×630 promotional artwork generated September 20, 2026 for keyboardlayout.app, featuring Q/D/C keycaps and “Try a different way to type.” Used in the current Gallery with its existing 16:9 cover sizing, without baked-in padding. Next.js optimizes the image for delivery. The generation prompt is in the keyboard-layout repository at `docs/social-image.md`. Replaces the padded `keyboard-social.webp` export.
- `keyboard-clean.webp`: the same capture with the rightmost 16 pixels (browser scrollbar) and bottom 9 pixels cropped, then resized to 1280×720. Retained for historical layout studies.
- `flights-currency.webp`: https://chromewebstore.google.com/detail/google-flights-currency-s/nameliafoadmpledepdbcgnogcnfiemo — original published extension artwork retrieved September 16, retained as a reference.
- `flights-currency-refresh.webp`: approved Flight Currency promotional illustration generated September 16, cropped to 16:9 for the Gallery. It shows GBP, EUR, and USD boarding passes, with a lighter “for Google Flights” subtitle and “Prices in your currency. Wherever you search.” copy. It is campaign artwork for the upcoming currency-picker release, not an application screenshot. Source, Chrome Web Store exports, and generation notes are in `../extension-artwork/google-flights-currency/`. The owner confirmed store submission and approved publishing this card while approval is pending; store release is handled separately.

Racket prices and product UI reflect the capture date. The homepage copy avoids treating captured prices as current offers. Follow the project links to use the live products.

## TypeChinese approved identity and social image

The TypeChinese card uses `typechinese-artwork/social/social.png`, the approved 1200 × 630 keycap image with the 中 speech bubble and General Sans Medium wordmark. Brand assets, font, license, and the shared #F6F4EE background palette are in `typechinese-artwork/brand/`. All three original social alternatives are preserved in `typechinese-artwork/variants/`. Gallery images use the social-image aspect ratio and contain the full image without cropping. Other project thumbnail selections are unchanged.

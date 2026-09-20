# TypeChinese selected social image

## Shared-background edit prompt

Use case: precise-object-edit.
Edit target: the approved TypeChinese social image supplied.
Change only the background to a clean uniform warm ivory #F6F4EE (RGB 246,244,238), matching the approved website and square icon background. The empty canvas areas, especially all corners and left area behind the headline, should be exactly this flat color. Remove the existing paper texture and uneven background tint. Retain natural soft contact shadows only immediately beneath and around the physical keycaps.
Also remove ONLY the small text-only TypeChinese wordmark at the upper-left so an exact approved vector logo can be placed there later. Leave that area blank with the same #F6F4EE background.
Preserve the rest: exact large "Type" / "Chinese" / "faster." headline and exact supporting text "Build speed. Learn as you go.", same type size, placement and colors; identical three keycaps with 中 and 文 Chinese glyphs and white return arrow, same composition, shapes, materials, sizes and placements. Keep the entire original 1730x909 landscape composition without cropping. No extra text, no logo recreation, no design changes.

`social.png` is the 1200 × 630 export using the approved chat-bubble logo and General Sans Medium wordmark. It is used by the local landing-page catalog. `index.html` previews the image and saved palette. Publication and the broader TypeChinese website redesign remain deferred.

The three original alternatives are preserved untouched in `../variants/`. `keycaps-branded-full.png` retains the original 1730 × 909 dimensions. The exact approved outlined SVG from `../brand/lockup.svg` is composited at x=106, y=86, width=340 in that original coordinate system.

`keycaps-ivory-background.png` is the current base, edited with the built-in image generation tool to match the shared #F6F4EE warm ivory and remove the old wordmark. The keycaps retain their material and contact shadows. The approved vector logo is then overlaid exactly. `keycaps-background.png` is the earlier cleanup-only source, retained as history. Rebuild with `node scripts/build-typechinese-brand-assets.mjs` from the repo root.

## Initial cleanup prompt (archived)

Use case: precise-object-edit
Input image: edit target, approved TypeChinese keycap social artwork.
Remove ONLY the small TypeChinese wordmark at the upper left (around x=105–385, y=100–150 in the 1730x909 reference). Fill that small area seamlessly with the surrounding ivory paper/tabletop background and subtle texture. Leave that area blank for later placement of an exact vector logo.
Preserve everything else exactly: the large three-line headline "Type" / "Chinese" / "faster.", supporting line "Build speed. Learn as you go.", all three physical keycaps and their 中, 文, and return arrow symbols, their positions, colors, texture, lighting and shadows, full composition and generous margins. No cropping, no new elements, no typography changes, no redesign. Maintain original landscape aspect ratio.

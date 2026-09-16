# Homepage direction

The Gallery is the selected foundation. The latest local homepage is at `/`, with the same content available at `/directions/gallery` inside the comparison navigation.

## Current presentation

- Headline: **From experimentation to production.**
- Company category: **software lab**.
- The desktop sidebar has a centered logo with navigation aligned to the mark’s visible left edge and generous space between them. It has no category label and stays fixed while scrolling. The Get in Touch section and footer span the full page width below the content. Mobile keeps the compact header.
- The shared introduction and About paragraph are in `src/lib/brand-copy.ts` and documented at `/brand#language`.
- All six projects use the same image-led card layout, in this order: TypeChinese, RxRecall, Orb UI, Keyboard Layout Tester, Google Flights Currency, badminton.fyi.
- RxRecall carries a small **New** label.
- badminton.fyi keeps its **Legacy / Database** label and the same visual prominence as every other project.
- **Projects** is the catalog and navigation term. Filters narrow the unified six-project grid.
- Internal revenue, founder biography, and temporary maintenance priorities are not part of the public company copy.

The visual system remains Outlier + White Room 1.1: General Sans Regular for headings and body, General Sans Medium for the wordmark, Meslo LG S for labels, −0.03em headline tracking, and −0.045em wordmark tracking.

## Routes

| Route                  | Purpose                                                                   |
| ---------------------- | ------------------------------------------------------------------------- |
| `/`                    | Current Gallery homepage, with normal homepage metadata and canonical URL |
| `/brand#language`      | Shared company language and terminology                                   |
| `/directions`          | Comparison hub                                                            |
| `/directions/gallery`  | Current Gallery inside the review navigation                              |
| `/directions/original` | First marketing design, preserved for comparison                          |
| `/directions/lab`      | Earlier editorial lab study                                               |
| `/directions/products` | Earlier product spotlight study                                           |
| `/code`                | Existing repository workspace                                             |

All `/directions` routes are `noindex, nofollow` and omitted from the sitemap. Their previous wording is retained as historical design context. The homepage has no review toolbar.

## Implementation and imagery

`src/components/marketing/GalleryHome.tsx` renders the page. `ProjectCatalog.tsx` provides the local filters, and `catalog.ts` holds the public project descriptions, order, destinations, media, and release marker.

All project links and descriptions render in the initial HTML. Each card links directly to the project website or extension listing; there is no intermediate page required to reach a project.

The images in `public/marketing/projects/` come from the live product websites and the published Chrome Web Store listing. TypeChinese uses its landing page. See that directory's README for source URLs and capture notes. RxRecall's public presentation includes an app screenshot and its site's illustrated Lock Screen preview. The company site does not invent product interfaces.

The review hub thumbnails are in `public/marketing/directions/`. Marketing images are excluded from the repository text mirror so binary data does not inflate the editor bundle; component source and copy remain visible in `/code`.

The redesign is prepared for a pull-request preview. Production release and GitHub organization branding remain separate work.

## Share and search packaging

The homepage title remains Experimental Software. The description is shared with the brand copy and used by search, Open Graph, and Twitter metadata. The 1200×630 share card uses the original White Room stacked-logo proportions and the agreed headline, with SOFTWARE LAB highlighted in acid as its current supporting label. The symbol box to lettering size ratio is 204.8:78 (approximately 2.63:1); the entire lockup scales together. The social card is approved for this PR: no divider, the original stacked-logo proportions, and the acid SOFTWARE LAB label. All browser and Apple touch icons use the Outlier mark; legacy public image paths are refreshed too. The asset generator exports the images, favicon formats, and checksum manifest together.

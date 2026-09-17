# White Room launch preparation

Prepared September 16, 2026. The website PR remains a draft and must not be merged until the launch decision. Public GitHub organization branding, LinkedIn profile changes, and repository transfers are staged, not published by this preparation. X signup is authorized using `hello@experimental.software`; the account has not yet been created and handle availability is unverified.

## Ready to apply

- [Profile copy and platform assignments](profiles.md).
- [GitHub organization README](github-profile.md), ready for `exprmntl/.github/profile/README.md` after release.
- Shared paper Outlier avatar: `public/brand/downloads/avatars/avatar-paper.png`.
- GitHub repository preview: `public/brand/downloads/social/github-repository.png`.
- Notion, LinkedIn, and X covers: `public/brand/downloads/covers/`.
- Expanded downloadable brand kit: `public/brand/downloads/experimental-software-brand-kit.zip`.
- Website repository homepage URL corrected to `https://experimental.software`.
- Current Notion company page updated with the paper avatar, centered cover, approved introduction, and guide/asset links; existing child pages and notes preserved. Artwork uses fixed commit URLs so it does not depend on the preview deployment or an unmerged production release.

All asset text is outlined using the selected fonts; no font binaries are included. The generator is `scripts/build-brand-assets.mjs`. Public profile copy contains no internal business plans, credentials, or revenue figures.

## Release dependencies

### Flight Currency

The public [Chrome Web Store listing](https://chromewebstore.google.com/detail/google-flights-currency-s/nameliafoadmpledepdbcgnogcnfiemo) was checked September 16, 2026. It still displays **Google Flights Currency Setter**, version **0.1.0**, updated **April 17, 2024**, and explicitly states: “Currently just sets to USD. Soon you will be able to select any available currency.”

The website card is the approved **Flight Currency** artwork showing GBP/EUR/USD and “Prices in your currency, wherever you search.” On September 16, the owner confirmed that the extension update has been submitted to the Chrome Web Store and is awaiting approval, and explicitly accepted publishing this card ahead of store approval. Store submission/release remains owned by the separate extension task.

Chrome Web Store approval is not a blocker for the homepage launch. Retain the approved artwork and copy. Submission is not represented as public availability.

The prepared privacy route is `https://experimental.software/flight-currency/privacy`. The previously proposed `flightcurrency.experimental.software/privacy` address is not configured by this change. Use one verified reachable URL consistently in the extension listing.

### Typography provenance

The existing Meslo caveat was rechecked against the original v1.2.1 archive. Its archive checksum still matches the font-preparation script. Upstream master revision is `09a431d546d211130352c28eb0466e5d7d5aeaf0` (January 6, 2013).

The release and README explicitly publish Meslo under Apache 2.0, permitting commercial use without purchase fees. An older tentative public-domain statement in the About PDF prompted the previous caveat, but no evidence of a fee or prohibition on this website's use was found. The font retains upstream notices; its name table has no separate license field. Preserve those notices and the Apache license. The provenance limitation is documented in [font delivery](../brand-fonts.md); it is not a pending font purchase or a new launch approval. General Sans and Meslo remain approved and unchanged.

Sources: [upstream README](https://github.com/andreberg/Meslo-Font/blob/09a431d546d211130352c28eb0466e5d7d5aeaf0/README.textile), [v1.2.1 archive](https://github.com/andreberg/Meslo-Font/blob/09a431d546d211130352c28eb0466e5d7d5aeaf0/dist/v1.2.1/Meslo%20LG%20v1.2.1.zip). No font purchase or new permission grant was obtained.

## Launch order

1. Retain the approved Flight Currency card and General Sans/Meslo typography. Social profile rollout is handled by separate threads.
2. Check the final PR revision against current `main`, required checks, production configuration, and rollback target. Update the PR description to match the final scope, then mark ready and merge only when authorized.
3. Verify production `/`, `/brand`, `/code`, preserved content routes, privacy URL if shipped, project destinations, mobile layout, metadata, icons, and asset downloads. Recheck the RxRecall backlink in initial HTML. Inspect robots, canonical URLs, and sitemap; submit the sitemap to the existing search-console property if available.
4. Apply the staged GitHub organization avatar, bio, and README. Set the landing-page repository description/social image. Use production asset URLs only after they resolve. Verify Notion and LinkedIn links and finish X account setup.
5. Transfer Orb UI and Keyboard Layout Tester separately. Verify remotes, Actions, deploy integrations, package publishing, documentation URLs, and redirects. Pin the intended public repositories; do not expose private product repositories.
6. Confirm actual production analytics and project-click measurement, especially RxRecall. The site has conditional PostHog initialization, but source presence alone does not prove production events arrive.
7. Announce the refreshed project catalog only after the destination site and profiles are consistent. No announcement is prepared for automatic publication.

## Validation in this prep

- Generator lint and whitespace checks.
- Generated asset dimensions, checksum manifest, ZIP contents, and absence of font binaries.
- Visual inspection of the new platform exports at native aspect ratios.
- Final Vercel preview build checked after pushing.

Production launch checks above remain future actions; they are not represented as already completed.

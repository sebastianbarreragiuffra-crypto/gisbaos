# GISBA OS Hero — Design QA

- Source visual truth: `C:/Users/SEBAS/Desktop/gisbaos/outputs/design-qa-final-hero/reference-1672x941.png`
- Implementation screenshot: `C:/Users/SEBAS/Desktop/gisbaos/outputs/design-qa-final-hero/implementation-1265-v2.png`
- Combined comparison: `C:/Users/SEBAS/Desktop/gisbaos/outputs/design-qa-final-hero/comparison-v2-side-by-side.png`
- Source pixels: 1672 × 941.
- Implementation pixels and CSS viewport: 1265 × 712 at device density 1.
- Normalization: the source was downsampled with Lanczos and center-fitted to 1265 × 712 before comparison.
- State: homepage hero, top of page, desktop navigation closed.

## Full-view comparison evidence

The implementation preserves the source composition: centered navigation, 34/66 hero grid, three-line headline, paired CTAs, three compact benefits, large dashboard image, pale violet orb, and the connected-operation strip. The final dashboard source is 997 × 662 and preserves the exact content and proportions supplied by the user.

## Focused comparison evidence

- Header: `outputs/design-qa-final-hero/focus-header.png`
- Hero copy: `outputs/design-qa-final-hero/focus-hero-copy.png`
- Dashboard: `outputs/design-qa-final-hero/focus-dashboard.png`

Typography, spacing, palette, copy, image crop, control order, and dashboard proportions match the selected reference closely. The supplied GISBA raster logo is preserved as the production brand asset.

## Comparison history

### Iteration 1

- P2: At the intermediate desktop breakpoint, the two hero buttons wrapped vertically.
- P2: The hero and dashboard started roughly 40 px below the normalized reference.
- P2: The decorative orb was oversized at the intermediate breakpoint.
- Fixes: added a dedicated 1181–1500 px layout, restored compact CTA sizing, moved the hero upward, reduced the orb, and tightened the benefit and audience-strip spacing.

### Iteration 2

- Post-fix evidence: `comparison-v2-side-by-side.png`.
- No actionable P0, P1, or P2 mismatch remains.
- P3: Small raster differences remain inside the supplied logo and dashboard asset when compared with the compressed reference screenshot.

### Iteration 3

- Replaced the earlier wide dashboard with the exact 997 × 662 final asset supplied by the user.
- Removed the synthetic client-logo overlays because the final image already contains the correct M, X, and V marks.
- The image keeps its original aspect ratio and is never stretched independently on either axis.

## Responsive behavior

- 1440-class widths use a 1344 px maximum container with responsive side gutters.
- Widths above 1500 px use a centered 1480 px maximum container, preventing image upscaling and excessive line lengths at 1920 px.
- Existing tablet and mobile breakpoints remain active below 1180 px and 780 px.

## Interaction checks

- Product navigation targets the CampaignOS block on the landing page.
- Primary demo CTAs target the contact section.
- The dashboard retains descriptive alternative text.
- No visible browser error or broken layout appeared during local verification.

## Final result

final result: passed

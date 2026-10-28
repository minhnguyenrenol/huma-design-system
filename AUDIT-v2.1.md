# Huma design system: v2.1 audit and changes

28 Oct 2026. Audited from the 26 Oct V02 build. All findings were checked with scripts and by comparing before and after screenshots.

## What I checked

- Every token in `tokens/`, and every `var(--…)` used by the components, UI kit, guideline cards and the 43 product pages
- Hard-coded colours, compared against the token values
- Text contrast for each text token on each surface (WCAG 2.2 AA, 4.5:1)
- Whether each component has types, usage notes and a rendered card
- Whether every card and page renders when served on its own

## What I found

| # | Finding | Size |
|---|---|---|
| 1 | The product pages never loaded the system. 41 of 43 pages kept their own copy of the tokens in `:root` | 1,533 copied declarations |
| 2 | 12 tokens had different values on different pages. For example, `--font-stat-size` was 1.5rem on one page and 2.5rem in the system | 12 tokens |
| 3 | `--gradient-*` means a gradient in the brand guide and a solid fill in the product. Pages override it to solid | 39 pages |
| 4 | Hard-coded hex values that already exist as tokens | 1,959 uses |
| 5 | `--border-default` was used on Add money but never defined, so the border never drew | 1 |
| 6 | `--fin-up-ring` was used on Payment methods but never defined on that page, so the Default badge lost its border | 1 |
| 7 | Network colours (Ethereum, Base, MetaMask) were mixed in with brand colours | 6 |
| 8 | NotificationBell had no usage notes | 1 |
| 9 | 36 tokens are never used, including the whole `--space-*` scale. Pages use raw rem and px | 36 |

## What changed in v2.1

- **Pages link the system.** Each page now loads `../styles.css`. Its `:root` keeps only values the system doesn't have, or values that really are different. The 217 page overrides that remain are listed in `_v21/page-overrides.json`.
- **Colours point at tokens.** 564 hex values in pages and the UI kit became `var(--token)` with the same value. Screenshots of all 70 pages and cards match the v2.0 build except Payment methods (see 6).
- **Money-down and error text.** `--fin-down` and `--error` changed from `#ab5770` to `#a5536b`. That keeps 4.5:1 on every Huma surface. `--brand-red` stays `#ab5770` for brand fills.
- **Missing tokens added.** `--border-default` is now an alias of `--border-subtle`.
- **Third-party colours have their own file,** `tokens/third-party.css` (`--brand-ext-*`). WalletPill uses it.
- **NotificationBell has usage notes.**

## Still open (v3)

- Rename the product's solid `--gradient-*` overrides to fill tokens (`--fill-hero`, `--fill-sky`), so a name means one thing.
- Move pages onto the `--space-*` scale, or delete the scale. A scale nobody uses isn't really part of the system.
- 891 hex uses still sit in pages, mostly SVG attributes and one-off tints. Those can't take `var()` without rework.
- The contrast script flags text tokens on `--surface-inverse`. They're never used together, but the tokens don't stop it. On dark surfaces use `--text-on-dark`.

# MusTech Group (`mustechgroup.com`) Design System

## Audience & Purpose
Public corporate holding-company site for **MUSTECH GROUP PTE. LTD.** (Singapore). Visitors include institutional partners, investors, community leaders, regulators, and founders discovering the portfolio (Saalihat, jenazah.sg, TaraBase, and MusTech Jumpstart).

## Look & Feel
Calm, authoritative, and editorial. Warm paper-cream surfaces grounded by deep forest moss and MusTech teal, with deliberate restraint over SaaS decoration. No generic glass cards, neon glows, or pure `#000000` / `#ffffff` contrast extremes.

## Colours (Constellation Standard)
- **Page Ground**: Cream `#fdfaf0` (`--brand-bg`)
- **Primary Ink / Dark Surface**: Moss `#233219` (`--brand-moss`), Deep Moss `#192412` (dark sections)
- **Brand Accent**: MusTech Teal `#077d95` (`--brand-teal`, C85 M31 Y29 K12)
- **Warm Highlight**: Custard `#f8df98` (`--brand-custard`)
- **Portfolio Accents**: Sage `#92ae94` (jenazah.sg), Clay `#814038` (TaraBase / Jumpstart highlight)

## Typography
- **Display & Headings**: `Lao MN` (`--font-brand`)
- **Body & UI**: `Plus Jakarta Sans` (`--font-sans`)
- **Editorial Copy**: British English, serial comma in lists of three or more, zero em-dashes.

## Navigation & Header
All pages except `/jumpstart` (which uses `JumpstartNav` with `mix-blend-difference`) share `Navbar`.
- **Style ("RPG Select")**: Recessed warm-cream tray (`#f4ecd8` on light, `#121b0d` on dark) with a gliding selection frame and 4px top pointer caret that moves across slots on hover/focus. Each route carries a Constellation diamond pip (Teal for Portfolio, Clay for Jumpstart, Moss/Sage for Governance, Gold/Custard for Philosophy, and Sage for Privacy).
- **Primary Action**: `Explore Saalihat` (`/portfolio#saalihat`) rendered as a machined-key button with a 2px Teal bottom lip (`#077d95` on light, Custard tint on dark) that depresses on press.
- **Mobile**: Rounded tray trigger (`44x44px` minimum) opening a matching Constellation-pipped drawer with active-slot framing and Escape-to-close.
- **Behaviour**: Transparent over the hero, docks the MusTech emblem on scroll, and adapts smoothly when scrolling over dark moss sections (`#saalihat`, `#philosophy`).

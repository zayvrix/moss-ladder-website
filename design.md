# Design: Moss Ladder

Shared system for every route. Derived from the existing name, symbol, moss color, and measured-progression philosophy.

## System
- Genre: editorial
- First page: stepped typographic opening, product study, studio scope, principles, selected index, contact, footer
- Theme: custom. Vibe: deliberate independent practical quietly unconventional
- Idea: useful software advances a complicated decision one considered step at a time
- Axes: light/grotesk-heavy/warm. Posture: full palette
- Mint is the canvas; original deep moss is ink and product-study field; lavender distinguishes studio principles; burnt orange marks primary actions
- Signature: the original tagline set on three progressively indented lines

## Tokens
`src/styles/tokens.css` is the source of truth, including the existing semantic aliases.
- Display/body: self-hosted Rethink Sans, 400, 500, 700 only
- Paper: oklch(96% 0.014 155)
- Ink and field: original #243428
- Accent: oklch(49% 0.16 39)
- Lavender: oklch(88% 0.054 295)
- Container: 1440px centered; 64px gutters desktop, 24px tablet, 20px phone
- Column gap: 40px desktop, 24px phone; image tracks always minmax(0, 1fr)
- Radii: 4px controls/images; no rounded section boxes

## Shared classes
- `.container`: single capped page container
- `.page-head`: interior header with breadcrumb, large heading, introduction
- `.section`: regular section spacing; `.section-heading`: heading plus action
- `.btn`, `.btn--quiet`, `.text-link`: primary, secondary, text action
- `.prose`: long-form copy, 65ch measure; `.document-layout`: offset reading column
- `.product-list`: stacked ProductCard rows; `.status-badge`: text status
- `.detail-grid`: main content and metadata; `.feature-list`: open feature rows
- `.form-grid`, `.field`, `.form-note`: contact form layout and helpers
- Tokens only for colors and fonts; no tracked labels or eyebrows

## Controls and motion
- Primary: burnt orange, light ink, 48px height, 4px corners
- Secondary: transparent, moss outline, same height; text links underline on hover
- Instant focus outline, explicit active and disabled states
- Still page; restrained control feedback only. Reduced motion disables transitions
- Mobile menu accessible without JavaScript; preserve its IDs and Escape handler
- Preserve catalog selectors/data attributes, mailto workflow, product URL preselection, SEO, all routes, legal text
- RothProRata is strictly read-only; only Moss Ladder files may be changed

## Exports
`src/styles/tokens.css`, `src/styles/base.css`, and `src/styles/global.css`.

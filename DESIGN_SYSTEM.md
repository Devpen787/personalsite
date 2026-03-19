# Editorial Operator UI System

## Purpose
This site should present Devinson Peña as a credible Web3 operator with a clear point of view. It is not a startup landing page, not a consultant brochure, and not a crypto-engineer template.

The design system exists to make that positioning obvious through structure, hierarchy, spacing, and restraint.

## Core Principles

### 1. One idea per module
Every section should answer one question clearly:
- Who is this person?
- What is he focused on?
- How does he think?
- What proof does he have?
- Why should someone contact him?

If a section tries to do more than one of those jobs, it should be split.

### 2. Containment over sprawl
Important content lives inside defined surfaces:
- hero panel
- focus cards
- rule cards
- proof cards
- contact panel

Open canvas is used sparingly. Long stretches of loose text are avoided.

### 3. Short blocks beat long paragraphs
Most copy should fit into:
- one strong heading
- one short paragraph
- one support paragraph or bullet group

Text should be chunked into readable units with clear hierarchy.

### 4. Editorial, not ornamental
The visual language should feel authored and serious:
- strong typography
- warm neutrals
- restrained accent color
- soft shadows
- rounded panels only where they help grouping

Avoid:
- neon crypto aesthetics
- glassmorphism
- fake “protocol engineer” styling
- decorative complexity without information value

### 5. Repetition creates trust
Spacing, radii, card padding, link styles, and section patterns must repeat consistently. Consistency matters more than novelty.

## Layout Rules

### Grid
- Max content width: `1180px`
- Standard page padding:
  - mobile: `20px`
  - tablet: `32px`
  - desktop: `48px`
- Standard section spacing:
  - mobile: `64px`
  - desktop: `88px`

### Section rhythm
Homepage sections should follow a predictable cadence:
1. Hero panel
2. Focus cards
3. Thinking / rules section
4. Selected work
5. Background snapshot
6. Contact CTA

Secondary pages follow:
1. Page hero
2. Main modules
3. Supporting modules

### Content width
- Large editorial statements should not exceed `12-14` words per visual line at desktop.
- Body copy should sit in a narrower measure than headlines.
- Avoid full-width prose blocks unless they are short.

## Typography Rules

### Fonts
- Display: `Cormorant Garamond`
- Body/UI: `Inter`

### Type roles
- `Display XL`: hero headline only
- `Display L`: page headline, CTA headline
- `Display M`: card titles, proof titles
- `Eyebrow / Label`: small uppercase metadata
- `Body L`: intro paragraphs
- `Body M`: card copy
- `Body S`: metadata and link clusters

### Tone
- Headings should feel confident and clean.
- Body text should be plain, direct, and human.
- Avoid dense jargon and long abstract phrases.

## Color Tokens

### Light mode
- `surface`: `#f6efe6`
- `surface-muted`: `#eee2d2`
- `surface-raised`: `#fcf7ef`
- `ink`: `#201c17`
- `muted`: `#62584e`
- `line`: `rgba(32, 28, 23, 0.12)`
- `line-strong`: `rgba(32, 28, 23, 0.2)`
- `accent`: `#667151`
- `accent-strong`: `#3b4331`
- `cta`: `#b56a3e`

### Dark mode
- `surface`: `#131311`
- `surface-muted`: `#1b1a17`
- `surface-raised`: `#22201d`
- `ink`: `#f3ece1`
- `muted`: `#c9beb1`
- `line`: `rgba(243, 236, 225, 0.12)`
- `line-strong`: `rgba(243, 236, 225, 0.2)`
- `accent`: `#a7b18f`
- `accent-strong`: `#dde3cb`
- `cta`: `#d18a56`

### Color usage
- Accent is used for:
  - labels
  - active nav
  - support highlights
- CTA color is reserved for:
  - primary button
  - the most important action in a module

## Spacing Tokens
- `space-1`: `8px`
- `space-2`: `12px`
- `space-3`: `16px`
- `space-4`: `24px`
- `space-5`: `32px`
- `space-6`: `48px`
- `space-7`: `64px`
- `space-8`: `88px`

Use these consistently for:
- card padding
- inter-section gaps
- component clusters

## Radius and Shadow Tokens

### Radii
- small cards: `20px`
- major panels: `28px`
- buttons: `999px`

### Shadows
- light mode raised panel:
  - `0 18px 50px rgba(24, 19, 14, 0.07)`
- dark mode raised panel:
  - `0 18px 50px rgba(0, 0, 0, 0.24)`

Shadows should imply elevation, not drama.

## Component Rules

### Hero panel
- Must contain:
  - name
  - one concise positioning line
  - short supporting copy
  - 2-3 chips or metadata items
  - portrait
  - CTA cluster
- The hero should feel like one designed module, not two unrelated columns.

### Cards
- Use cards when grouping improves scanability.
- Cards should contain:
  - eyebrow
  - title
  - short copy
  - optional action

Cards should not become essay containers.

### Buttons and links
- One primary CTA per section max.
- Secondary actions should be plain text links or underlined links.
- Link styling must be consistent across cards, nav, and footer.

### Proof modules
- Real proof only.
- No fake case studies.
- Each proof card should include:
  - type
  - title
  - what it is
  - why it matters
  - action

### Contact modules
- Contact should feel direct and usable.
- Prefer cards and grouped links over long explanatory text.

## Content Rules
- Keep body copy short.
- Prefer specific, plain language.
- Avoid repeating the same claim in multiple sections.
- Use formatting to reduce the amount of prose needed.

## Do Not
- Do not use vague editorial spacing without module boundaries.
- Do not mix three different container styles on one screen.
- Do not let every section feel like a large serif headline plus loose paragraph.
- Do not overuse decorative lines or shadows.
- Do not imitate crypto-builder aesthetics that are not true to the profile.

## Build Standard
Before shipping:
- homepage must be scannable in under 60 seconds
- every section must have a clear job
- cards must align and repeat consistently
- light and dark mode must preserve the same hierarchy
- supporting pages must feel like part of the same system

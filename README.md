# personalsite

Public source for [devinsonpena.vercel.app](https://devinsonpena.vercel.app).

This repo is intentionally small. It exists to hold the code behind a personal site about product judgment, Web3 work, practical AI systems, and the line behind them.

## What is here

- a minimal Next.js site with `Home`, `About`, `Work`, `Log`, and `Margin`
- a restrained content system driven mostly by plain TypeScript and static assets
- PostHog tracking for pageviews and key proof / CTA clicks
- public documents and images used directly on the site

## What this repo is not

- a design-system showcase
- a portfolio template
- a place for internal notes, experiments, or build artifacts

## Structure

```text
src/
  app/
    page.tsx        # Home
    about/page.tsx  # About
    work/page.tsx   # Selected work
    log/page.tsx    # Timeline / reading / events / shipped work
    margin/page.tsx # Hidden margin page
  components/
    Nav.tsx
    Footer.tsx
    LogEntries.tsx
    TrackedLink.tsx
    PosthogProvider.tsx
  data/
    log.ts

public/
  docs/
  images/
```

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Environment

For PostHog in local or production:

- `NEXT_PUBLIC_POSTHOG_KEY`
- `NEXT_PUBLIC_POSTHOG_HOST`

See [.env.example](./.env.example).

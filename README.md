# Veronika Bakoz Charity Foundation — Website

The official website for the Veronika Bakoz Charity Foundation, an NGO based in
Lokoja, Kogi State, Nigeria, supporting widows and less-privileged women and
children through vocational training, small business grants, humanitarian
outreach and child development programmes.

## Tech stack

- [TanStack Start](https://tanstack.com/start) (React 19) with file-based routing
- Vite + Tailwind CSS v4
- shadcn/ui (Radix primitives) component library
- TypeScript, strict mode

## Getting started

```bash
bun install
bun dev
```

The dev server runs on http://localhost:3000.

Other scripts:

```bash
bun run build     # production build
bun run preview   # preview the production build locally
bun run lint      # eslint
bun run format    # prettier --write
```

(`npm`/`pnpm` work the same way if you don't use Bun — just swap the runner.)

## Project structure

```
src/
  routes/        File-based routes. index.tsx = "/", about.tsx = "/about", etc.
                 routeTree.gen.ts is auto-generated — don't edit it by hand.
  components/
    site/        Page-building blocks (Navbar, Footer, HeroCarousel, Reveal, Counter, forms).
    ui/          shadcn/ui primitives (button, card, input, etc.).
  data/site.ts   All site content: org info, programmes, outreaches, stories,
                 team, donation tiers, campaigns, reports. Edit this file to
                 update copy without touching page markup.
  assets/        Images referenced from data/site.ts.
  styles.css     Design tokens (colors, fonts, radii) and global styles.
```

## Content that still needs real data

A few sections currently ship with clearly-marked placeholder content —
see the `NOTE:` comments in `src/data/site.ts`. Before launch, replace:

- **Team** — only the founder is a confirmed name; add the rest of the team.
- **Stories** — sample beneficiary stories; swap in real, consented stories.
- **Stats, campaigns, financial reports** — sample figures; replace with
  verified numbers and upload real report PDFs.
- **Donate page payment integration** — the donation flow UI is complete;
  wire it to a live Paystack/Flutterwave account before accepting real
  payments.
- **Social links** — placeholder URLs in `data/site.ts`.

## Deployment

This project builds with Vite + [Nitro](https://nitro.build), so it can
target most hosting providers Nitro supports (Node.js, Cloudflare, Netlify,
Vercel, etc.). See the TanStack Start [hosting docs](https://tanstack.com/start/latest/docs/framework/react/guide/hosting)
for provider-specific setup.

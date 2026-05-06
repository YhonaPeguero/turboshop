# Repository Notes

- App is a Next.js App Router landing page using Tailwind: `app/layout.tsx`, `app/page.tsx`, and `app/globals.css` are the main entrypoints.
- Use `npm run dev` for local development, `npm run typecheck` for focused TS verification, and `npm run build` before handing off production changes.
- There is no test runner, linter script, formatter, CI config, or backend in this repo yet.
- `app/page.tsx` is intentionally a client component because it owns navbar scroll state, mobile menu state, canvas particles, scroll reveals, animated counters, and hero carousel controls.
- Preserve the current visual language: dark purple/green theme, `Outfit` headings, `Inter` body text, gradient buttons/text, glowing cards, rounded panels, and “Modo Nitro” speed/particle feel.
- Preserve interactive behavior: hero speed lines, canvas particles, `[data-a]` / `[data-a-stagger]` reveal classes, counter animation, carousel dots, hover pause, and keyboard arrows.
- The hero carousel is intentionally hidden at `max-width: 768px`; do not change that unless asked.
- Static assets live in `public/` and are referenced with root paths: `/logo-with-text.svg`, `/ts-landing.webp`, `/ts-landing-2.webp`, and `/guaranteed-delivery-in.webp`.
- External links and contact details are page content: `turboshop.cl`, `about-us`, `login`, LinkedIn, `ventas@turboshop.cl`, and `+56 9 8350 9065`.
- Keep Spanish copy and Chile-focused messaging unless the user explicitly asks for copy changes.

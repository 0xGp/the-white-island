# The White Island ($ELYSIUM) — Direction C (Clean Meme UI)

Next.js App Router + TS + Tailwind v4 + GSAP/ScrollTrigger (useGSAP).

- Nav: lighthouse logo + ELYSIUM, HOME / ABOUT / FAQ, JOIN THE ISLAND pill (no roadmap).
- Hero: $ELYSIUM badge, THE WHITE ISLAND, ornament, JOIN ON X + CONTRACT — SOON (disabled until `contractAddress` is set).
- Scroll story (pinned strip), About (Islands of the Blessed), $ELYSIUM stamp, honest FAQ, footer + disclaimer, sticky mobile bar.
- Art: `public/ink/` (island.webp, waves.webp alpha; paper.webp tile).
- Motion only via gsap.from inside matchMedia(no-preference) — static page is the reduced-motion / no-JS fallback.

## Configure
Edit `lib/site-config.ts`: `contractAddress`, `xUrl`, `telegramUrl`, `tradingUrl` (all null now = placeholders). Copy in `lib/copy.ts`.
No supply, market cap, partners or roadmap are stated anywhere — do not add unverified numbers.

## Run
npm install && npm run build && npx next start -p 3000

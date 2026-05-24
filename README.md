# REDOPS Security — Website

Production-grade Astro + Tailwind site for REDOPS Security consultancy.

## Stack

- **Astro 4** — Static site generator, fast & SEO-friendly
- **Tailwind CSS** — Utility-first styling
- **JetBrains Mono / Space Mono / Inter Tight** — Custom typography (loaded via Google Fonts)
- **No tracking, no analytics by default** — Privacy-first

## Project structure

```
RedGhostOps/
├── public/
│   ├── logo.png              # Your ghost logo
│   └── asier-barranco-cv.pdf # Your CV (downloadable)
├── src/
│   ├── layouts/
│   │   └── Layout.astro      # Base layout with nav + footer
│   ├── pages/
│   │   ├── index.astro       # Homepage
│   │   ├── services.astro    # Services + pricing
│   │   ├── about.astro       # Operator profile
│   │   └── contact.astro     # Contact form
│   └── styles/
│       └── global.css        # Design tokens + animations
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Setup (local development)

Requires Node.js 18+ (recommend 20 LTS).

```bash
# 1. Install dependencies
npm install

# 2. Run dev server (http://localhost:4321)
npm run dev

# 3. Build for production
npm run build

# Output goes to ./dist/
```

## Before publishing — TO DO

### 1. Configure contact form

Open `src/pages/contact.astro` and replace `YOUR_FORMSPREE_ID` with a real form handler:

**Option A: Formspree (easiest, free tier 50 submissions/mo)**
- Sign up at https://formspree.io
- Create a form, get the endpoint URL
- Replace in `action="https://formspree.io/f/YOUR_FORMSPREE_ID"`

**Option B: Web3Forms (free, no signup needed for testing)**
- https://web3forms.com
- Get API key, replace form action

**Option C: Custom backend**
- Replace form submission logic in the `<script>` block

### 2. Update email address

Currently uses `engagements@redghostops.com` — make sure this email exists.
Set up via Google Workspace ($7/mo), Zoho Mail (free tier), or whatever provider.

References to update if you change it:
- `src/layouts/Layout.astro` (footer)
- `src/pages/contact.astro` (contact methods)

### 3. Blog subdomain

The nav links to `blog.redghostops.com`. To set this up:

1. In your Hashnode dashboard, change custom domain from `redghostops.com` 
   to `blog.redghostops.com`
2. Add CNAME record in your DNS: `blog.redghostops.com` → `hashnode.network`
3. Hashnode will auto-issue SSL cert

If you keep blog on root domain temporarily, change link to:
`https://redghostops.com` (your current blog) — but plan to move it.

### 4. Custom domain DNS

When ready to deploy:
- Point `redghostops.com` A record to your hosting (Cloudflare Pages, Vercel, Netlify)
- Or use Cloudflare for DNS + Cloudflare Pages for hosting (free)

## Deployment

### Recommended: Cloudflare Pages (free, fast, no vendor lock-in)

```bash
# Build
npm run build

# Then either:
# A) Connect GitHub repo to Cloudflare Pages dashboard (auto-deploy on push)
# B) Use Wrangler CLI to deploy ./dist manually
```

### Alternative: Vercel / Netlify

Both auto-detect Astro and deploy `dist/` folder. Free tiers more than enough.

## Customization

### Colors

Edit `tailwind.config.mjs` and `src/styles/global.css`:
- `--blood` — Primary accent (red)
- `--void` — Background (black)
- `--bone` — Primary text (off-white)
- `--ghost` — Secondary text

### Fonts

Loaded from Google Fonts in `src/styles/global.css`. To change:
1. Update the `@import` URL
2. Update `font-family` declarations in `tailwind.config.mjs`

### Content

All copy is directly in `.astro` files — edit as needed. The Spanish translation 
of services/about would be a sibling `index.es.astro`, `services.es.astro` etc., 
but the current single-page setup is English-only for premium B2B positioning.

## Pricing & content notes

- Pricing on services page is *indicative* — designed to qualify leads but 
  allow negotiation. Adjust as needed for your market positioning.
- "OPERATIONAL" status indicator in top bar is decorative.
- All CVE numbers reference real published CVEs from Asier's research.

## Security considerations

- Contact form submissions: ensure your form handler doesn't expose data
- No analytics tracking by default (add Plausible if needed — GDPR-friendly)
- No cookies set by the site
- All external links open in same tab; add `target="_blank"` if you want new tab

## Support

This is your own site, you own all the code. No subscriptions, no lock-in.

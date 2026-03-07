# Milk Landing Page — Waitlist & Beta Access

## What This Is

Marketing landing page for Milk, a South African grocery price comparison app. Goals: capture waitlist signups, grant beta testing access (Google Play closed track), collect feedback, and showcase features.

**Target audience:** South African grocery shoppers on mobile (mostly Android, often on 3G/capped data).

## Tech Stack

- **Framework:** Next.js 14+ (App Router) with Tailwind CSS
- **Hosting:** Vercel (free tier)
- **Database:** Supabase for waitlist signups
- **Analytics:** PostHog or Vercel Analytics (free tier)
- **Images:** Nano Banana 2 (via OpenRouter or Google AI Studio) for hero graphics and product shots

## Brand

- **App name:** Milk
- **Tagline:** "Compare. Save. Shop smarter."
- **Primary:** Emerald green `#10B981`
- **Secondary:** Amber `#F59E0B`
- **Background:** White `#FFFFFF`, dark sections use `#111827`
- **Retailers:** PnP `#E31837`, Woolworths `#006341`, Shoprite `#FF6600`, Checkers `#005EB8`
- **Tone:** Friendly, proudly South African, money-saving. Natural SA English — not forced

## Design Direction

**Scroll-driven phone mockup with CSS animations.** As the user scrolls, a phone stays sticky-positioned in the center while the screen content transitions between app screenshots (deals feed → price comparison → recipe generation → shopping list). Pure CSS `position: sticky` + scroll-triggered opacity/transform. No video frame extraction.

**Hero section** uses Nano Banana 2-generated images — a polished phone mockup with groceries floating around it, or a lifestyle shot. These are the only AI-generated images; everything else is app screenshots and CSS.

**Key visual effects (all CSS, no heavy JS):**

- Phone floats in on initial load (translateY + opacity entrance)
- Sticky phone with screen transitions on scroll
- Subtle parallax on background elements (grocery icons, retailer logos drifting)
- Smooth section reveals with `IntersectionObserver`

**Performance budget:** < 2MB total page weight, < 2s load on 3G.

## Page Sections

1. **Hero** — Nano Banana hero image, app name, tagline, "Join the waitlist" CTA, phone mockup
2. **Problem** — "Tired of overpaying?" SA-specific pain points
3. **Sticky phone showcase** — Scroll-driven screen transitions showing 4 features:
   - Live deals feed across all stores
   - Price comparison (same product, 4 retailers)
   - AI recipe generation with ingredient matching
   - Smart shopping lists with real-time collaboration
4. **How it works** — 3 steps: Find your store → Browse deals → Save money
5. **Retailers** — PnP, Woolworths, Checkers, Shoprite with brand colours
6. **Waitlist form** — Email (required), name, store preferences, beta tester checkbox, referral source
7. **Footer** — Privacy policy, social links

## Waitlist Schema (Supabase)

```sql
create table waitlist (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  email text not null unique,
  name text,
  stores text[],
  wants_beta boolean default false,
  referral_source text
);
```

## App Screenshots Needed

Take these from the real app on your device:

- `home-deals.png` — Home screen with hot deals carousel
- `price-compare.png` — Product detail with cross-retailer comparison
- `recipe.png` — AI recipe with matched ingredients
- `shopping-list.png` — Shopping list with checked items

Save to `public/screenshots/` at 1080x1920 or similar phone resolution.

## Skills

**ALWAYS read before writing any HTML/CSS:**

- `.claude/skills/frontend-design/SKILL.md` — Typography, colour, motion, layout. Read this FIRST for every visual component. The goal is distinctive, premium design — not generic AI output.

**Read for specific tasks:**

- `.claude/skills/sa-landing-page/SKILL.md` — SA-specific performance constraints, mobile-first patterns, conversion copy, SEO
- `.claude/skills/scroll-phone-mockup/SKILL.md` — The CSS sticky phone scroll animation (HTML structure, CSS, IntersectionObserver JS)
- `.claude/skills/nano-banana-hero/SKILL.md` — Hero image generation prompts and setup for Nano Banana 2

## Conventions

- Mobile-first responsive — design for 360px viewport first
- Semantic HTML, proper heading hierarchy for SEO
- All images in WebP, lazy-loaded below the fold
- Open Graph meta tags for WhatsApp/social sharing
- Privacy policy links to GitHub-hosted `PRIVACY_POLICY.md`
- Commit with conventional commits: `feat:`, `fix:`, `style:`

## Don't

- Don't use heavy JS frameworks or 3D libraries (no Three.js, no video frame extraction)
- Don't exceed 2MB total page weight
- Don't use stock photos — use Nano Banana hero images + real app screenshots
- Don't promise features without marking unreleased ones as "coming soon"
- Don't collect unnecessary personal data

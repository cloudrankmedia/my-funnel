# SiteFlow Network — Emergency Landing Page Rules for Claude Code

## Git & Deployment

- Always work on and commit directly to `main`
- Never create feature branches
- Every commit must be pushed to `origin/main`
- Correct commit command: `git add . && git commit -m "description" && git push origin main`
- Vercel auto-deploys on every push to `main` — no manual deploy step needed

## Project Structure

- Live URL: https://go.siteflownetwork.com/water-damage/houston/emergency
- Repo: cloudrankmedia/my-funnel
- Landing page files:
  - `app/water-damage/houston/emergency/page.tsx` — all page copy, JSX, and inline CSS
  - `app/water-damage/houston/emergency/layout.tsx` — metadata, canonical URL, favicon, GHL number pool scripts
- Stack: Next.js App Router, deployed on Vercel via GitHub auto-deploy
- Hero image: `/public/hero-emergency.png`
- Logo (nav + footer): `/public/logo-emergency-long.png`
- Favicon: `/public/logo-emergency.png`

## Tracking

- GTM container: GTM-54RJ95RD — loaded in root `app/layout.tsx` only
- Do NOT add gtag scripts directly to page.tsx or emergency layout.tsx
- Google Ads conversion tag: AW-17034161603/YnqkCJKRiKIcEMPbwro_ — configured inside GTM, not in page code
- Phone number: (281) 603-1476 — defined as `phoneNumber` and `phoneHref` constants at the top of page.tsx
- phoneHref must always be formatted as `tel:+12816031476` (with +1 prefix)
- GHL number pool scripts live in emergency layout.tsx — do not move or duplicate them:
  - https://backend.leadconnectorhq.com/appengine/loc/8yVaGIElOnPyCAjDk5Mr/pool/SOstcMyNurcSu575YyKH/number_pool.js
  - https://backend.leadconnectorhq.com/appengine/js/user_session.js

## Compliance — Run Before Every Commit

After every edit to page.tsx, run this grep scan before committing:

```
grep -n "certified\|free\|reconstruction\|rebuild\|crawl space\|licensed\|insured\|bonded\|cheap\|affordable\|lowest\|best\|greatest\|statistics\|stats\|inspect\|detection\|thermal imaging\|waterproof\|repair only\|mold testing\|mold inspection\|leak detection\|submit your info\|fill out\|no setup fees\|iicrc-trained\|iicrc certified\|satisfaction guaranteed" app/water-damage/houston/emergency/page.tsx
```

Known false positives — do NOT flag these as violations:
- "no cost to call" — pricing transparency statement, not a price suggestion
- "no cost connection service" — same as above
- "IICRC Training" in credibility badges — provider requirement statement, not a guarantee claim

If grep returns any other matches, stop and report them. Do not commit until cleared.

## Service Direct Compliance Rules (Exhibit A)

Banned terms — never use in any copy:
- certified, free, reconstruction, rebuild, crawl space
- licensed, insured, bonded
- cheap, affordable, lowest, best, greatest
- statistics, stats
- inspect, detection, thermal imaging, waterproof
- repair only, mold testing, mold inspection, leak detection
- submit your info, fill out, no setup fees, iicrc-trained, iicrc certified
- satisfaction guaranteed, licensed and insured

Required footer disclaimer — do not edit or remove:
SiteFlow Network (the "Website") offers a no-cost service to assist homeowners in connecting with local water damage restoration service providers. All contractors/providers are independent and the Website does not warrant or guarantee any work performed. It is the responsibility of the homeowner to verify that the hired contractor furnishes the necessary license and insurance required for the work to be performed. All persons depicted in photos or videos are actors or models and not contractors listed on the Website. By calling the number above, you consent to be contacted by a local restoration contractor in your area. This is an advertising service. We do not perform restoration work directly. Calls may be recorded for quality assurance. Standard call rates may apply. *Response times vary by provider and location.

Non-billable services — do not promote:
- Crawl spaces
- Reconstruction / rebuild
- Repair-only jobs
- Mold inspection or testing
- Leak detection
- Thermal imaging

## Design Rules

- Color scheme: Red #D92B2B + Charcoal #0F0F0F
- Accent: #FF3B3B (red-light), Dark red #B01E1E (red-dark)
- Fonts: Barlow Condensed (headlines) + Barlow (body) — loaded via @import in page.tsx CSS
- Logo: Next.js Image component with explicit width={205} height={56}
- Page is calls-only — no lead form, no email capture
- Framing: "connection service", "get connected", "local restoration professionals" — never "our crews", "we will send", or "we perform"
- Hero image uses Next.js Image component with fill, priority, sizes="100vw", quality={80}
- Dark overlay on hero: linear-gradient rgba(0,0,0,0.7) to rgba(0,0,0,0.55) to rgba(0,0,0,0.75)

## Page Anchor IDs (Google Ads Sitelinks)

These anchor IDs must always be present — do not remove or rename them:
- #cost-of-waiting — stats section
- #how-it-works — How It Works section
- #water-damage-types — Every Type of Water Emergency section
- #damage-costs — split cost/checklist section
- #faq — FAQ section
- #call-now — bottom CTA section

## Hero Copy (keyword-aligned for Quality Score)

- Badge: "Serving Greater Houston — 24 Hours a Day"
- H1 line 1: "Water Damage"
- H1 accent line: "in Houston?"
- Subheadline: "Flooded basement, standing water, or active leak — one call connects you with a local restoration crew."

## Key Copy Rules

- Response time always qualified: "Many Houston crews aim to arrive within 45-90 minutes — response times vary by provider and location"
- Never state response time as a guarantee
- Credibility bar label: "We ask providers to carry" (not "we require" or "we guarantee")
- CTA buttons: "Call Now — Get Connected Fast"
- Sticky bar: "Water damage gets worse every hour — call now"
- Social proof bar stats: 24/7, 45-90 min, $0, Houston — no fabricated homeowner counts

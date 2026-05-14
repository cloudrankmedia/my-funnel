# SiteFlow Network — Project Rules for Claude Code

## Git & Deployment

- Always work on and commit directly to `main`
- Never create feature branches
- Every commit must be pushed to `origin/main`
- Correct commit command: `git add . && git commit -m "description" && git push origin main`
- Vercel auto-deploys on every push to `main` — no manual deploy step needed

## Project Structure

- Live URL: https://go.siteflownetwork.com/water-damage/houston
- Repo: cloudrankmedia/my-funnel
- Landing page files:
  - `app/water-damage/houston/page.tsx` — all page copy, JSX, and inline CSS
  - `app/water-damage/houston/layout.tsx` — metadata, GTM, GHL number pool scripts
- Stack: Next.js App Router, deployed on Vercel via GitHub auto-deploy

## Tracking

- GTM container: GTM-54RJ95RD — loaded in layout.tsx only, do not add gtag scripts to page.tsx
- Phone number: (346) 910-9374 — defined as `phoneNumber` and `phoneHref` constants at the top of page.tsx
- GHL number pool scripts live in layout.tsx — do not move or duplicate them

## Compliance — Run Before Every Commit

After every edit to page.tsx, run this grep scan before committing:

```
grep -n "certified\|free\|reconstruction\|rebuild\|crawl space\|licensed\|insured\|bonded\|cheap\|affordable\|lowest\|best\|greatest\|statistics\|stats\|inspect\|detection\|thermal imaging\|waterproof\|repair only\|mold testing\|mold inspection\|leak detection\|submit your info\|fill out\|no setup fees\|iicrc-trained" app/water-damage/houston/page.tsx
```

Known false positive — do NOT flag this as a violation:
- Line containing "obligation-free" — this is a commitment disclaimer, not a price or service claim

If grep returns any other matches, stop and report them. Do not commit until cleared.

## Service Direct Compliance Rules (Exhibit A)

Banned terms — never use in any copy:
- certified, free, reconstruction, rebuild, crawl space
- licensed, insured, bonded
- cheap, affordable, lowest, best, greatest
- statistics, stats
- inspect, detection, thermal imaging, waterproof
- repair only, mold testing, mold inspection, leak detection
- submit your info, fill out, no setup fees, iicrc-trained

Non-billable services — do not promote:
- Crawl spaces
- Reconstruction / rebuild
- Repair-only jobs
- Mold inspection or testing
- Leak detection
- Thermal imaging

## Design Rules

- Color scheme: Navy #242e51 + Orange #E8500A
- Fonts: Bebas Neue (headlines) + DM Sans (body)
- Logo image: /public/siteflow-logo.png
- Page is calls-only — no lead form, no email capture
- Matchmaker/platform framing throughout: "get matched", "contractors in our network" — never "our crews" or "we will send"

## Page Anchor IDs (Google Ads Sitelinks)

These anchor IDs must always be present — do not remove or rename them:
- #why
- #facts
- #services
- #how-it-works
- #insurance

## Footer Disclaimer

The Service Direct TCPA disclaimer in the footer is required verbatim — do not edit or remove it.

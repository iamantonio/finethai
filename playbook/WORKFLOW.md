# Website Redesign Pitch Workflow

A repeatable system for pitching website redesigns to local businesses.

---

## Overview

| Phase | Time | What You Do |
|-------|------|-------------|
| 1. Scout | 15 min | Find a business with a bad website |
| 2. Research | 30 min | Scrape their site, analyze problems, research industry best practices |
| 3. Build | 2-4 hrs | Create the redesigned site with their real content |
| 4. Pitch Doc | 30 min | Generate the proposal document with pricing |
| 5. Demo & Close | 1 hr | Walk them through the live demo, close the deal |

**Total time per pitch: ~4-6 hours**
**Revenue per close: $2,500-5,000 + $150-300/mo recurring**

---

## Phase 1: Scout (15 min)

### Finding Targets

Best targets are local businesses with:
- Websites built on templates (Wix, Squarespace, BeyondMenu, GoDaddy)
- No food/product photography
- Not mobile-optimized
- "Last updated" feel (outdated info, broken links)
- No reviews/social proof displayed
- PDF menus (restaurants)

### High-Value Verticals

| Business Type | Avg Deal Size | Recurring | Why They Pay |
|---------------|---------------|-----------|--------------|
| Restaurants | $2,500-4,000 | $150-200/mo | Online ordering = direct revenue |
| Dentists/Doctors | $3,000-5,000 | $200-300/mo | Patient acquisition is expensive |
| Law Firms | $3,000-8,000 | $200-400/mo | High client value justifies spend |
| Real Estate Agents | $2,000-4,000 | $150-250/mo | Listings need to look premium |
| Salons/Spas | $2,000-3,500 | $100-200/mo | Booking integration drives revenue |
| Auto Shops | $2,000-3,500 | $100-200/mo | Trust signals matter for new customers |
| Fitness/Gyms | $2,500-4,000 | $150-250/mo | Membership signups from website |

### How to Find Them

1. Google "[business type] [city]" — click through the first 20 results
2. Look at Google Maps listings — click "Website" on each
3. Walk through local shopping areas and note businesses
4. Check Yelp/Google reviews for businesses people love but have bad websites

---

## Phase 2: Research (30 min)

### Step 2a: Scrape & Analyze Their Current Site

```bash
# Create project directory
mkdir -p ~/Dev/pitches/[business-name]
cd ~/Dev/pitches/[business-name]

# Map all URLs
firecrawl map "https://[their-website]" --limit 500 --json -o .firecrawl/urls.json

# Scrape main pages with screenshots
firecrawl scrape "https://[their-website]" --format markdown,screenshot,links -o .firecrawl/homepage.json
firecrawl scrape "https://[their-website]/menu" --format markdown,screenshot -o .firecrawl/page2.json
# ... repeat for key pages
```

### Step 2b: QA Checklist

Score each item 1-5 (1 = terrible, 5 = excellent):

```
[ ] First impression / hero section
[ ] Mobile responsiveness
[ ] Page load speed
[ ] Food/product photography
[ ] Menu/services presentation
[ ] Contact info visibility (phone, address, hours)
[ ] Online ordering / booking integration
[ ] Social proof (reviews, testimonials)
[ ] About/story section
[ ] SEO (meta tags, structured data)
[ ] Call-to-action clarity
[ ] Navigation simplicity
```

Items scoring 1-2 become your pitch talking points.

### Step 2c: Research Industry Best Practices

```bash
# Search for best practices in their industry
firecrawl search "best [business type] website designs 2025 2026" --limit 5 --scrape -o .firecrawl/research.json
firecrawl search "[business type] website UX patterns increase conversions" --limit 5 --scrape -o .firecrawl/ux-research.json
```

Key patterns to look for:
- What do the best sites in their industry do?
- What conversion patterns drive revenue?
- What mobile UX patterns work?
- What trust signals matter?

---

## Phase 3: Build (2-4 hours)

### Step 3a: Scaffold

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --use-npm --yes
npx shadcn@latest init -d --yes
npx shadcn@latest add badge sheet separator --yes
npm install framer-motion
```

### Step 3b: Customize Theme

Edit `src/app/globals.css` — adapt colors to match their existing brand:

| Business Vibe | Background | Accent | Feel |
|---------------|------------|--------|------|
| Restaurant (upscale) | Dark (#1a1a1a) | Gold/Amber | Premium, warm |
| Restaurant (casual) | White | Bright red/orange | Fun, energetic |
| Medical/Dental | White | Blue/teal | Clean, trustworthy |
| Law Firm | Dark navy | Gold/white | Authoritative |
| Salon/Spa | Soft white | Rose/pink/purple | Elegant, calming |
| Auto/Trade | Dark gray | Orange/yellow | Bold, reliable |
| Fitness | Dark | Lime/neon green | Energetic, strong |

### Step 3c: Create Data File

Extract all their real content into a structured data file:
- Business name, address, phone, hours
- Services/menu items with prices
- Any existing testimonials
- Their ordering/booking URL

### Step 3d: Build Pages

Use the reusable component patterns from the Fine Thai project:
- `src/components/animations.tsx` — FadeIn, StaggerChildren, FloatingCTA
- `src/components/navigation.tsx` — Sticky header + mobile bottom nav
- `src/components/footer.tsx` — Hours, contact, links

**Every site needs these sections:**
1. Full-bleed hero with background image + single CTA
2. Trust signals (rating, years in business, review count)
3. Featured services/products with images
4. About/story section
5. Reviews/testimonials
6. Location & hours with Google Maps
7. Persistent order/book/call CTA

### Step 3e: Configure Unsplash Images

Use free Unsplash images that match their business. Update `next.config.ts`:

```ts
images: {
  remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
}
```

**Important:** Tell the client these are placeholder images. Offer professional photography as an upsell ($500-1,000 add-on, outsource to a local photographer).

### Step 3f: Deploy Preview

```bash
# Push to GitHub
gh repo create [business-name]-website --public --source=. --push

# Deploy to Vercel for a live preview URL
npx vercel --yes
```

Give them a live URL they can click on their phone during the pitch.

---

## Phase 4: Pitch Document (30 min)

### Adapt the Template

Copy `pitch/generate-pitch.js` from the Fine Thai project and customize:

1. Replace business name, address, industry throughout
2. Update the "Problems" section with their specific issues (from QA checklist)
3. Update the "Features" section for their industry
4. Adjust pricing based on complexity and business type
5. Update the ROI section with industry-specific math

### Pricing Guide

| Complexity | One-Time | Monthly | When to Use |
|------------|----------|---------|-------------|
| Simple (5-page brochure) | $1,500-2,500 | $100-150/mo | Small shops, simple services |
| Standard (menu/services + ordering) | $2,500-4,000 | $150-250/mo | Restaurants, salons, trades |
| Premium (booking + CMS + custom) | $4,000-8,000 | $250-400/mo | Medical, legal, multi-location |

### ROI Formula by Industry

**Restaurants:**
- X extra orders/week × avg order value = weekly revenue
- "5 orders × $30 = $150/week = $7,800/year"

**Service businesses (dental, legal, salon):**
- X new clients/month × avg client lifetime value
- "2 new patients × $2,000 LTV = $4,000/month in new business"

**Retail/E-commerce:**
- Current monthly visitors × conversion rate improvement
- "10,000 visitors × 1% improvement = 100 extra sales/month"

---

## Phase 5: Demo & Close (1 hour)

### The Pitch Flow

1. **Open on their current site** (on their phone if possible)
   - "Let me show you what your customers see right now"
   - Point out 2-3 specific problems (don't be mean, be helpful)

2. **Show the industry stats** (from your pitch doc)
   - "77% of customers visit a website before choosing"
   - "68% are discouraged by a poor website"

3. **Pull up the new site** (on their phone AND a laptop)
   - "Now let me show you what it could look like"
   - Let the visuals speak — scroll slowly
   - Show it on mobile — this is where most of their customers are

4. **Walk through each section**
   - Hero: "This is the first thing customers see"
   - Menu: "They can search and filter — try typing a dish"
   - Reviews: "Social proof builds trust instantly"
   - Location: "Map, hours, phone — all visible without scrolling"
   - Order button: "This is always visible — one tap to order"

5. **Present the pricing**
   - Lead with the value, not the cost
   - "The ROI math shows this pays for itself in X weeks"
   - Always present two options (anchoring effect)

6. **Close**
   - "I can have this live in 2 weeks. All I need is your go-ahead."
   - Ask for a 50% deposit to start

### Handling Objections

| Objection | Response |
|-----------|----------|
| "Too expensive" | "Let's look at the ROI — this pays for itself in X weeks. Can you afford NOT to do this?" |
| "I already have a website" | "You do, and it's costing you customers. 68% of people leave a bad website." |
| "Let me think about it" | "Of course. Can I leave you the proposal? I have capacity for 2 more projects this month." |
| "My nephew can do it" | "That's great! Will they include SEO, mobile optimization, and ongoing maintenance? These are what drive actual revenue." |
| "I don't need online ordering" | "3x more customers prefer ordering direct. That saves you 15-30% in third-party fees." |

---

## Scaling This

### As Volume Grows

1. **Build a component library** — Reusable sections (hero, reviews, location, menu) that you can drop into any project
2. **Create industry templates** — Pre-built themes for restaurants, dental, legal, salon, etc.
3. **Hire a photographer** — Partner with a local photographer for the photo upsell
4. **Offer hosting bundles** — The recurring revenue ($150-300/mo) is the real business
5. **Get referrals** — After launch, ask: "Do you know any other business owners who'd benefit from this?"

### Revenue Projections

| Clients/Month | One-Time Revenue | Recurring (cumulative) | Month 12 Total |
|---------------|-----------------|----------------------|----------------|
| 1 | $2,500 | $170/mo × clients | $2,500 + $2,040 |
| 2 | $5,000 | $340/mo × months | $5,000 + $4,080 |
| 3 | $7,500 | $510/mo × months | $7,500 + $6,120 |
| 4 | $10,000 | $680/mo × months | $10,000 + $8,160 |

At 2 clients/month: **$60,000 one-time + $24,480 recurring = $84,480 in year 1.**
By month 12 you'd have 24 clients paying $4,080/mo recurring = **$48,960/year passive income.**

---

## File Structure Template

```
~/Dev/pitches/[business-name]/
├── .firecrawl/              # Scraped content from their site
├── src/
│   ├── app/
│   │   ├── page.tsx         # Homepage
│   │   ├── menu/            # Menu/services page
│   │   └── layout.tsx       # Root layout
│   ├── components/
│   │   ├── animations.tsx   # Reusable (copy from finethai)
│   │   ├── navigation.tsx   # Adapt per business
│   │   ├── footer.tsx       # Adapt per business
│   │   └── home-client.tsx  # Main homepage component
│   └── data/
│       └── business.ts      # All business data in one file
├── pitch/
│   ├── generate-pitch.js    # Pitch doc generator (adapt template)
│   └── [Business]_Proposal.docx
└── next.config.ts
```

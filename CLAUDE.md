# CyberAIQ AG — Project Intelligence
# Claude Code reads this automatically every session.
# Last updated: April 2026

---

## PROJECT STATE
- 6 pages built: /, /about, /services, /partners, /careers, /contact
- All content is real from cyberaiq.com — NEVER change content
- Zero TypeScript errors, all routes compile
- Ready for deployment to Vercel

## COMPONENT MAP
- Navbar: /src/components/Navbar.tsx
- Hero (homepage): /src/components/Hero.tsx
- 3D Network Graph: /src/components/HeroScene.tsx
- Services Section: /src/components/ServicesSection.tsx
- Stats Section: /src/components/StatsSection.tsx
- Partners Section: /src/components/PartnersSection.tsx
- CTA Section: /src/components/CTASection.tsx
- Footer: /src/components/Footer.tsx
- Custom Cursor: /src/components/CustomCursor.tsx
- Pages: /src/app/[page]/page.tsx

## BRAND SYSTEM
- Background: #0A0D12
- Orange accent: #F47920 (CTAs, energy, primary highlights)
- Blue accent: #2B7EC1 (AI/tech/data elements)
- Text primary: #F0F4F8
- Text muted: #8896AB
- Footer bg: #060810
- Logo: /public/logo.png — transparent PNG — NEVER add any
  background color to its container

## TYPOGRAPHY SCALE (from CrowdStrike/Linear/Vercel research)
- Homepage hero h1: text-6xl md:text-7xl lg:text-8xl
- Inner page hero h1: text-3xl sm:text-4xl md:text-5xl MAX
- Section h2: text-3xl md:text-4xl
- Card titles: text-xl font-semibold
- Body: text-base or text-lg text-[#8896AB]
- Eyebrow labels: text-xs tracking-[0.3em] uppercase
- All large headings: font-black tracking-[-0.02em]

## SPACING SYSTEM (from design research)
- Inner page hero: pt-32 pb-24 minimum — ALWAYS
- Section padding: py-32 minimum
- Content max-width: max-w-7xl mx-auto px-6
- Card padding: p-7 or p-8
- Section gap: gap-6 for 4-col, gap-8 for 2-col

## COMPONENT PATTERNS
- Cards: background rgba(255,255,255,0.02), border 1px solid
  rgba(255,255,255,0.06), backdropFilter blur(10px),
  borderRadius rounded-2xl
- Card hover: border color → brand color at 0.4 opacity,
  boxShadow: 0 0 30px brandColor at 0.1 opacity
- Buttons primary: bg-[#F47920] text-white rounded-full
  px-8 py-4 font-semibold hover:bg-[#e06810]
- Buttons ghost: border border-white/20 text-white
  rounded-full px-8 py-4 hover:border-white/50
- Section dividers: border-t border-white/5 or border-white/6

## ANIMATION SYSTEM
- Lenis smooth scroll: synced with GSAP ticker in layout.tsx
- Framer Motion reveals: y:60→0, opacity:0→1, duration:0.8,
  ease:[0.16,1,0.3,1], viewport once:true margin:"-100px"
- Stagger: delay i*0.12
- Stats counter: requestAnimationFrame + easeOutQuart, 2s
- All 3D: dynamic import with ssr:false
- GSAP ticker lag smoothing: gsap.ticker.lagSmoothing(0)

## DESIGN QUALITY BAR
Reference sites: wiz.io, linear.app, vercel.com
Target: Premium dark cybersecurity — NOT generic Tailwind dark
Extracted patterns:
- CrowdStrike: 24px radius cards, 40px/24px padding, flat design
- Linear: text-wrap:balance, near-black bg, tight tracking
- Vercel: -0.04em hero tracking, 1px borders at 0.08 opacity

## WHAT'S FIXED — DO NOT TOUCH THESE
- Logo white box: FIXED (unoptimized Image, no backgrounds)
- Stats counter: FIXED (RequestAnimationFrame, values 12/300/99/80)
- Inner page hero padding: FIXED (pt-32 on all inner pages)
- Navbar active states: FIXED (underline indicator)
- Footer: FIXED (real email + phone, LinkedIn only)

## NEVER DO LIST (learned from bugs in this project)
- NEVER add background color to logo container
- NEVER use text-7xl or larger on inner page heroes
- NEVER invent statistics or company data
- NEVER use emoji as icons — always SVG or Lucide
- NEVER run full site rebuild without checking what's fixed
- NEVER use dangerouslySetInnerHTML
- NEVER add style={{ background: "transparent" }} to Image tags
  (causes issues — use unoptimized prop instead)

## MCPs CONNECTED
- 21st.dev Magic: use /ui commands for any UI component
- Context7: use for live docs on R3F, GSAP, Framer Motion, Next.js
- Firecrawl: use to research competitor sites for design patterns
- Gmail/Calendar: not relevant for this project

## WORKFLOW RULES
- Run /plan before any task touching more than 3 files
- Run /compact when conversation feels slow or long
- Run npm run build to verify zero errors before reporting done
- Push to GitHub at end of every work session
- When using 21st.dev, use /ui command directly, not in prose

## DEPLOYMENT TARGET
- Platform: Vercel
- Repo: GitHub (not yet created — next step)
- Domain: cyberaiq.com (DNS update after deploy)
- No environment variables needed for this static Next.js site

# Design Research — Award-Winning Cybersecurity & SaaS Sites

> Scraped via WebFetch on 2026-04-03. CrowdStrike returned the richest CSS data.
> Linear and Vercel use CSS custom properties; exact values estimated from pattern analysis.

---

## CrowdStrike (crowdstrike.com) — Most Relevant (Cybersecurity)

### Colors
| Token | Value |
|-------|-------|
| Primary red | `#ec0000` |
| Secondary blue | `#0024ff` |
| CTA gradient | `linear-gradient(90deg, #ec0000, #0024ff)` |
| Background (light) | `#fff` |
| Dark text | `#000` |
| Muted text | `#949494`, `#707070` |

### Typography
| Element | Size | Weight | Line-Height |
|---------|------|--------|-------------|
| Hero headline | 32px (2pc) | 700 | 38px |
| Section heading (H3) | 24px | 700 | 30px |
| Subheading | 14px | 600 | 17px |
| Body | 14px | 500-600 | 17px |
| Eyebrow/Label | 16px | 600 | 19px |
| Font families | `crowdstrike-sharp-sans`, `neue-haas-grotesk-display-pro` | | |

### Cards
| Property | Value |
|----------|-------|
| border-radius | `24px` |
| padding | `40px 24px` (standard), `40px 56px` (teaser) |
| border | `2px` gradient frame (featured) |
| background | `#fff` (solid white) |
| shadow | Flat — no explicit box-shadow |

### Buttons
| Property | Value |
|----------|-------|
| Background | `#ec0000` solid or `linear-gradient(90deg, #ec0000, #0024ff)` |
| Text color | `#fff` |
| border-radius | `8px` |
| padding | `13px 17px` (desktop), `7px 9px` (mobile) |
| font-size | 16px |
| font-weight | 600 |

### Spacing
| Context | Value |
|---------|-------|
| Hero section padding | `40px` min (mobile), larger desktop |
| Card internal padding | `40px 24px` to `40px 56px` |
| Content row gap | `9pt` (~12px), mobile `8px` |
| Heading → content | `24px` |
| Horizontal sides | `56px` desktop, `32px` mobile |

### Animations
- Minimal explicit transitions
- Card hover: color/gradient shifts
- 3s setTimeout for overlay pre-hiding
- No 3D transforms — clean flat aesthetic

### Breakpoints
- Desktop: `≥1025px`
- Tablet: `≥768px`
- Mobile: `<768px`

---

## Linear (linear.app) — SaaS Reference (Dark Theme)

### Colors
- Background: CSS variable `--color-bg-primary` (estimated `#0A0A0B`)
- Text primary: `--color-text-primary` (estimated `#F7F8F8`)
- Text secondary: `--color-text-secondary` (estimated `#9BA1A6`)
- Text tertiary: `--color-text-tertiary` (estimated `#6B7076`)
- Accent: Purple/violet tones

### Typography
| Element | Estimated Size | Weight |
|---------|---------------|--------|
| Hero display (Title-8) | ~72-80px | medium (500) |
| Section heading (Title-6) | ~48-56px | medium (500) |
| Subheading | ~20-24px | semibold (600) |
| Body (text-regular) | ~16px | normal (400) |
| Body large | ~18px | semibold (600) |
| Small/mini | ~14px | medium (500) |
| Micro/tiny | ~12px | medium (500) |
| text-wrap | `balance` (headings), `pretty` (body) |
| Line-height (titles) | `1` (tight) |

### Cards
- Background: `rgba(255,255,255,0.03-0.05)` (dark glass)
- Border: `1px solid rgba(255,255,255,0.06-0.08)`
- Border-radius: `12-16px`
- Blur: subtle backdrop-filter

### Buttons
- Rounded: ~`8px` radius
- Padding: compact, ~`8-12px 16-24px`
- Primary: solid fill
- Ghost: transparent + border

### Spacing
- Large section padding: responsive, ~`120-160px` vertical at desktop
- Content max-width: ~`1100px`

### Animations
- Grid dot animations: `3200ms steps(1, end) infinite` (agent patterns)
- Grid upDown: `2800ms steps(1, end)` (opacity 0.3 → 1)
- Smooth scroll behavior
- Intersection-triggered reveals

---

## Wiz (wiz.io) — Cloud Security

### Colors
- Light theme default with dark mode sections
- Accent: blues and greens (cloud security palette)
- White backgrounds predominant

### Typography
- Modern sans-serif (Next.js default stack)
- Large hero text (~48-64px estimated)
- Clean hierarchy with weight differentiation

### Cards
- White/semi-transparent backgrounds
- Rounded corners (~16px)
- Subtle shadows
- Customer testimonial + video cards

### Buttons
- Primary: "Get a demo" — filled, dark/colored
- Secondary: outlined/ghost
- Generous padding

### Spacing
- Full-width sections
- Substantial vertical gutters (80-120px estimated)
- Social proof logo carousel below hero

### Animations
- Slide carousel with prev/next
- Lazy-loaded images
- Video player reveals

---

## Vercel (vercel.com) — Design System (Geist)

### Colors (from Geist design system knowledge)
| Token | Value |
|-------|-------|
| Background (dark) | `#000000` |
| Background subtle | `#111111` |
| Border | `rgba(255,255,255,0.08)` |
| Text primary | `#EDEDED` |
| Text secondary | `#888888` |
| Accent blue | `#0070F3` |

### Typography (Geist)
| Element | Size | Weight |
|---------|------|--------|
| Hero display | 64-80px | 700-800 |
| Section heading | 40-48px | 700 |
| Subheading | 20-24px | 400-500 |
| Body | 16px | 400 |
| Small | 14px | 400 |
| Font family | `Geist Sans`, `Geist Mono` |
| Letter-spacing (hero) | `-0.04em` to `-0.02em` |
| Line-height | `1.1` (hero), `1.5` (body) |

### Cards
| Property | Value |
|----------|-------|
| Background | `#111111` or transparent |
| Border | `1px solid rgba(255,255,255,0.08)` |
| Border-radius | `12px` |
| Shadow | None (flat) |
| Hover border | `rgba(255,255,255,0.2)` |

### Buttons
| Property | Value |
|----------|-------|
| Primary bg | `#EDEDED` (white on dark) or `#0070F3` |
| Border-radius | `9999px` (pill) or `6px` (rect) |
| Padding | `8px 16px` (sm), `12px 24px` (lg) |
| Font-size | 14px |
| Font-weight | 500 |
| Transition | `150ms ease` |

### Spacing
| Context | Value |
|---------|-------|
| Hero vertical | `160px` top, `120px` bottom (estimated) |
| Section padding | `96-120px` vertical |
| Content max-width | `1100px` |
| Component gap | `24-32px` |

### Animations
- `150ms ease` transitions on interactive elements
- Intersection Observer reveals
- Smooth fade-in on scroll
- No heavy animations — performance-first

---

## Key Patterns Across All Sites

### Universal Rules
1. **Typography**: Hero headlines are 64-80px, section headings 40-56px, body 14-16px
2. **Letter-spacing**: Tight on headlines (`-0.02em` to `-0.04em`), normal on body
3. **Card radius**: `12-24px` universally
4. **Card borders**: `1px solid rgba(255,255,255,0.06-0.08)` on dark themes
5. **Section padding**: `96-160px` vertical between major sections
6. **Button radius**: Pill (`9999px`) for primary CTAs, `6-8px` for secondary
7. **Button padding**: `12-16px 24-40px` for prominent CTAs
8. **Animations**: Subtle, fast (150-300ms). No flashy animations.
9. **Max-width**: `1100-1200px` for content
10. **Font-weight hierarchy**: 700-800 for display, 500-600 for subheads, 400 for body

### What Makes Them Awwwards-Level
- **Restraint**: Very few colors, very few font sizes
- **Contrast**: Dark bg + high-contrast white text + one accent color
- **Spacing**: Generous — never cramped, always breathing room
- **Borders**: Barely visible (`0.06-0.08` opacity) — adds depth without noise
- **Animation**: Fast and subtle, triggered once on scroll entry
- **Typography weight**: Headlines use extreme weights (800-900) for impact
- **Text-wrap**: `balance` on headings prevents orphaned words

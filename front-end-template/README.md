# GenomicX Front-End Template

Shared design system for all GenomicX applications (BRIGx, MLSTx, MashtreeWebx, etc.).

## What's included

```
css/genomicx.css   — Full design system (tokens, reset, components)
js/genomicx.js     — Shared JS (nav toggle, SVG icons, helpers)
images/            — Logos, favicons, OG image (SVG + PNG)
index.html         — Live component reference page
```

## Quick start

Add to any GenomicX app:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/genomicx.css">
<link rel="icon" href="images/favicon.svg" type="image/svg+xml">

<!-- At end of body -->
<script src="js/genomicx.js"></script>
```

## CSS class prefix

All classes use the `gx-` prefix (e.g. `gx-btn`, `gx-nav`, `gx-panel`). CSS custom properties use `--gx-` prefix with backwards-compatible aliases matching the original site.

## Design tokens

| Token | Value | Usage |
|---|---|---|
| `--gx-bg` | `#0F172A` | Page background |
| `--gx-bg-alt` | `#1E293B` | Card/panel background |
| `--gx-bg-elevated` | `#253349` | Elevated surfaces |
| `--gx-text` | `#E2E8F0` | Body text |
| `--gx-text-muted` | `#94A3B8` | Secondary text |
| `--gx-text-bright` | `#F1F5F9` | Headings, emphasis |
| `--gx-border` | `#334155` | Borders, dividers |
| `--gx-accent` | `#14B8A6` | Primary accent (teal) |
| `--gx-accent-hover` | `#2DD4BF` | Hover state |
| `--gx-indigo` | `#6366F1` | Secondary accent |

## JS API

```js
GenomicX.icon('github')           // SVG string
GenomicX.buildNav({ appName: 'BRIGx', sourceUrl: '...' })
GenomicX.buildFooter()
GenomicX.initNav()                // Wire up mobile hamburger
```

## Fonts

- **Inter** — UI text (400, 500, 600, 700, 800)
- **JetBrains Mono** — Code, tech tags, monospace (400, 500)

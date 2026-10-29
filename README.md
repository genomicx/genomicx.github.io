# Genomicx

A portfolio site showcasing browser-based bioinformatics tools powered by WebAssembly.

**Live site:** [genomicx.org](https://genomicx.org), deployed from this repository’s `main` branch through the existing Cloudflare Pages project `genomicx` (`genomicx-github-io.pages.dev`).

## Adding a New Tool

Edit `apps.json` and add a new entry:

```json
{
  "id": "mytool",
  "name": "MyTool",
  "tagline": "Short description",
  "description": "A longer description of what the tool does and why it's useful.",
  "icon": "default",
  "tech": ["Tool1", "WebAssembly"],
  "features": [
    "Feature one",
    "Feature two"
  ],
  "demoUrl": "https://mytool.genomicx.org",
  "sourceUrl": "https://github.com/happykhan/mytool",
  "color": "#8b5cf6"
}
```

### Field reference

| Field       | Description                                                    |
|-------------|----------------------------------------------------------------|
| `id`        | Unique identifier (lowercase, no spaces)                       |
| `name`      | Display name                                                   |
| `tagline`   | Short subtitle shown under the name                            |
| `description` | Longer description for the card body                         |
| `icon`      | Icon key: `rings`, `dna`, `tree`, or `default`                 |
| `tech`      | Array of technology tags                                       |
| `features`  | Array of feature bullet points                                 |
| `demoUrl`   | URL to the live app                                            |
| `sourceUrl` | URL to the source repository                                   |
| `color`     | Hex color for the icon background                              |

To add a custom icon, add an SVG string to the `SVG_ICONS` object in `js/main.js`.

## Local Development

No build step required. Serve the directory with any static file server:

```bash
npx serve .
# or
python3 -m http.server
```

## Structure

```
index.html      - Main landing page
about.html      - About page
apps.json       - Tool definitions (edit this to add tools)
css/style.css   - Styles
js/main.js      - App rendering logic
```

## Shared theme

The site uses the published `@genomicx/ui` 0.10.1 tokens and bundled IBM Plex fonts, vendored for static hosting. See [provenance and refresh instructions](vendor/genomicx-ui/README.md). No build or package installation is needed. Layout and catalogue ordering remain local to this website.

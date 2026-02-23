/**
 * GenomicX Shared JavaScript
 * https://github.com/genomicx/front-end-template
 *
 * Provides common functionality for all GenomicX applications:
 * - Mobile nav toggle
 * - Scroll animations
 * - Shared SVG icons
 */

const GenomicX = (() => {

  /* =========================================================================
     SVG ICONS
     ========================================================================= */

  const ICONS = {
    // GenomicX DNA logo
    logo: `<svg viewBox="0 0 24 24" fill="none" stroke="#14B8A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M2 15c6.667-6 13.333 0 20-6"/>
      <path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993"/>
      <path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"/>
      <path d="M17 6l-2.5 2.5"/><path d="M14 8l-1 1"/>
      <path d="M7 18l2.5-2.5"/><path d="M3.5 14.5l.5-.5"/>
    </svg>`,

    // GitHub mark
    github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,

    // Hamburger menu
    menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,

    // External link
    externalLink: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,

    // Arrow right
    arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,

    // Shield / privacy
    shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,

    // Globe / accessibility
    globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,

    // Code / WebAssembly
    code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>`,

    // Lock / security
    lock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,

    // Upload
    upload: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,

    // Download
    download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,

    // Check circle
    checkCircle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,

    // Alert triangle
    alertTriangle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,

    // Info circle
    info: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,

    // App-specific icons
    rings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,

    dna: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 15c6.667-6 13.333 0 20-6"/><path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993"/><path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"/><path d="M17 6l-2.5 2.5"/><path d="M14 8l-1 1"/><path d="M7 18l2.5-2.5"/><path d="M3.5 14.5l.5-.5"/><path d="M20 9l.5-.5"/><path d="M6.5 12.5l1-1"/><path d="M16.5 10.5l1-1"/><path d="M10 16l1.5-1.5"/></svg>`,

    tree: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22V8"/><path d="M5 12H2a10 10 0 0 1 20 0h-3"/><path d="M8 22h8"/><path d="M12 8a4 4 0 0 0-4 4"/><path d="M12 8a4 4 0 0 1 4 4"/></svg>`,

    // Users
    users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,

    // Thumbs up
    thumbsUp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>`,
  };


  /* =========================================================================
     NAV TOGGLE
     ========================================================================= */

  function initNav() {
    const toggle = document.querySelector('.gx-nav-toggle');
    const links = document.querySelector('.gx-nav-links');
    if (toggle && links) {
      toggle.addEventListener('click', () => {
        links.classList.toggle('open');
        const expanded = links.classList.contains('open');
        toggle.setAttribute('aria-expanded', expanded);
      });
    }
  }


  /* =========================================================================
     HELPERS
     ========================================================================= */

  /**
   * Get an SVG icon string by name.
   * @param {string} name - Icon key from the ICONS map.
   * @returns {string} SVG markup string.
   */
  function icon(name) {
    return ICONS[name] || ICONS.code;
  }

  /**
   * Build the standard GenomicX nav HTML.
   * @param {object} opts
   * @param {string} opts.appName - Name shown after "GenomicX /"
   * @param {string} [opts.activePage] - Current page identifier
   * @param {string} [opts.homeUrl] - URL for the GenomicX home link (default: https://genomicx.vercel.app)
   * @param {string} [opts.sourceUrl] - GitHub repo URL for this app
   * @returns {string} HTML string for the nav element.
   */
  function buildNav({ appName, activePage, homeUrl, sourceUrl }) {
    homeUrl = homeUrl || 'https://genomicx.vercel.app';
    sourceUrl = sourceUrl || 'https://github.com/genomicx';

    return `
    <nav class="gx-nav">
      <div class="gx-nav-inner">
        <a href="${homeUrl}" class="gx-nav-logo">
          ${ICONS.logo}
          <span>GenomicX</span>
        </a>

        <button class="gx-nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
          ${ICONS.menu}
        </button>

        <ul class="gx-nav-links">
          <li><a href="${homeUrl}">Home</a></li>
          <li><a href="${homeUrl}#tools">Tools</a></li>
          <li><a href="${homeUrl}/about">Mission</a></li>
          <li>
            <a href="${sourceUrl}" target="_blank" rel="noopener" class="gx-nav-github">
              ${ICONS.github}
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </nav>`;
  }

  /**
   * Build the standard GenomicX footer HTML.
   * @returns {string} HTML string for the footer element.
   */
  function buildFooter() {
    return `
    <footer class="gx-footer">
      <div class="gx-footer-inner">
        <span>GenomicX &mdash; open-source bioinformatics for the browser</span>
        <ul class="gx-footer-links">
          <li><a href="https://github.com/genomicx" target="_blank" rel="noopener">GitHub</a></li>
          <li><a href="https://genomicx.vercel.app/about">Mission</a></li>
          <li><a href="https://www.happykhan.com/" target="_blank" rel="noopener">Nabil-Fareed Alikhan</a></li>
        </ul>
      </div>
    </footer>`;
  }


  /* =========================================================================
     THEME
     ========================================================================= */

  const THEME_KEY = 'gx-theme';

  /**
   * Get the current theme ('dark' | 'light').
   * Priority: data-theme attr > localStorage > system preference > 'dark'
   */
  function getTheme() {
    const attr = document.documentElement.getAttribute('data-theme');
    if (attr) return attr;
    const stored = localStorage.getItem(THEME_KEY);
    if (stored) return stored;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark';
  }

  /**
   * Set the theme and persist to localStorage.
   * @param {'dark'|'light'} theme
   */
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    // Update toggle button states
    document.querySelectorAll('.gx-theme-toggle-option').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-theme') === theme);
    });
    // Update logo stroke color
    document.querySelectorAll('.gx-nav-logo svg').forEach(svg => {
      svg.setAttribute('stroke', theme === 'light' ? '#0D9488' : '#14B8A6');
    });
  }

  /**
   * Toggle between dark and light.
   * @returns {string} The new theme.
   */
  function toggleTheme() {
    const next = getTheme() === 'dark' ? 'light' : 'dark';
    setTheme(next);
    return next;
  }

  /**
   * Initialize theme from stored preference and wire up toggle buttons.
   */
  function initTheme() {
    // Apply saved theme immediately
    const theme = getTheme();
    setTheme(theme);

    // Wire up 3-button toggles (dark / system / light)
    document.querySelectorAll('.gx-theme-toggle-option').forEach(btn => {
      btn.addEventListener('click', () => {
        const t = btn.getAttribute('data-theme');
        if (t === 'system') {
          localStorage.removeItem(THEME_KEY);
          document.documentElement.removeAttribute('data-theme');
          // Re-read system preference
          const sys = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
          document.querySelectorAll('.gx-theme-toggle-option').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-theme') === 'system');
          });
          document.querySelectorAll('.gx-nav-logo svg').forEach(svg => {
            svg.setAttribute('stroke', sys === 'light' ? '#0D9488' : '#14B8A6');
          });
        } else {
          setTheme(t);
        }
      });
    });

    // Wire up simple switch toggles
    document.querySelectorAll('.gx-theme-switch').forEach(btn => {
      btn.addEventListener('click', toggleTheme);
    });

    // Listen for system preference changes
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
        if (!localStorage.getItem(THEME_KEY)) {
          // Only auto-switch if user hasn't manually chosen
          document.documentElement.removeAttribute('data-theme');
        }
      });
    }
  }

  /**
   * Build the theme toggle HTML (3-option: dark / system / light).
   * @returns {string} HTML string.
   */
  function buildThemeToggle() {
    return `
    <div class="gx-theme-toggle" role="radiogroup" aria-label="Theme">
      <button class="gx-theme-toggle-option active" data-theme="dark" aria-label="Dark theme" title="Dark">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      </button>
      <button class="gx-theme-toggle-option" data-theme="system" aria-label="System theme" title="System">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
      </button>
      <button class="gx-theme-toggle-option" data-theme="light" aria-label="Light theme" title="Light">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
      </button>
    </div>`;
  }


  /* =========================================================================
     INIT
     ========================================================================= */

  function init() {
    initNav();
    initTheme();
  }

  // Auto-init on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }


  /* =========================================================================
     PUBLIC API
     ========================================================================= */

  return {
    icon,
    buildNav,
    buildFooter,
    buildThemeToggle,
    initNav,
    initTheme,
    getTheme,
    setTheme,
    toggleTheme,
    ICONS,
  };

})();

// Export for module environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = GenomicX;
}

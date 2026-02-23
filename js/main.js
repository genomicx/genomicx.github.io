/**
 * Genomicx Portfolio - Main JS
 * Loads app data from apps.json, renders cards & roadmap dynamically.
 * Includes dark/light theme toggle support.
 */

const SVG_ICONS = {
  rings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  dna: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 15c6.667-6 13.333 0 20-6"/><path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993"/><path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"/><path d="M17 6l-2.5 2.5"/><path d="M14 8l-1 1"/><path d="M7 18l2.5-2.5"/><path d="M3.5 14.5l.5-.5"/><path d="M20 9l.5-.5"/><path d="M6.5 12.5l1-1"/><path d="M16.5 10.5l1-1"/><path d="M10 16l1.5-1.5"/></svg>`,
  tree: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22V8"/><path d="M5 12H2a10 10 0 0 1 20 0h-3"/><path d="M8 22h8"/><path d="M12 8a4 4 0 0 0-4 4"/><path d="M12 8a4 4 0 0 1 4 4"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
  default: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>`
};

function getIcon(iconName) {
  return SVG_ICONS[iconName] || SVG_ICONS.default;
}

/* =========================================================================
   THEME
   ========================================================================= */

const THEME_KEY = 'gx-theme';

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  const theme = saved || 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  updateToggleIcon(theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem(THEME_KEY, next);
  updateToggleIcon(next);
}

function updateToggleIcon(theme) {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  if (theme === 'dark') {
    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
    btn.setAttribute('aria-label', 'Switch to light mode');
  } else {
    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    btn.setAttribute('aria-label', 'Switch to dark mode');
  }
}

/* =========================================================================
   APP CARDS
   ========================================================================= */

function createAppCard(app) {
  const card = document.createElement('article');
  card.className = 'app-card animate-in';

  const techTags = app.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');
  const features = app.features.map(f => `<li>${f}</li>`).join('');

  card.innerHTML = `
    <div class="app-card-header">
      <div class="app-icon" style="background: ${app.color}">
        ${getIcon(app.icon)}
      </div>
      <div class="app-meta">
        <h3>${app.name}</h3>
        <span class="tagline">${app.tagline}</span>
      </div>
    </div>
    <div class="app-card-body">
      <p>${app.description}</p>
    </div>
    <div class="app-tech">${techTags}</div>
    <ul class="app-features">${features}</ul>
    <div class="app-card-footer">
      <a href="${app.demoUrl}" target="_blank" rel="noopener" class="btn btn-primary">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        Launch App
      </a>
      <a href="${app.sourceUrl}" target="_blank" rel="noopener" class="btn btn-secondary">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        Source
      </a>
    </div>
  `;

  return card;
}

function renderApps(apps) {
  const grid = document.getElementById('apps-grid');
  if (!grid) return;

  const countEl = document.getElementById('app-count');
  if (countEl) {
    countEl.textContent = apps.length;
  }

  apps.forEach(app => {
    grid.appendChild(createAppCard(app));
  });

  requestAnimationFrame(() => {
    grid.querySelectorAll('.animate-in').forEach(el => {
      el.style.opacity = '';
    });
  });
}

/* =========================================================================
   ROADMAP TABLE
   ========================================================================= */

function statusBadge(value) {
  const labels = {
    'done': 'Done',
    'in-progress': 'In Progress',
    'pending': 'Pending',
    'not-started': 'Not Started'
  };
  const label = labels[value] || value;
  return `<span class="status-badge ${value}">${label}</span>`;
}

function renderRoadmap(apps) {
  const tbody = document.getElementById('roadmap-body');
  if (!tbody) return;

  apps.forEach(app => {
    const status = app.status || {};
    const row = document.createElement('tr');
    row.innerHTML = `
      <td class="tool-name">${app.name}</td>
      <td>${statusBadge(status.scoping || 'not-started')}</td>
      <td>${statusBadge(status.pipeline || 'not-started')}</td>
      <td>${statusBadge(status.webDev || 'not-started')}</td>
      <td>${statusBadge(status.benchmarking || 'not-started')}</td>
      <td>${app.sourceUrl ? `<a href="${app.sourceUrl}" target="_blank" rel="noopener">Repo</a>` : '—'}</td>
      <td>${app.demoUrl ? `<a href="${app.demoUrl}" target="_blank" rel="noopener">Live</a>` : '—'}</td>
    `;
    tbody.appendChild(row);
  });
}

/* =========================================================================
   LOAD & INIT
   ========================================================================= */

async function loadApps() {
  try {
    const resp = await fetch('apps.json');
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const apps = await resp.json();
    renderApps(apps);
    renderRoadmap(apps);
  } catch (err) {
    console.error('Failed to load apps:', err);
    const grid = document.getElementById('apps-grid');
    if (grid) {
      grid.innerHTML = `<p style="color: var(--gx-text-muted); text-align: center; grid-column: 1/-1;">
        Unable to load apps. Please try refreshing the page.</p>`;
    }
  }
}

function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      const expanded = links.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
    });
  }

  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNav();
  loadApps();
});

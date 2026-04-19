# HKU Freshman Guide

Repository **HKU-Web-Creation** — static HTML/CSS site for first-year orientation tasks (English at repo root; `zh-Hans/` and `zh-Hant/` mirrors with a header language switcher).

## Run locally

From this folder:

```bash
python -m http.server 8080
```

Open `http://localhost:8080/` (English) or `http://localhost:8080/zh-Hans/` / `http://localhost:8080/zh-Hant/`.

On Windows PowerShell you can instead use:

```powershell
py -m http.server 8080
```

## Deploy (e.g. GitHub Pages)

- Push the repo, enable **GitHub Pages** from the branch/folder that contains `index.html` at the site root.
- Use the **project site** URL shape `https://<user>.github.io/<repo>/` — all asset paths are relative, so `css/`, `js/`, and `assets/` resolve under the same base without extra configuration.
- Optional: set Pages **404** to a custom page later; not required for this coursework layout.

## Contents

- Pages: Home, First week, Study, Integrity, Wellbeing, Search (client-side filter), Privacy, About.
- Shared styles: `css/main.css`; scripts: `js/main.js` (mobile nav), `js/search.js` (search page only).
- Original SVG: `assets/favicon.svg`, `assets/illustration-*.svg`.

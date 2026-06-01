# Ying-Hsiu Chen — Product Design Portfolio

A bilingual (繁體中文 / English) product design portfolio built with Next.js and
Tailwind CSS. Includes in-depth DottedSign case studies with gallery diagrams
rebuilt as HTML/SVG so all copy stays translatable.

## 🔗 Live site

**https://imshenchen.github.io/yinghsiu-chen-portfolio/**

## Tech stack

- **Next.js 16** (App Router, static export)
- **React 19**
- **Tailwind CSS v4**
- **TypeScript**
- Custom i18n (`zh` / `en`) via `lib/i18n.ts` and `messages/`

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # static export to ./out
npm run lint
```

## Deployment

Pushing to `main` triggers the GitHub Actions workflow
(`.github/workflows/deploy.yml`), which builds a static export with
`GITHUB_PAGES=true` (sets the `/yinghsiu-chen-portfolio` base path) and publishes
`./out` to GitHub Pages.

## Project structure

```
app/                     # App Router pages ([lang], projects/[slug])
components/              # UI + project case-study components
  project/diagrams/      # HTML/SVG gallery diagrams (i18n-driven)
lib/                     # i18n, project data, base-path helpers
messages/                # zh.ts / en.ts translation dictionaries
public/projects/         # case-study imagery
```

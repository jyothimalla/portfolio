# Jyothi Malla — Portfolio (editable copy)

A hand-built React + TypeScript + Tailwind replica of your Lovable site
(`rainbow-profile-maker`), so you own the code and can edit it directly —
no Lovable account or credits needed.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`).

To build for deployment:

```bash
npm run build
```

This outputs static files to `dist/`, which you can deploy anywhere
(Netlify, Vercel, GitHub Pages, Cloudflare Pages, etc.).

## How to edit content

**All text on the site lives in one file: `src/content.ts`.** Job history,
education, skills, publications, bios, links, button labels — edit the
values there and the page updates automatically. You don't need to touch
any component code to change wording.

To swap your photo, drop a new image at `public/profile-photo.jpg`
(same filename), or change the `photo` path in `content.ts`.

## How to edit design

- Colors: `tailwind.config.js` → `primary` (navy), `accent` (teal), `cream`
  (background), `primaryLight` (dark section cards).
- Fonts: `Libre Baskerville` (serif headings) and `IBM Plex Sans` (body),
  loaded from Google Fonts in `index.html`.
- Layout/sections: each section is its own file in `src/components/`
  (`Hero.tsx`, `About.tsx`, `Education.tsx`, `Experience.tsx`,
  `Projects.tsx`, `Skills.tsx`, `Contact.tsx`, `Footer.tsx`).

## Structure

```
src/
  content.ts          ← edit all text/links here
  App.tsx             ← page assembly (section order)
  components/         ← one file per section
  index.css           ← Tailwind entry point
tailwind.config.js     ← colors & fonts
index.html             ← page title, meta, font loading
```

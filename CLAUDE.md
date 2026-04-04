# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (localhost with HMR)
npm run build      # Build to /dist
npm run preview    # Preview the production build
npm run lint       # Run ESLint
npm run deploy     # Build + deploy to GitHub Pages (gh-pages -d dist)
```

There are no tests in this project.

## Architecture

This is a single-page personal portfolio site for Joe Mazloum, built with React + Vite, deployed to GitHub Pages at `https://Yellow953.github.io/JoeMazloum/`. The Vite base is set to `/JoeMazloum/` to match the GitHub Pages path.

**Page sections (rendered in order in `App.jsx`):**
- `Hero` — Full-screen landing with animated typewriter text and parallax floating tech icons (`FloatingIcons`). Mouse position is tracked in `Hero` and passed down to `FloatingIcons` to create a parallax depth effect.
- `About` — Thin wrapper around `LeftRightSection`, a reusable two-column layout (text left, image right) with slide-in animations via Framer Motion + `react-intersection-observer`.
- `SkillsSticky` — Scrollable skill list on the left with a sticky image panel on the right (desktop). Uses `IntersectionObserver` to sync the active skill image as the user scrolls. On mobile, renders card-based layout instead.
- `LanguagesMarquee` — CSS keyframe marquee of spoken languages (English, Arabic, German, French). Languages are duplicated in the DOM to create a seamless loop.
- `Experience` — Vertical timeline of work history. Entries animate in from alternating sides using Framer Motion `whileInView`.
- `Footer` — Full-screen contact/connect section with GitHub and LinkedIn links.

**Key dependencies:**
- `framer-motion` — Animations throughout (scroll-triggered, hover, entrance)
- `react-simple-typewriter` — Typewriter effect in Hero
- `react-intersection-observer` — Used in `LeftRightSection` for scroll-triggered animations
- `react-icons` — Icon set (FaGithub, FaLinkedin in Footer)
- `react-bootstrap` — Available but minimally used

**Styling:** Global styles in `src/index.css`. Component-specific styles are mostly inline (JSX style props). No CSS modules or Sass.

**Static assets** (profile image, etc.) live in `public/` and are referenced without a path prefix (e.g., `"profile.jpeg"`).

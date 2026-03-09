# sana-clone

UI-only clone of [Sana Learn](https://sanalabs.com/platform). No AI, no block editor — just the shell, navigation, and learner experience reproduced from their actual product screenshots.

Built greenfield with a migration path for `cognition-university` content: same **Course → Section → Lesson** hierarchy, same MDX components (`<Video>`, `<CsvQuiz>`), same `lib/courses.ts` function signatures.

## Quick start

```bash
bun install
bun dev          # http://localhost:3000
```

## What's here

| Route | What it is |
|---|---|
| `/home` | Lavender hero card with serif greeting + To-do row + Featured grid |
| `/discover` | All courses as a filterable grid |
| `/library` | Assigned / In progress / Completed tabs with progress bars |
| `/courses/[slug]` | Full-bleed cover, Start/Resume CTA, section accordions |
| `/courses/[slug]/lessons/[lessonId]` | MDX body, sticky prev/next footer, keyboard nav (←/→) |
| `/search` `/create` `/manage` `/settings` | Empty-state stubs so the sidebar never 404s |

**The sidebar is the whole trick.** Three states, same container:
1. **Expanded** — workspace switcher → 7 nav items → teamspaces → Create new button
2. **Rail** — icon-only, hover to peek (Framer Motion width spring)
3. **Course outline** — when viewing a course, content swaps to Back button + nested lesson tree with completion checkmarks

Progress lives in `localStorage` (`lms:progress:<slug>`). No backend required.

## Design system

Tokens live in `app/globals.css` as CSS custom properties, bound to Tailwind via `@theme inline`. Extracted from `design-reference/ref-homepage-full.png`:

| Token | Value | Notes |
|---|---|---|
| `--sana-primary` | `#2d5bff` | Create new button, workspace avatar |
| `--sana-lavender` | `#e6e8fa` | Hero card bg, active nav pill |
| `--sana-radius-xl` | `24px` | Hero card, featured cards |
| `--font-serif` | Source Serif 4 | **Headlines only** — "Good morning, Emma" |
| `--font-sans` | General Sans | Everything else |

The serif-headline-on-sans-body pairing is Sana's signature. Don't use serif anywhere except `h1`/`h2` and you'll keep the editorial feel.

General Sans is self-hosted (`public/fonts/`, FFL license). Source Serif 4 comes from `@fontsource-variable`.

## Importing cognition-university content

The data layer (`lib/courses.ts`) currently reads `lib/mock-data.ts`. To swap in real content:

1. Copy course directories into `content/courses/{slug}/` — the `.gitkeep` there documents the expected shape.
2. Add `coverImage` to each course's metadata export (Sana's UI is image-heavy; courses without covers look broken).
3. Drop quiz CSVs into `public/quizzes/` — `<CsvQuiz csvFile="foo.csv" />` fetches from there.
4. Rewrite `lib/courses.ts` to scan `content/courses/` with `gray-matter`. Keep the function signatures identical: `getAllCourses()`, `getCourseBySlug()`, `getFlatLessons()`, `getLesson()`.

`<Video>` and `<CsvQuiz>` are already wired via `mdx-components.tsx`, so lessons render without modification.

## Stack

Next.js 16 (App Router) · Bun · Tailwind 4 · Framer Motion · Lucide icons · MDX

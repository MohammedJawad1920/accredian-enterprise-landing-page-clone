# AGENTS.md

Read this before starting any task.

## Project
Accredian Enterprise Landing Page Clone — a Next.js recreation of the Accredian Enterprise marketing page (enterprise.accredian.com), built as a take-home assignment for a Full Stack Developer Intern role. Single responsive landing page, no user-facing backend.

## Stack
- Framework: Next.js 16.2.x, App Router
- Language: TypeScript
- Styling: Tailwind CSS v4 (CSS-native `@theme` config, no `tailwind.config.js`)
- Database: None
- Auth: None required
- Testing: None formalized — Lean scope, verify manually against each task's acceptance criteria
- Deployment: Vercel

## Architecture
- Single route (`app/page.tsx`) composed of section components — no other pages
- One mock API route, `GET /api/content` (Route Handler), serving local JSON — the project's only "backend"
- Content lives in local JSON files under `/data`, not a database
- No auth, no sessions, no protected routes
- Provided static assets (logos, images, SVGs) live under `/public` and are used as-is, unmodified

## Folder Structure
- `/app` — layout, the single page, and `api/content/route.ts`
- `/components/sections` — one component per landing page section (Hero, TrustedByLogos, USPGrid, ProgramCategories, HowItWorks, Testimonials)
- `/components/ui` — shared primitives (Container, SectionHeading, Card, Button)
- `/components` — Navbar, Footer
- `/data` — local JSON content (features.json, testimonials.json, programs.json)
- `/public` — provided image/logo assets

## Patterns — Always Follow
- Functional components + hooks only
- USPGrid and Testimonials fetch their content from `GET /api/content` — do not import their JSON files directly, that's what satisfies the assignment's mandatory API-integration requirement
- Tailwind v4 CSS-native config — design tokens go in `app/globals.css` via `@theme`, never a JS config file
- Mobile-first classes; verify layout at 375px, 768px, and 1440px
- Build shared primitives once in Phase 1 (Container, SectionHeading, Card, Button) and reuse them in every section — don't duplicate markup per section

## Global Constraints — Never Do
- Do not add authentication, login, or session logic — out of scope
- Do not add a database or ORM — out of scope
- Do not add new npm dependencies without flagging them in your response
- Do not rename files under `/public` — later tasks reference them by their current names
- Do not build the lead-capture form (bonus/deferred — tracked as D.1, not part of the active plan)

## Key Utilities
None yet — this is a from-scratch project. No shared utility modules exist beyond the UI primitives listed above.

## Task Execution
Tasks follow a numbered plan (`TASKS.md`) and run in order. Each task has its own prompt. Complete and review each task before starting the next.

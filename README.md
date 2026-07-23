# Accredian Enterprise Landing Page Clone

A robust Next.js recreation of the Accredian Enterprise marketing page, built from scratch as a Full Stack Developer Intern take-home assignment.

- **Live Production URL:** [https://accredian-enterprise-landing-page-clone.vercel.app](https://accredian-enterprise-landing-page-clone.vercel.app)
- **GitHub Repository:** [https://github.com/MohammedJawad1920/accredian-enterprise-landing-page-clone](https://github.com/MohammedJawad1920/accredian-enterprise-landing-page-clone)

## Setup

To run this project locally, ensure you have **Node.js 24** installed. Execute the following commands in your terminal:

```bash
git clone https://github.com/MohammedJawad1920/accredian-enterprise-landing-page-clone.git
cd accredian-enterprise-landing-page-clone
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Approach

The architecture relies entirely on the Next.js App Router, combining reusable UI primitives (Container, Card, SectionHeading) into highly cohesive, responsive page sections. Styling is driven by the modern, CSS-native approach of Tailwind CSS v4, keeping configuration lightweight. To faithfully satisfy the assignment's API-integration requirement without over-engineering a database, the project utilizes a single mock Route Handler (`GET /api/content`). This local JSON-powered backend is consumed client-side by dynamic sections (like `USPGrid` and `Testimonials`), which elegantly handle asynchronous fetching alongside skeleton loaders and robust error fallback states.

## AI Usage

This project embraced an AI-assisted development workflow for high-velocity iteration and clean structuring. The foundational project requirements, component teardown, and strict architectural constraints were mapped out using Claude via a discovery-architecture-task-planning process. Following this rigid spec, an autonomous AI coding agent (Google Antigravity) systematically generated the code for each phase—from shared UI primitives and Tailwind v4 setup to API wiring, responsive layout auditing, and accessibility passes. While AI actively composed the code and solved layout challenges, the strict constraints and step-by-step task flow were carefully governed to ensure complete adherence to the project brief.

## Future Improvements

Given a broader scope and more time, the following enhancements would be prioritized to close the remaining gap with the live production site:

**Additional Content Sections**
- **Domain Expertise:** Implement the icon-card section highlighting industry domains.
- **Who Should Join:** Add the audience-segment banner.
- **CAT Framework:** Implement the 3-node conceptual flow section.
- **FAQ:** Add a collapsible accordion component for frequently asked questions.

**Component Upgrades**
- **Course Segmentation:** Refactor the current Program Categories concept into full segmentation cards.
- **Testimonial Carousel:** Upgrade the current static testimonials grid into an interactive sliding carousel.

**Features & Polish**
- **Lead Capture Form & Backend (Deferred Task D.1):** Implement the full lead-capture mechanism with server-side validation and database persistence.
- **Dark Mode Support:** Expand the Tailwind v4 CSS variables to support seamless light/dark mode toggling.

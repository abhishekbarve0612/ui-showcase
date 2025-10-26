# UI Showcase

Interactive gallery for exploring [`@abhishekbarve/components`](https://www.npmjs.com/package/@abhishekbarve/components). The site is built with Next.js 15 and React 19 and ships live code playgrounds so you can prototype with the component library without leaving the browser.

## Features

- Curated routes for core patterns: buttons, forms, layouts, navbars, sidebars, cards, accordions, breadcrumbs, toolbars, toggles, tooltips, modals, and chat interfaces
- Sandpack-powered editors that mirror the setup of a typical consumer app, including Tailwind CSS 4 configuration
- Light and dark themes with persisted preference via the component library's `ThemeProvider`
- Shared layout with responsive navigation and footer built entirely from library primitives

## Tech Stack

- Next.js 15 (App Router, Turbopack dev server)
- React 19
- [`@abhishekbarve/components`](https://www.npmjs.com/package/@abhishekbarve/components)
- Tailwind CSS 4
- [Sandpack](https://sandpack.codesandbox.io/) for interactive examples

## Getting Started

### Prerequisites

- Node.js 18.18+ or 20+
- [pnpm](https://pnpm.io/) 8+

### Installation

```bash
pnpm install
```

### Local Development

```bash
pnpm dev
```

Runs the Next.js dev server with Turbopack. The app is available at http://localhost:3000.

### Build & Preview

```bash
pnpm build
pnpm start
```

Generates the production bundle and starts a Node.js server for previewing the static output.

### Linting

```bash
pnpm lint
```

Executes the Next.js lint command (ESLint 9).

## Project Structure

- `app/page.tsx` – landing page that links to each demo route
- `app/<component>/page.tsx` – Sandpack-driven showcase for the named component family
- `client-components/` – client-only helpers such as the dark mode toggle and Sandpack wrapper
- `app/layout.tsx` – shared layout, navigation, footer, and theme provider setup
- `app/utils.ts` – helper utilities for the Sandpack Tailwind configuration

## Component Library

All UI primitives are imported from [`@abhishekbarve/components`](https://www.npmjs.com/package/@abhishekbarve/components). The showcase intentionally mirrors how you would consume the package in a standalone Next.js or React project, including theme management and global style imports.

## Deployment

Any platform that supports Next.js 15 (e.g. Vercel, Netlify, Cloudflare Pages) can host the site. Deployments must have Node.js 18.18+ and install dependencies with `pnpm install` before running `pnpm build`.

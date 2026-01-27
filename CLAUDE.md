# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

LuxeView - A luxury LED display marketing website built as a Single Page Application (SPA) using React 19, TypeScript 5.9, and Vite 7.

## Commands

```bash
# Development server (HMR enabled, default port 5173)
npm run dev

# Production build (TypeScript compilation + Vite bundling)
npm run build

# Preview production build locally
npm run preview

# Lint all TypeScript/TSX files
npm run lint
```

## Architecture

**Single-file component architecture**: The entire application lives in `src/App.tsx` with corresponding styles in `src/App.css` and global styles in `src/index.css`.

**Entry flow**: `index.html` → `src/main.tsx` → `src/App.tsx`

**Styling approach**: Plain CSS with CSS custom properties (variables) defined in `:root`. Animations and responsive breakpoints handled via media queries. No CSS framework or preprocessor.

## TypeScript Configuration

- **Strict mode enabled** with `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`
- **Target**: ES2022
- **JSX**: react-jsx (automatic runtime, no React import needed for JSX)
- **Module resolution**: bundler

## ESLint Configuration

Uses ESLint v9 flat config format with:
- TypeScript ESLint recommended rules
- React hooks plugin (enforces rules of hooks)
- React refresh plugin (ensures components are HMR-compatible)

## Key Dependencies

- React 19.2.0 / React DOM 19.2.0
- Vite 7.2.4 with @vitejs/plugin-react
- TypeScript ~5.9.3

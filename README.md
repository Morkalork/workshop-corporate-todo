# workshop-corporate-todo

A Node + TypeScript + React todo app, scaffolded with [Vite](https://vite.dev/).

## Features

- Add todos (empty or whitespace-only titles are ignored)
- Mark todos as done / not done
- Double-click a todo to rename it (Enter saves, Escape cancels)
- Delete todos, or clear all completed ones at once
- Filter by All / Active / Completed
- Todos are saved to `localStorage`, so they survive a page reload

## Project layout

- `src/types.ts`: the `Todo` and `Filter` types
- `src/useTodos.ts`: hook that owns the todo state and persists it
- `src/components/`: `TodoForm`, `TodoItem` and `TodoFilters`
- `src/App.tsx`: wires the hook and components together

## Getting started

```bash
npm install
npm run dev
```

Other scripts:

- `npm run build`: type-check and build for production
- `npm run lint`: lint with oxlint (braces are required on every block via the `curly` rule)
- `npm run preview`: serve the production build locally

## Claude Code skills

This project ships with project-level skills in `.claude/skills/`, taken from
[mattpocock/skills](https://github.com/mattpocock/skills) (MIT, see `.claude/skills/LICENSE-mattpocock-skills`):

- **grill-me**: type `/grill-me` to be interviewed relentlessly about a plan or design. It only runs when you invoke it.
- **grilling**: the interview procedure that `grill-me` delegates to. It must be installed alongside `grill-me`.

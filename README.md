# workshop-corporate-todo

A Node + TypeScript + React todo app, scaffolded with [Vite](https://vite.dev/).

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

# Repository Guidelines

## Project Structure & Module Organization
This repository is a React + Vite portfolio app. Application code lives in `src/`, with page-level views under `src/pages/`, shared UI in `src/components/`, layout pieces in `src/layout/`, routing in `src/router/`, and theme/context logic in `src/theme/` and `src/context/`. Static content is split between `src/assets/` for bundled assets and `public/` for files served as-is, including `public/locales/{en,es}/` translation JSON and project screenshots. Production output is generated in `dist/`.

## Build, Test, and Development Commands
- `npm install`: install project dependencies.
- `npm run dev`: start the Vite dev server on the network (`vite --host`).
- `npm run build`: create a production bundle in `dist/`.
- `npm run preview`: preview the production build locally.
- `npm run lint`: run ESLint across `.js` and `.jsx` files.

## Coding Style & Naming Conventions
Use ES modules, React function components, and JSX-only component files. Follow the existing style in `src/`: components, pages, hooks, and context files use PascalCase names such as `MyProjects.jsx` and `ThemeContext.jsx`; utility modules may use camelCase like `iconMap.jsx`. Use 2-space style for object/array literals and keep import groups compact. Prefer single quotes in JS/JSX unless a library import already uses double quotes. Run `npm run lint` before opening a PR; linting is configured in `eslint.config.js` with `eslint-plugin-react`, `react-hooks`, and `react-refresh`.

## Testing Guidelines
There is no automated test suite configured yet. For now, treat `npm run lint` and a successful `npm run build` as the minimum validation gate. When adding tests, place them next to the feature or in a local `__tests__/` folder and use names like `ComponentName.test.jsx`.

## Commit & Pull Request Guidelines
Recent history uses short, imperative commit messages such as `added netlify toml`, `updated vite conf`, and `added fix to translations`. Keep commits focused and descriptive, ideally `verb + scope` like `add dark theme toggle`. Pull requests should include a concise summary, screenshots or short recordings for UI changes, test/validation notes, and links to related issues when applicable.

## Configuration Notes
Deployment settings live in `netlify.toml`. Translation changes usually require updating both `public/locales/en/` and `public/locales/es/` to keep the portfolio consistent across languages.

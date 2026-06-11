# Contributing

Thanks for improving `vue3-ts-base`. This project is maintained as a Vue 3 + TypeScript starter, so changes should keep the template easy to clone, understand, and extend.

## Local Setup

Use Node.js 18 or newer and npm 10 or newer.

```bash
npm ci
npm run serve
```

The repository includes `.npmrc` so npm uses the public registry and the legacy peer dependency resolver required by the current Vue CLI 4 dependency graph.

## Validation

Run the full local check before opening a pull request:

```bash
npm run validate
```

For smaller checks:

```bash
npm run lint:ci
npm run test:unit
npm run build
```

## Pull Requests

- Keep changes scoped to one concern.
- Add or update tests for bug fixes and reusable utilities.
- Update `README.md` or inline examples when behavior changes.
- Use Conventional Commits, for example `fix(router): initialize layout mode from route meta`.

## Roadmap

The first maintenance pass focuses on reproducible install, CI, tests, documentation, and issue triage. Larger dependency upgrades, including a future Vite migration, should be handled in separate pull requests.

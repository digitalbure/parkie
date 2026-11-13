# Contributing

## Branches and pull requests
- `main` is protected: PR + passing CI + 1 approval required. No direct pushes.
- Branch names: `feat/…`, `fix/…`, `chore/…`, `docs/…`.
- Keep PRs small (ideally < 400 lines changed) and focused on one change.
- Fill in the PR template, including how it was tested.

## Commit messages – Conventional Commits
```
feat(functions): add pricing engine with time-of-day bands
fix(officer): keep offline queue after app restart
docs(adr): record parking-credit decision
```
Types: `feat`, `fix`, `docs`, `test`, `refactor`, `chore`, `perf`, `ci`, `build`.
Breaking changes: add `!` (`feat(api)!: …`) and a `BREAKING CHANGE:` footer.

## Versioning
- Semantic Versioning per deployable: driver, officer, admin, functions, partner-api, gate-agent.
- Tags: `<app>-vMAJOR.MINOR.PATCH` (e.g. `driver-v0.3.0`). 1.0.0 = commercial launch.
- Public API is versioned in the path (`/v1`). Breaking changes go in a new version.
- Data changes ship as migration scripts in `functions/migrations/`, run by CI – never by hand in the console.

## Definition of done
- Tests added/updated and passing; lint clean.
- Security rules updated and tested if data access changed.
- Docs/ADR updated if behaviour or architecture changed.
- `CHANGELOG.md` entry under *Unreleased*.

# CLAUDE.md – instructions for Claude Code (and humans)

## What this is
Parkie: a plate-first parking platform for Fiji. The full spec is
`docs/design/Smart-Parking-System-Concept-and-System-Design.pdf`. When the spec and code disagree,
stop and ask; do not silently diverge. Key decisions live in `docs/adr/`.

## Current phase
**Phase 0 – foundations** (see `docs/roadmap.md`). Do not build UI screens yet unless asked.
Next tasks in order:
1. Domain core in `functions/src/domain/`: pricing engine, enforcement policy engine,
   session state machine, notice state machine, entitlements (plans/modules). Pure TypeScript,
   no Firebase imports, 100% unit-tested.
2. Firestore data model + `firestore.rules` with emulator tests (tenant isolation by `operatorId`).
3. Then backend services (auth/roles, sessions, payments sandbox, Cloud Tasks reminders).

## Architecture rules (non-negotiable)
- **Identity is the number plate.** RFID tags are only a lookup key to a vehicle (phase 2).
- **Multi-tenant:** every operational record carries `operatorId`; rules and functions enforce it.
- **Money, enforcement and identity logic run server-side** (Cloud Functions). Clients never compute prices
  or change session/notice status directly.
- **Entitlements gate every module** server-side (functions + rules). UI hiding is not protection.
  Feature flags (Remote Config) are for rollout only, never for paid access.
- **Versioned business rules:** rate tables, policies and plans are versioned; sessions/notices store the
  version applied.
- **Idempotency:** every payment/callback handler is idempotent on `orderId`.
- **Append-only:** `auditLog` and credit `ledgerEntries` are never updated or deleted.
- **Offline-first apps:** never show "paid" until the server confirms.
- **Safety:** gate software must never lock exits shut because of billing state.
- **Region:** `australia-southeast1`.
- **No card data** touches our systems (hosted checkout + tokens only).

## Conventions
- TypeScript strict mode; ESLint + Prettier; tests with Vitest next to code (`*.test.ts`).
- Dart: `flutter analyze` clean, `dart format`.
- Money as integer cents (FJD) – never floats. Times stored as UTC; display in `Pacific/Fiji`.
- Plates normalised: uppercase, no spaces/dashes (`normalisePlate()`), original kept for display.
- Names: collections `camelCase` plural (`sessions`, `notices`); files `kebab-case.ts`.

## Git workflow
- Trunk-based. Branch from `main`: `feat/<short-name>`, `fix/<short-name>`, `chore/<short-name>`.
- **Conventional Commits** (`feat:`, `fix:`, `chore:`, `docs:`, `test:`, `refactor:`). Small PRs.
- Open a PR; CI must pass; a human approves. Never push directly to `main`.
- Releases: SemVer tags per app (`driver-v0.1.0`, `officer-v0.1.0`, `admin-v0.1.0`, `functions-v0.1.0`).

## Commands
```bash
cd functions && npm ci && npm test && npm run lint && npm run build
firebase emulators:start            # from repo root
./scripts/check-prereqs.sh          # verify local toolchain
```

## Ask before
- Adding any paid service, SDK or vendor.
- Changing anything in `docs/design/` or an accepted ADR (propose a new ADR instead).
- Touching `prod` configuration or secrets.

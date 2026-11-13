# Parkie

Plate-first, cashless parking platform for Fiji's private car parks and municipalities.
Drivers pay by number plate (M-PAiSA, MyCash, card), officers check cars with a phone camera (ANPR),
and car park owners configure rates, enforcement rules, passes and gates. RFID windscreen stickers
and boom gates are later, optional modules.

> Working name. Owner: digitalbure. Status: **Phase 0 – foundations**.

## Products

| App | Path | Stack | Users |
|---|---|---|---|
| Driver app | `apps/driver` | Flutter (Android, iOS, web PWA) | Drivers, fleet drivers |
| Officer app | `apps/officer` | Flutter (Android) | Parking officers, attendants, agents |
| Admin web | `apps/admin` | Next.js | Operator admin + Platform admin (role-based) |
| Backend | `functions` | Cloud Functions (TypeScript) | All |
| Partner API | `services/partner-api` | Cloud Run | Gates, councils, partners (phase 3) |
| Gate agent | `services/gate-agent` | On-site controller software | Gated car parks |

Shared code: `packages/ui` (Flutter design system), `packages/models` (Dart models).
Infrastructure: `infra/terraform`. Design and decisions: `docs/`.

## Start here

1. Read the design: [`docs/design/Smart-Parking-System-Concept-and-System-Design.pdf`](docs/design/Smart-Parking-System-Concept-and-System-Design.pdf)
2. Install prerequisites: [`docs/setup/prerequisites.md`](docs/setup/prerequisites.md), then run `./scripts/check-prereqs.sh`
3. Read [`CLAUDE.md`](CLAUDE.md) (conventions for humans and Claude Code) and [`CONTRIBUTING.md`](CONTRIBUTING.md)
4. Roadmap: [`docs/roadmap.md`](docs/roadmap.md)

## Quick commands

```bash
# Backend
cd functions && npm ci && npm test          # unit tests
npm run lint                                 # lint
firebase emulators:start                     # local Auth/Firestore/Functions/Storage (from repo root)
```

## Environments

| Alias | Firebase / GCP project | Deploys from |
|---|---|---|
| `dev` | `parkie-dev` | manual / feature work |
| `staging` | `parkie-staging` | every merge to `main` |
| `prod` | `parkie-prod` | tagged releases `vX.Y.Z` |

Project IDs are placeholders until the projects are created (see `.firebaserc`).

## License

Proprietary. © digitalbure. All rights reserved. See [`LICENSE`](LICENSE).

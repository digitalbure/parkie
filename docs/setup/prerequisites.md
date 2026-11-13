# Prerequisites

Run `./scripts/check-prereqs.sh` after installing to verify your machine.

## 1. Developer machine

| Tool | Version | Why | Install |
|---|---|---|---|
| Git | 2.40+ | Version control | https://git-scm.com |
| Node.js | 22 LTS (see `.nvmrc`) | Cloud Functions, admin web, Firebase CLI | https://nodejs.org or `nvm install` |
| Java JDK | 21 | Firebase emulators (Firestore) and Android builds | https://adoptium.net |
| Firebase CLI | latest | Emulators, deploys | `npm i -g firebase-tools` |
| Google Cloud CLI | latest | Projects, IAM, Cloud Run, KMS | https://cloud.google.com/sdk/docs/install |
| Flutter SDK | stable 3.x | Driver and Officer apps | https://docs.flutter.dev/get-started/install |
| Android Studio | latest | Android SDK, emulator, device builds | https://developer.android.com/studio |
| Xcode (macOS only) | latest | iOS builds of the Driver app (needed later) | Mac App Store |
| Terraform | 1.9+ | Infrastructure as code | https://developer.hashicorp.com/terraform/install |
| VS Code | latest | Editor (Flutter, Dart, ESLint, Prettier extensions) | https://code.visualstudio.com |
| Claude Code | latest | AI pair-programmer working in this repo | https://docs.claude.com/en/docs/claude-code |
| GitHub CLI (optional) | latest | PRs and releases from the terminal | https://cli.github.com |

**Hardware:** one Android phone (Android 10+, NFC preferred) for Officer app testing; a Mac only when iOS builds start.

## 2. Accounts and services (week 1)

| Item | Owner | Status |
|---|---|---|
| GitHub org `digitalbure`, repo `parkie` (private), branch protection on `main` | Jone | ☐ |
| Google Cloud organisation + billing account | Jone | ☐ |
| Firebase projects `parkie-dev`, `parkie-staging`, `parkie-prod` (region `australia-southeast1`) | Tech lead | ☐ |
| Blaze (pay-as-you-go) plan + budget alerts on each project | Jone | ☐ |
| Apple Developer Program (US$99/yr) | Jone | ☐ (before iOS testing) |
| Google Play Console (US$25 one-time) | Jone | ☐ |
| Domain + DNS (app, admin, api subdomains) | Jone | ☐ |
| Password manager for shared secrets | Jone | ☐ |
| M-PAiSA merchant + test environment request | Jone | ☐ |
| MyCash e-commerce API access | Jone | ☐ |
| Card gateway bank (internet payment gateway, hosted checkout) | Jone | ☐ |
| SMS gateways (primary + backup) | Tech lead | ☐ |
| KYC / liveness vendor shortlist | Tech lead | ☐ |
| RBF enquiry: parking credit structure | Jone | ☐ |
| Pilot car park letter of intent | Jone | ☐ |

## 3. First-time repo setup

```bash
git clone git@github.com:digitalbure/parkie.git && cd parkie
nvm use                       # Node 22
cd functions && npm ci && npm test && cd ..
firebase login
firebase use dev              # after parkie-dev exists
firebase emulators:start      # UI at http://localhost:4000
```

## 4. GitHub settings to apply once

- Settings → Branches → protect `main`: require PR, 1 approval, passing `CI` checks, linear history.
- Settings → Actions → allow GitHub Actions.
- Settings → Security → enable Dependabot alerts and secret scanning.
- Add repository secrets later (per environment): `FIREBASE_SERVICE_ACCOUNT_STAGING`, `FIREBASE_SERVICE_ACCOUNT_PROD` – use Workload Identity Federation in preference to key files.

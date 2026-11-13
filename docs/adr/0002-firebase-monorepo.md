# 0002 – Firebase / Google Cloud monorepo

**Status:** Accepted · **Date:** 2026-11-13

## Decision
- One GitHub monorepo (`digitalbure/parkie`) for all apps, backend, infrastructure and docs.
- Backend on Firebase / Google Cloud in `australia-southeast1`: Firestore, Cloud Functions (TypeScript),
  Cloud Tasks, Cloud Run, Cloud Storage, KMS, BigQuery.
- Mobile apps in Flutter; admin web in Next.js.
- Three projects: dev, staging, prod. Infrastructure in Terraform. CI on GitHub Actions.

## Why
Matches existing team skills and the default stack across our products; managed services keep ops small;
offline sync and real-time listeners come built in; one repo keeps spec, code and versions together.

## Consequences
Business logic shared between Dart apps and TypeScript backend is not code-shared: pricing and enforcement
run only on the server, so this is acceptable.

# 0004 – Modular plans and server-side entitlements

**Status:** Accepted · **Date:** 2026-11-13

## Decision
Every major feature is a module. Operators subscribe to a plan (Starter, Professional, Enterprise/Municipal)
plus add-ons. The Platform admin toggles modules per operator. A computed `entitlements` record per operator
is checked by **every Cloud Function and security rule**; apps only use it to show or hide UI.
Remote Config feature flags are kept separate and used only for technical rollout.

## Rules
- Limits are soft-enforced (warn at 80%, block new resources over the limit; never stop live activity).
- Upgrades apply immediately (prorated); downgrades at the next period.
- Non-payment: 14-day grace, then read-only admin. Gates are never locked shut for billing reasons.
- Every toggle change is written to the audit log.

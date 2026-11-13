# Roadmap

Week 1 = project start. Source: design doc §25. Live tracker: the "Project Timeline & Plan" sheet.

| Phase | Weeks | Scope | Gate |
|---|---|---|---|
| 0 Mobilise & discovery | 1–3 | Repo, environments, CI, domain core, wireframes, merchant applications, plate photo dataset | LOI signed, wireframes approved |
| 1 Core platform + Driver MVP | 3–8 | Data model, rules, pricing, sessions, reminders, signed QR pass; Driver app pay flow; identity check | Driver can pay end-to-end in staging |
| 2 Officer app + ANPR v1 | 6–11 | ANPR (ML Kit), status card, Book Now, Delayed Booking, evidence, offline | Full offline shift; ANPR ≥ 90% |
| 3 Operator & Platform admin | 9–13 | Zones, rates, policies, staff, notices, disputes, dashboards, plans/modules | Operator sets up a car park < 1 day |
| 4 Payments live, hardening, UAT | 12–16 | M-PAiSA, MyCash, card; translations; load + pen test; UAT | **G1 Pilot ready** |
| 5 Plate-only pilot | 16–24 | One private car park; KPIs weekly | **G2 Go/no-go** |
| 6 Commercial launch v1 | 24–32 | ANPR v2, more operators, USSD, parking credit (after RBF) | 3+ paying operators |
| 7a/b/c RFID | 20–42 | Evaluation + TAF, software, pilot | **G3 RFID value** |
| 8 Gated car parks, fleets, passes, partner API | 40–50 (candidate to move to 24–34) | Gate agent, boom gates, fleet accounts, deliveries | First gated site live |
| 9 Municipal scale-up | 48+ | Councils, by-laws, scan car | First council contract |

## Phase 0 task list (this repo)

- [x] Repo scaffold, CLAUDE.md, CONTRIBUTING, ADRs, CI, deny-all rules
- [ ] Create Firebase projects and replace IDs in `.firebaserc`
- [ ] Domain core: plate, money, pricing, policy, session/notice state machines, entitlements, gate decision
- [ ] Firestore data model doc + rules with emulator tests
- [ ] Terraform for the three projects (buckets, KMS keys, IAM, budgets)
- [ ] `flutter create` Driver and Officer apps with shared `packages/ui`
- [ ] Next.js admin scaffold with role-based areas
- [ ] Wireframes for all four apps (Figma or AI Studio prototypes)

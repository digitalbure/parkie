# Domain core (Phase 0 – next task)

Pure TypeScript business logic. **No Firebase imports here** – everything must be unit-testable in isolation.

| Module             | Spec section     | Notes                                                                                        |
| ------------------ | ---------------- | -------------------------------------------------------------------------------------------- |
| `plate.ts`         | 3A / 7.2         | `normalisePlate()`, Fiji plate-format validation                                             |
| `money.ts`         | –                | Integer cents (FJD), rounding rules                                                          |
| `pricing/`         | 8 (rate builder) | Per-hour/part-hour, min/max stay, time-of-day bands, free period, daily cap, vehicle classes |
| `policy/`          | 10.3             | Versioned enforcement parameters, defaults                                                   |
| `session-state.ts` | 10.1             | ACTIVE → EXPIRING → EXPIRED → GRACE …, pure transition function                              |
| `notice-state.ts`  | 10.2             | ISSUED → PAID / DISPUTED / ESCALATED / VOID …, pure transition function                      |
| `entitlements/`    | 2.2              | Plans, modules, limits; `hasModule(operator, module)`                                        |
| `gate-decision.ts` | 8.1 / 23.1       | Block list → exemption → pass → credit → pay at exit                                         |

Every transition and price calculation needs table-driven tests covering the edge cases in Section 10.4.

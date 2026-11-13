# 0003 – Parking credit instead of a general wallet

**Status:** Proposed – pending Reserve Bank of Fiji position · **Date:** 2026-11-13

## Context
A prepaid balance usable across many operators may count as e-money under the National Payment System
Act 2021, which requires a payment service provider licence.

## Decision (proposed)
Offer **parking credit**: usable only for parking on the platform, non-transferable, not cashable, funds held
in a bank trust account, with an append-only ledger. In parallel, ask Vodafone (M-PAiSA) and Digicel (MyCash)
about pre-authorised debits as a no-stored-value alternative. Do not build until the RBF responds in writing.

## Consequences
Phase 1 charges per session only. The data model reserves `creditAccounts` and `ledgerEntries`.

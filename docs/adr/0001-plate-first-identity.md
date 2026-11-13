# 0001 – Plate-first vehicle identity

**Status:** Accepted · **Date:** 2026-11-13

## Context
The original concept relied on an RFID windscreen sticker. Requiring a purchased sticker slows adoption,
phones cannot read UHF tags, and cars without stickers must still be enforceable.

## Decision
The number plate is the vehicle's identity. Sessions, payments, notices, passes and gate events are keyed to
the normalised plate. Officers identify cars by on-device ANPR with mandatory confirmation. RFID stickers
(phase 2) and gate readers are optional lookup keys that resolve to the same vehicle record.

## Consequences
- No hardware needed for the pilot; drivers join with nothing to buy.
- ANPR accuracy and plate-ownership verification (LTA certificate + identity check) become critical.
- Copied plates are a known risk, mitigated by "seen in two places" detection and later RFID.

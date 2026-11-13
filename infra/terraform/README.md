# Infrastructure (Terraform)

One workspace per environment: `dev`, `staging`, `prod` (region `australia-southeast1`).
Phase 0 scope: projects/APIs, Firestore, buckets (incl. locked identity-media bucket with CMEK),
KMS keys (QR pass signing, CMEK), service accounts + IAM, Cloud Tasks queues, budget alerts.
State stored in a GCS bucket per environment. Never commit `*.tfvars` or state.

#!/usr/bin/env bash
# Verifies the local toolchain for Parkie development.
set -u
ok=0; missing=0
check() {
  local name="$1" cmd="$2"
  if command -v "$cmd" >/dev/null 2>&1; then
    printf "  ✔ %-16s %s\n" "$name" "$($cmd --version 2>&1 | head -n1)"
    ok=$((ok+1))
  else
    printf "  ✘ %-16s not found\n" "$name"
    missing=$((missing+1))
  fi
}
echo "Parkie prerequisites"
check "git" git
check "node" node
check "npm" npm
check "java" java
check "firebase" firebase
check "gcloud" gcloud
check "flutter" flutter
check "terraform" terraform
check "gh (optional)" gh
check "claude" claude
echo
if [ "$missing" -eq 0 ]; then echo "All tools found."; else echo "$missing tool(s) missing – see docs/setup/prerequisites.md"; fi

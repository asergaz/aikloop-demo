---
title: "Handle webhooks"
weight: 5
group: "Docs"
summary: "Verify the AIKloop-Signature header with HMAC-SHA256 and a timestamp"
---

AIKloop sends events to your endpoint. Each request has a `AIKloop-Signature` header, for example `t=1791830400,v1=<hex digest>`. To verify it:

1. Take `t` (a Unix timestamp) and the raw request body.
2. Compute HMAC-SHA256 of `"{t}.{raw_body}"` with your webhook signing secret (`whsec_...`).
3. Compare the result with `v1` using a constant-time comparison.
4. Reject the event if `t` is more than 5 minutes old, to block replays.

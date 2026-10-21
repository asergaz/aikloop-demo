---
title: "Refund a payment"
weight: 3
group: "Docs"
summary: "Refund all or part of a payment with POST /v3/refunds"
---

To refund a payment, send a `POST` request to `/v3/refunds`, with the fields form-encoded, not as JSON. Leave out `amount_minor` to refund the full amount.

```bash
curl https://api.aikloop.example/v3/refunds \
  -H "Authorization: Bearer $AIKLOOP_SECRET_KEY" \
  -H "Idempotency-Key: 1c1f7d8a-4bd8-4f6b-9a3e-0b8f2f6c1d22" \
  -d payment_id=pay_123 -d amount_minor=500
```

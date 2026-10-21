---
title: "Getting started"
weight: 1
group: "Docs"
summary: "Authenticate with a Bearer token and make your first v3 payment"
---

Get your secret API key from the dashboard.

Send it as a Bearer token in the `Authorization` header. Never put it in the URL.

Send the request fields form-encoded (`application/x-www-form-urlencoded`), not as JSON. `curl -d` does this for you.

```bash
curl https://api.aikloop.example/v3/payments \
  -H "Authorization: Bearer $AIKLOOP_SECRET_KEY" \
  -H "Idempotency-Key: 8e03978e-40d5-43e8-bc93-6894a57f9324" \
  -d amount_minor=1050 -d currency=eur -d payment_method=pm_123
```

That's it! You've created your first payment. Next, read [Accept a payment](../accept-a-payment/) and [Handle webhooks](../webhooks/).

---
title: "Accept a payment"
weight: 2
group: "Docs"
summary: "Create a payment with amounts in minor units, a required currency and an idempotency key"
---

## Create the payment

Send a `POST` request to `/v3/payments`:

| Parameter | Description |
| --- | --- |
| `amount_minor` | Required. Integer amount in the currency's minor unit. 10.50 EUR is `1050`. |
| `currency` | Required. Three-letter ISO code, lowercase. There's no default. |
| `payment_method` | Required. Payment method ID from AIKloop.js, for example `pm_123`. |

```bash
curl https://api.aikloop.example/v3/payments \
  -H "Authorization: Bearer $AIKLOOP_SECRET_KEY" \
  -H "Idempotency-Key: 8e03978e-40d5-43e8-bc93-6894a57f9324" \
  -d amount_minor=1050 -d currency=eur -d payment_method=pm_123
```

## If something goes wrong

If a request times out, retry it **with the same `Idempotency-Key`**. AIKloop returns the original result instead of creating a second payment. Keys are kept for 24 hours.

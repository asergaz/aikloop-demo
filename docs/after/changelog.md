---
title: "Changelog"
weight: 6
group: "Docs"
summary: "What changed in each release, with an old-versus-new table for v3"
---

## v3.0 (2026-03-02)

| Area | v1 / v2 (deprecated) | v3 (current) |
| --- | --- | --- |
| Authentication | `?api_key=` in the URL | `Authorization: Bearer sk_...` header |
| Create | `POST /v2/charges` | `POST /v3/payments` |
| Amount | `amount` as a decimal string, `"10.50"` | `amount_minor` as an integer, `1050` |
| Currency | Optional, defaults to `usd` | Required, no default |
| Refunds | `POST /v2/charges/{id}/refund` | `POST /v3/refunds` with `payment_id` |
| Pagination | `page`, `per_page` | `limit`, `starting_after` |
| Retries | Resend the request | Resend with the same `Idempotency-Key` |
| Webhooks | `X-AIKloop-Signature`, HMAC-SHA1 | `AIKloop-Signature`, HMAC-SHA256 with timestamp |

## v2.0 (2024-05-14)

`/v2/charges` replaced `/v1/charges`.

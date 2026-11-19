---
title: "List payments"
weight: 4
group: "Docs"
summary: "Cursor pagination with limit and starting_after"
---

Use `limit` (1 to 100) and `starting_after` to go through your payments. Keep requesting with `starting_after` set to the last ID until `has_more` is `false`.

```bash
curl "https://api.aikloop.example/v3/payments?limit=100&starting_after=pay_123" \
  -H "Authorization: Bearer $AIKLOOP_SECRET_KEY"
```

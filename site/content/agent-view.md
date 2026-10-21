---
title: "What the agent sees"
layout: "agent-view"
outputs: ["HTML"]
pairs:
  - label: "The front door"
    page: "_index"
    note: "Both docs homes say the same thing to a human. The \"after\" version also has llms.txt: a few lines telling an agent which version is current, what not to use, and where each page lives, as Markdown."
    llms: true
  - label: "Getting started"
    page: "getting-started"
    note: "The old docs were never updated for v3. They put the API key in the URL and call a v1 endpoint, and nothing says they're out of date. The updated docs don't mention the old way either, and they don't need to: llms.txt has already told the agent that v3 is current and not to use /v1 endpoints or query-string API keys. That matters when the agent has seen the old pattern elsewhere, in its training data or an old blog post."
  - label: "Accept a payment, and retry it"
    page: "accept-a-payment"
    note: "The stale page uses a decimal amount, a default currency and tells you to resend a request that timed out, which can charge a customer twice."
  - label: "Handle webhooks"
    page: "webhooks"
    note: "The stale page describes HMAC-SHA1 and a header that no longer exists."
  - label: "API reference: Payments"
    page: "reference/payments"
    note: "Both references come from the same OpenAPI spec, and both pages link to it. In \"before\", the reference itself is drawn in the browser by JavaScript, so an agent reading the page gets a loading message and has to download and work through the whole spec. In \"after\", the page for each topic is generated when the site is built, as HTML and short Markdown, and llms.txt lists the spec too."
---

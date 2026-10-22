---
title: "What the agent sees, and what it does"
layout: "agent-view"
outputs: ["HTML"]
pairs:
  - label: "The front door"
    page: "_index"
    note: "Both docs homes say the same thing to a human. The \"after\" version also has llms.txt: a few lines telling an agent which version is current, what not to use, and where each page lives, as Markdown. In the tests, agents opened it in 5 of 42 \"after\" answers. It helps the agents that find it, but the updated pages are what fixed the answers."
    llms: true
  - label: "Getting started"
    page: "getting-started"
    note: "The old docs were never updated for v3. They put the API key in the URL and call a v1 endpoint, and nothing says they're out of date. Haiku followed them: two of its three \"before\" answers to the authentication question put the key in the URL, and the API refused them. The updated docs show the current way and don't mention the old one."
  - label: "Accept a payment, and retry it"
    page: "accept-a-payment"
    note: "The stale page uses an endpoint the API no longer has, a decimal amount and a default currency, and tells you to resend a request that timed out, which can charge a customer twice. Five of Haiku's \"before\" answers called that old endpoint, and the API answered 404."
  - label: "Handle webhooks"
    page: "webhooks"
    note: "The stale page describes HMAC-SHA1 and a header that no longer exists. One of Haiku's \"before\" answers followed it, and its code rejected every genuine event. A real integration built from it would ignore every event AIKloop sends."
  - label: "API reference: Payments"
    page: "reference/payments"
    note: "Both references come from the same OpenAPI spec, and both pages link to it. In \"before\", the reference itself is drawn in the browser by JavaScript, so an agent reading the page gets a loading message and has to download and work through the whole spec. In the tests, every \"before\" answer from Opus did that, which is why its code worked and why each answer cost more. In \"after\", the page for each topic is generated when the site is built, as HTML and short Markdown, and llms.txt lists the spec too."
---

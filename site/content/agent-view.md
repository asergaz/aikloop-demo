---
title: "What the agent sees, and what it does"
layout: "agent-view"
outputs: ["HTML"]
# Added to the sentence under a model's score tiles, checked by reading the transcripts.
model_notes:
  - model: "claude-opus-5-5"
    note: "One answer still came out wrong."
    chart: "The one wrong answer came from a summary of the spec that left out a detail."
# Explanations for rows of the "What went wrong" table, checked by reading the answer's transcript.
failure_notes:
  - model: "claude-opus-5-5"
    question: 4
    note: "It read the API spec, which says so. But Claude Code doesn't hand the agent the page itself: a smaller model reads it and answers the agent's question. Its summary listed every field and left out that the body must be form-encoded, so the agent guessed JSON."
pairs:
  - label: "The front door"
    page: "_index"
    note: "Both docs homes say the same thing to a human. The \"after\" version also has llms.txt: a few lines telling an agent which version is current, what not to use, and where each page lives, as Markdown. In the tests, agents opened it to help with some of the answers."
    llms: true
  - label: "Getting started"
    page: "getting-started"
    note: "The \"before\" docs were never updated for v3. They put the API key in the URL and call a v1 endpoint, and nothing says they're out of date. Haiku followed them: two of its answers put the key in the URL, and the API refused them."
  - label: "Accept a payment, and retry it"
    page: "accept-a-payment"
    note: "The \"before\" page uses an endpoint the API no longer has, a decimal amount and a default currency, and tells you to resend a request that timed out, which can charge a customer twice. Five of Haiku's answers called that old endpoint, and the API answered 404."
  - label: "Handle webhooks"
    page: "webhooks"
    note: "The \"before\" page describes HMAC-SHA1 and a header that no longer exists. One of Haiku's answers followed it, and its code rejected every genuine event. A real integration built from it would ignore every event AIKloop sends."
  - label: "API reference: Payments"
    page: "reference/payments"
    note: "Both references come from the same OpenAPI spec, and both pages link to it. In \"before\", the reference itself is drawn in the browser by JavaScript, so an agent reading the page gets a loading message and has to download and work through the whole spec. In the tests, every \"before\" answer from Opus did that, which is why its code worked and why each answer cost more. In \"after\", the page for each topic is generated when the site is built, as HTML and short Markdown, and llms.txt lists the spec too."
---

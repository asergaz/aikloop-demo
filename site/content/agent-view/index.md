---
title: "What the agent sees, and what it does"
description: "Seven coding tasks, run by AI agents against both versions of the docs: what each agent read, what its code did, and what it cost."
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
    note: |-
      The agent never saw the spec itself, only an answer about it, and that step is [lossy by design](https://code.claude.com/docs/en/tools-reference#webfetch-tool-behavior). Opus 5.5 asked for the whole spec, and "form-encoded" got lost.

      **And Haiku 5.5?** It asked only about refunds, so its answers kept "form-encoded".
pairs:
  - label: "The front door"
    page: "_index"
    note: "Both docs homes say the same thing to a human. The **After** version also has llms.txt with few lines telling an agent which version is current, what not to use, and where each page lives. In [some of the prompts](#all-the-numbers), the agent opened it to help with the answers."
    llms: true
  - label: "Getting started"
    page: "getting-started"
    note: "The **Before** docs were never updated for v3. They put the API key in the URL and call a v1 endpoint, and nothing says they're out of date. Haiku 5.5 followed the guidance from the docs, adding the key in the URL that led the API to refuse the request."
  - label: "Accept a payment, and retry it"
    page: "accept-a-payment"
    note: "The **Before** page uses an endpoint the API no longer has, a decimal amount and a default currency, and tells you to resend a request that timed out, which can charge a customer twice. Five of the Haiku 5.5 answers called that old endpoint, and the API answered 404."
  - label: "Handle webhooks"
    page: "webhooks"
    note: "The **Before** page describes HMAC-SHA1 and a header that no longer exists. One of the Haiku 5.5 answers followed it, and its code rejected every genuine event. A real integration built from it would ignore every event AIKloop sends."
  - label: "API reference: Payments"
    page: "reference/payments"
    note: "Both references come from the same OpenAPI spec, and both pages link to it. In **Before**, the reference itself is drawn in the browser by JavaScript, so an agent reading the page gets a loading message and has to download and work through the whole spec. In **Before** docs, every answer from Opus 5.5 opened the spec, which is why its code worked and why each answer cost more. In **After**, the page for each topic is generated when the site is built, as HTML and short Markdown, and llms.txt lists the spec so the agent can consult it when needed."
---

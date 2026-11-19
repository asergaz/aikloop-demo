<a href="https://asergaz.com"><img src="site/static/favicon.svg" alt="asergaz" width="72"></a>

I'm António Sérgio Azevedo. I help teams with content, prompt and context engineering, so their docs work for humans and AI agents alike, and with AI strategy for IoT & Edge AI solutions. The Knowledge Loop is how I keep docs current with every release.

More at **[asergaz.com](https://asergaz.com)**.

# AIKloop demo

The public part of the Knowledge Loop demo: the docs of "AIKloop Payments", a fictional API, in two versions, and the demo pages that compare them. Published at <https://aikloopdemo.asergaz.com/>.

This repository is published from the private repository `aikloop-private`, where the work happens: the tests that keep the docs current, the next release's spec and the instructions Claude follows.

## What's published

| Address | What it is |
| --- | --- |
| `/` | The demo: the top bar (Overview, Before, After, What the agent sees, Docs tests) and the overview page. |
| `/before/` | The "before" docs, as a clean site of their own: legacy HTML pages, never updated after v3, an API reference drawn by JavaScript, and `openapi.json`. No Markdown, no `llms.txt`, no demo bar. |
| `/after/` | The "after" docs, as a clean site of their own: updated for v3, every page also as Markdown, `llms.txt` and `openapi.json`. The docs after the Knowledge Loop. |
| `/agent-view/` | What an agent gets from each version of a page. |
| `/docs-tests/` | The docs tests results, against the current release and the incoming one. |

The demo opens Before and After in a new tab. Neither docs site links to the other or back into the demo, and there's nothing for agents at the root of the site, so you and clients can point an AI tool at one version and ask it questions as if it were a company's real docs.

## What's in this repository

| Folder | Who owns it | What it is |
| --- | --- | --- |
| `docs/` | The docs team | `before/` (legacy HTML), `after/` (the docs as code), and `specs/` (the released OpenAPI specs). See `docs/README.md`. |
| `site/` | Whoever runs the website | The Hugo engine: templates, styles and the demo pages. It reads everything else from `../docs/`. See `site/README.md`. |

## Run it locally

```powershell
cd site
hugo server --port 1314
```

Then open <http://localhost:1314>.

## License

MIT: anyone can reuse, change and share this repository, keeping the copyright notice. See [LICENSE](LICENSE). The asergaz name and logo aren't covered: reuse the demo, but don't present it as asergaz's.

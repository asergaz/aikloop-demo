# AIKloop demo

The public part of the Knowledge Loop demo: the docs of "AIKloop Payments", a fictional API, in two versions, and the demo pages that compare them. Published with GitHub Pages.

This repository is published from the private repository `aikloop-private`, where the work happens: there, it's the `aikloop-demo/` folder, next to the tests that keep the docs current, the next release's spec and the instructions Claude follows. A release reaches this repository only when it ships. That's how it works for a client too: their docs are public, and the Knowledge Loop runs privately around them.

## What's published

| Address | What it is |
| --- | --- |
| `/` | The demo: the top bar (Overview, Before, After, What the agent sees, Docs tests) and the overview page. |
| `/before/` | The "before" docs, as a clean site of their own: legacy HTML pages, never updated after v3, an API reference drawn by JavaScript, and `openapi.json`. No Markdown, no `llms.txt`, no demo bar. |
| `/after/` | The "after" docs, as a clean site of their own: updated for v3, every page also as Markdown, `llms.txt` and `openapi.json`. No demo bar. |
| `/agent-view/` | What an agent gets from each version of a page. |
| `/docs-tests/` | The docs tests results, against the current release and the incoming one. |

The demo opens Before and After in a new tab. Neither docs site links to the other or back into the demo, and there's nothing for agents at the root of the site, so you and clients can point an AI tool at one version and ask it questions as if it were a company's real docs.

## What's in this repository

| Folder | Who owns it | What it is |
| --- | --- | --- |
| `docs/` | The docs team | `before/` (legacy HTML), `after/` (the docs as code), `specs/` (the released OpenAPI specs) and `test-results.json` (written by the private tests). See `docs/README.md`. |
| `site/` | Whoever runs the website | The Hugo engine: templates, styles and the demo pages. It reads everything else from `../docs/`. See `site/README.md`. |
| `.github/workflows/pages.yml` | | Builds the site and publishes it on GitHub Pages on every push to `main`. |

## Run it locally

```powershell
cd site
hugo server --port 1314
```

Then open <http://localhost:1314>.

## Publish it

1. Create the public GitHub repository `aikloop-demo`, empty.
2. From the private repository, push this folder to it as the root: `git subtree push --prefix=aikloop-demo public main` (see "Set up" in the private repository's `README.md`).
3. In this repository: Settings → Pages → Source: "GitHub Actions".
4. Every later push to `main` publishes the site. It's live a minute or two later at the address shown in Settings → Pages, for example `https://asergaz.github.io/aikloop-demo/`.

Don't edit this repository directly: changes come from the private repository, and the next push from there would conflict with them.

No domain is needed. A custom domain can be added later in Settings → Pages.

# Knowledge Loop demo site

The site engine of the Knowledge Loop demo: a small Hugo site that publishes the docs of "AIKloop Payments", a fictional API. The docs themselves are in `../docs/`, which the docs team owns. This folder only holds the templates, the styles and the demo's own pages, and reads the docs through mounts in `hugo.toml`.

The site has three parts:

- **The demo** (`/`, `/agent-view/`, `/docs-tests/`): the pages with the top bar. Before and After open in a new tab.
- **The "before" docs site** (`/before/`): clean, with no demo bar.
- **The "after" docs site** (`/after/`): clean, with no demo bar.

| Section | What it is | Where it comes from |
| --- | --- | --- |
| Overview | The demo home page | `layouts/index.html` |
| Before | The legacy docs: HTML pages, never updated after v3, with an API reference drawn by JavaScript, and `openapi.json`. No Markdown, no `llms.txt`. Each file holds only the page content; `content/before/_content.gotmpl` adds them as pages with the same frame as "after". | `../docs/before/`, `content/before/` |
| After | The docs as code, updated for v3. The site renders each page as HTML and as Markdown, generates the API reference from the spec, and builds `llms.txt` from the table of contents, plus `openapi.json`. | `../docs/after/`, `../docs/specs/` |
| What the agent sees | Each "before" page as an agent gets it (HTML with tags removed, scripts not run), next to what the "after" version gives it | `content/agent-view.md`, `layouts/_default/agent-view.html` |
| Docs tests | The docs tested against the current release's spec and the incoming one, and the steps the docs team takes when a release arrives | `layouts/_default/doctests.html`, results from `../docs/test-results.json` |

How the docs sites stay clean:

- `layouts/_default/baseof.html` shows the demo bar only on pages that aren't docs pages.
- The docs pages link only within their own site. The test badge on each "after" page is plain text, not a link into the demo.
- `llms.txt` and the Markdown copies exist only under `/after/`. Each docs site has its own `openapi.json`, set by the `outputs` in `content/before/_index.md` and `../docs/after/_index.md`. Nothing for agents sits at the root.
- All links go through `relURL` or `absURL` without a leading slash, so the site works under a sub-address such as `https://asergaz.github.io/aikloop-demo/`.

The API reference comes from the current release's spec: the newest file in `../docs/specs/`. `layouts/partials/current-spec.html` picks it, `layouts/partials/reference-data.html` reads it for the reference pages, and `layouts/_default/list.openapi.json` publishes it unchanged in each docs site.

In the "after" version, the sidebar, the Markdown copies (`/after/<page>/index.md`) and `/after/llms.txt` all come from `../docs/after/`. Add a page there and it appears in all three.

## Run it

```powershell
cd site
hugo server --port 1314
```

Then open <http://localhost:1314>.

## Docs tests

The test results are written by the tests in the private `aikloop-private` repository, not by hand. After you change a docs page or a spec, run `python tests\run_doc_tests.py` there and reload the site.

## The public folder

`hugo server` doesn't use `public/`. If you run `hugo` to build, use `hugo --cleanDestinationDir` so pages from older versions of the demo are removed.

## Publish it

The GitHub Pages workflow (`../.github/workflows/pages.yml`) builds the site and passes the published address as `baseURL`, so you don't need to edit it. See `../README.md`.

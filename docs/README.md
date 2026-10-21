# AIKloop docs

The docs of "AIKloop Payments", the fictional API of the Knowledge Loop demo. The docs team owns this folder. The site that publishes it is in `../site/` and only reads from here.

| Path | What it is |
| --- | --- |
| `before/` | The legacy docs: HTML pages, never kept as code. The docs were never updated after v3, and the API reference is drawn by JavaScript. Each file holds only the page content; the site adds the page frame around it and publishes them at `/before/`. Never tested or edited. |
| `after/` | The docs as code: one Markdown page per topic, updated for v3. The site publishes them at `/after/` as HTML pages, Markdown copies and `llms.txt`, and generates the API reference pages listed in `after/reference/` from the spec. |
| `specs/` | The OpenAPI spec of each release, as the API's build produces it. The newest is the current release. Both docs sites publish it as `openapi.json`. |
| `test-results.json` | The latest docs tests results. Written by the tests in the private `aikloop-private` repository, not by hand. |

The next release's spec isn't here: it's not public until the release ships. It waits in the private repository, where the tests run against it.

## A new release, step by step

1. The release's spec arrives in the private repository, in `specs/incoming/`.
2. The tests there list what it breaks in these docs, with the file and line.
3. Claude drafts the fix, and a pull request with it opens in the private repository. A human reviews and merges it.
4. The spec moves into `specs/` here, and the docs are published to the public repository. The site publishes the release with its docs.

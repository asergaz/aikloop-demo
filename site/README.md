# Knowledge Loop demo site

A small Hugo site that publishes the demo and the docs of "AIKloop Payments", a fictional API. The docs are in `../docs/`; this folder holds the templates, the styles and the demo's own pages.

- **The demo:** Overview (`layouts/index.html`), What the agent sees (`content/agent-view/`) and Docs tests (`content/docs-tests/`). The agent tests and docs tests in `aikloop-private` write their results here.
- **Before** (`/before/`): the legacy docs, from `../docs/before/`.
- **After** (`/after/`): the docs as code, from `../docs/after/`, with Markdown copies and `llms.txt`.

Both docs sites publish the current spec, the newest file in `../docs/specs/`, as `openapi.json`. Neither links back to the demo.

Run it with `hugo server --port 1314`, then open <http://localhost:1314>.

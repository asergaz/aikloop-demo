// Draws the API reference in the browser. It downloads the OpenAPI spec from the page's
// "Download openapi.json" link and shows the endpoints of the tag named in data-ref.
(function () {
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text) e.textContent = text; return e; }
  function table(head, rows) {
    var t = el("table"), tr = el("tr");
    head.forEach(function (h) { tr.appendChild(el("th", null, h)); }); t.appendChild(tr);
    rows.forEach(function (r) {
      var row = el("tr");
      r.forEach(function (c, i) { var td = el("td"); if (i === 0) td.appendChild(el("code", null, c)); else td.textContent = c; row.appendChild(td); });
      t.appendChild(row);
    });
    return t;
  }
  // One operation as {method, path, summary, params, headers}: header parameters apart,
  // then the other parameters and the form fields, required fields first.
  function endpoint(method, path, op) {
    var params = [], headers = [];
    (op.parameters || []).forEach(function (p) {
      if (p.in === "header") headers.push({ name: p.name, description: p.description });
      else params.push({ name: p.name, type: p.schema && p.schema.type, description: p.description });
    });
    var form = op.requestBody && op.requestBody.content && op.requestBody.content["application/x-www-form-urlencoded"];
    if (form) {
      var props = form.schema.properties || {}, required = form.schema.required || [];
      required.forEach(function (n) { if (props[n]) params.push({ name: n, type: props[n].type, description: props[n].description }); });
      Object.keys(props).sort().forEach(function (n) { if (required.indexOf(n) < 0) params.push({ name: n, type: props[n].type, description: props[n].description }); });
    }
    return { method: method, path: path, summary: op.summary, params: params, headers: headers };
  }
  function endpoints(spec, tag) {
    var list = [];
    Object.keys(spec.paths || {}).sort().forEach(function (path) {
      ["post", "get", "put", "patch", "delete"].forEach(function (m) {
        var op = spec.paths[path][m];
        if (op && (op.tags || []).indexOf(tag) >= 0) list.push(endpoint(m.toUpperCase(), path, op));
      });
    });
    Object.keys(spec.webhooks || {}).sort().forEach(function (name) {
      var op = spec.webhooks[name].post;
      if (op && (op.tags || []).indexOf(tag) >= 0) list.push(endpoint("EVENT", name, op));
    });
    return list;
  }
  function render(app, spec) {
    var tag = (spec.tags || []).filter(function (t) { return t.name.toLowerCase() === app.getAttribute("data-ref"); })[0];
    if (!tag) return;
    app.textContent = "";
    var base = el("p"); base.appendChild(document.createTextNode("Base URL: ")); base.appendChild(el("code", null, spec.servers[0].url)); app.appendChild(base);
    app.appendChild(el("p", null, spec.info.description));
    endpoints(spec, tag.name).forEach(function (ep) {
      var h = el("h2"); h.appendChild(el("span", "method", ep.method)); h.appendChild(document.createTextNode(" " + ep.path)); app.appendChild(h);
      app.appendChild(el("p", null, ep.summary));
      if (ep.params.length) app.appendChild(table(["Field", "Type", "Description"], ep.params.map(function (p) { return [p.name, p.type, p.description]; })));
      if (ep.headers.length) app.appendChild(table(["Header", "Description"], ep.headers.map(function (h) { return [h.name, h.description]; })));
    });
  }
  function load() {
    var app = document.getElementById("app"), link = document.querySelector(".spec-link a");
    if (!app || !link) return;
    fetch(link.href)
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function (spec) { render(app, spec); })
      .catch(function () { app.textContent = "Couldn't load the API reference."; });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", load); else load();
})();

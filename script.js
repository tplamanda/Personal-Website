/* You do not need to edit this file. Edit content.js instead. */
(function () {
  var S = window.SITE;
  var $ = function (id) { return document.getElementById(id); };

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  }
  function link(text, href) {
    var a = el("a", "", text);
    a.href = href;
    if (/^https?:/i.test(href)) { a.target = "_blank"; a.rel = "noopener"; }
    return a;
  }

  document.title = S.name + " | Portfolio";
  $("brand").textContent = S.name;
  $("foot-name").textContent = S.name;
  $("hero-title").textContent = S.headline;
  $("hero-intro").textContent = S.intro;

  /* Projects */
  var grid = $("project-grid");
  S.projects.forEach(function (p, i) {
    var card = el("article", "card");
    var thumb;
    if (p.image) {
      thumb = el("div", "thumb img");
      var img = el("img");
      img.src = p.image;
      img.alt = p.title + " screenshot";
      img.loading = "lazy";
      thumb.appendChild(img);
    } else {
      thumb = el("div", "thumb t" + (i % 4), (p.title || "?").charAt(0));
      thumb.setAttribute("aria-hidden", "true");
    }
    var body = el("div", "card-body");
    body.appendChild(el("h3", "", p.title));
    body.appendChild(el("p", "", p.description));
    if (p.tags && p.tags.length) {
      var tags = el("ul", "tags");
      p.tags.forEach(function (t) { tags.appendChild(el("li", "", t)); });
      body.appendChild(tags);
    }
    if (p.demo || p.code) {
      var links = el("div", "links");
      if (p.demo) links.appendChild(link("Live demo", p.demo));
      if (p.code) links.appendChild(link("Code", p.code));
      body.appendChild(links);
    }
    card.appendChild(thumb);
    card.appendChild(body);
    grid.appendChild(card);
  });

  /* Resume */
  var R = S.resume;
  $("resume-heading").textContent = R.heading;
  $("resume-summary").textContent = R.summary;
  R.experience.forEach(function (j) {
    var d = el("div", "job");
    var head = el("div");
    head.appendChild(el("strong", "", j.role));
    head.appendChild(document.createTextNode(", " + j.company));
    d.appendChild(head);
    if (j.period) d.appendChild(el("span", "period", j.period));
    if (j.note) d.appendChild(el("p", "", j.note));
    $("experience").appendChild(d);
  });
  R.education.forEach(function (e) { $("education").appendChild(el("li", "", e)); });
  R.skills.forEach(function (s) { $("skills").appendChild(el("li", "", s)); });
  $("request-heading").textContent = R.requestHeading;
  $("request-text").textContent = R.requestText;

  /* Footer links */
  var fl = $("foot-links");
  if (S.email) fl.appendChild(link("Email", "mailto:" + S.email));
  if (S.github) fl.appendChild(link("GitHub", S.github));
  if (S.linkedin) fl.appendChild(link("LinkedIn", S.linkedin));

  /* Request resume form */
  var form = $("request-form"), status = $("form-status"), btn = $("form-btn");
  function say(msg, cls) { status.textContent = msg; status.className = "status " + (cls || ""); }

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var name = form.elements.name.value.trim();
    var email = form.elements.email.value.trim();
    if (!name) { say("Enter your name.", "err"); form.elements.name.focus(); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { say("Enter a valid email address.", "err"); form.elements.email.focus(); return; }
    if (!S.formKey || S.formKey.indexOf("PASTE") === 0) { say("The request form is not set up yet.", "err"); return; }

    btn.disabled = true; btn.textContent = "Sending…"; say("");
    var data = {
      access_key: S.formKey,
      subject: "Resume request from your portfolio",
      from_name: name,
      name: name,
      email: email,
      company: form.elements.company.value.trim(),
      botcheck: ""
    };
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(data)
    })
      .then(function (r) { return r.json(); })
      .then(function (j) {
        if (!j.success) throw new Error(j.message || "failed");
        form.reset();
        say("Thanks. Your request has been sent.", "ok");
      })
      .catch(function () {
        say("Your request did not send. Email " + S.email + " directly.", "err");
      })
      .then(function () { btn.disabled = false; btn.textContent = "Request resume"; });
  });
})();

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

  var locationList = $("location-list");
  [
    ["Current", S.location.current],
    ["Origin", S.location.origin],
  ].forEach(function (item) {
    locationList.appendChild(el("dt", "", item[0]));
    locationList.appendChild(el("dd", "", item[1]));
  });
  var aimingFor = document.createElement("dd");
  S.location.aimingFor.forEach(function (place) {
    aimingFor.appendChild(el("span", "location-destination", place));
  });
  locationList.appendChild(el("dt", "", "Aiming for"));
  locationList.appendChild(aimingFor);

  function factIcon(type) {
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 64 64");
    svg.setAttribute("class", "fact-icon");
    svg.setAttribute("aria-hidden", "true");

    function shape(tag, attributes) {
      var node = document.createElementNS(svg.namespaceURI, tag);
      Object.keys(attributes).forEach(function (name) {
        node.setAttribute(name, attributes[name]);
      });
      svg.appendChild(node);
    }

    if (type === "flower") {
      [[32, 12], [48, 24], [42, 43], [22, 43], [16, 24]].forEach(function (point) {
        shape("circle", { cx: point[0], cy: point[1], r: 12, class: "flower-petal" });
      });
      shape("circle", { cx: 32, cy: 29, r: 12, class: "flower-petal" });
    } else {
      shape("path", { d: "M8 28 9 8l16 11q7-3 14 0L55 8l1 20c2 17-8 30-24 30S6 45 8 28Z", class: "cat-shape" });
    }
    return svg;
  }

  var factCards = $("fact-cards");
  S.funFacts.forEach(function (fact, index) {
    var item = el("li");
    var card = el("button", "fact-card");
    card.type = "button";
    card.setAttribute("aria-pressed", "false");
    card.setAttribute("aria-label", "Fun fact: " + fact + " Activate to flip card.");

    var inner = el("span", "fact-card-inner");
    var front = el("span", "fact-face fact-front");
    front.appendChild(factIcon(index % 2 === 0 ? "flower" : "cat"));
    front.appendChild(el("span", "fact-front-label", "Flip to reveal"));
    var back = el("span", "fact-face fact-back", fact);
    back.setAttribute("aria-hidden", "true");
    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);
    card.addEventListener("click", function () {
      var flipped = card.classList.toggle("is-flipped");
      card.setAttribute("aria-pressed", String(flipped));
    });
    item.appendChild(card);
    factCards.appendChild(item);
  });

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
  var fl = $("top-links");
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

(() => {
  "use strict";

  /* ============================================================
     I18N · LEAD Forge
     Default language: Spanish (content of the HTML).
     This module swaps to English and back.
     ============================================================ */

  const STORAGE_KEY = "leadforge-lang";
  const DEFAULT_LANG = "es";

  /* -------- English strings (Spanish lives in the markup) -------- */
  const EN = {
    "nav.build": "Build",
    "nav.forge": "The Forge",
    "nav.events": "Events",
    "nav.projects": "Projects",
    "nav.community": "Community",
    "nav.cta": "Join LEAD Forge →",

    "hero.code": "university innovation & technology club",
    "hero.tag": 'Build what\'s next<span class="accent-dot">.</span>',
    "hero.lede":
      "The open space at <strong>LEAD University</strong> for students who want to <em>build</em>, <em>experiment</em> and <em>connect</em> around technology and innovation.",
    "hero.ctaPrimary": "Join LEAD Forge →",
    "hero.ctaSecondary": "Explore Projects",

    "keys.k1": "BUILD",
    "keys.k2": "EXPERIMENT",
    "keys.k3": "SHIP",
    "keys.k4": "CONNECT",

    "build.index": "01 · WHAT WE BUILD",
    "build.title": "Disciplines we forge in",
    "build.sub": "Five tracks, one club. Pick a lane · or blend them all.",
    "build.t1": "AI",
    "build.t1d": "LLMs, agents, computer vision and applied machine learning.",
    "build.t2": "DATA",
    "build.t2d": "Analytics, data pipelines and visualizations that tell the real story.",
    "build.t3": "SOFTWARE",
    "build.t3d": "Full-stack engineering, open source and products that ship.",
    "build.t4": "INNOVATION",
    "build.t4d": "Design sprints, new concepts and R&D-style experiments.",
    "build.t5": "ENTREPRENEURSHIP",
    "build.t5d": "Builders who turn prototypes into startups and real ventures.",

    "forge.index": "02 · THE FORGE",
    "forge.title": "The philosophy",
    "forge.quote":
      'Ideas are cheap.<br /><span class="accent-text">Building is the forge.</span>',
    "forge.p":
      "LEAD Forge is not just a club to attend talks. It is a place to create <strong>real projects</strong>, learn by doing and turn raw ideas into working prototypes · with a team, mentors and results.",
    "forge.term1": "load idea --unfiltered",
    "forge.term2": "build prototype ",
    "forge.term2a": "→ done",
    "forge.term3": "test with real users",
    "forge.term4": "ship ",
    "forge.term4a": "→ to the world",
    "forge.term5": "connect + repeat ",
    "forge.btn": "Start building →",

    "about.index": "THE CLUB",
    "about.title": "More than a club. A space to grow.",
    "about.sub":
      "LEAD Forge is where students from every major at LEAD University meet to build technology that matters · and grow a portfolio, a network and a mindset that outlasts the campus.",

    "events.index": "03 · EVENTS & CALENDAR",
    "events.title": "The quarter's calendar",
    "events.sub":
      "Three main milestones, one global hackathon and an ecosystem of activities running all quarter long.",
    "events.mSep": "SEP",
    "events.mOct": "OCT",
    "events.mNov": "NOV",
    "events.mDec": "DEC",
    "events.e1tag": 'SAT 12 · SEP <span class="accent-text">●</span> KICKOFF',
    "events.e1name": "Lighting de Forge",
    "events.e1more": "Learn more →",
    "events.e1desc":
      "Official club kickoff: welcome, founding team, year vision and coffee & networking.",
    "objects.e1":
      "<li>Welcome and intro to LEAD Forge</li><li>Intro to the organizing team</li><li>Exclusive founding-member pin</li><li>Coffee & networking</li>",
    "events.e2tag": 'SAT 17 · OCT <span class="accent-text">●</span> HACKATHON',
    "events.e2name": "ForgeHack / NASA Space Apps",
    "events.e2more": "Learn more →",
    "events.e2desc":
      "Our first hackathon: multidisciplinary teams with a direct path to the NASA Space Apps Challenge 2026.",
    "objects.e2":
      "<li>Multidisciplinary team formation</li><li>Ideation sessions and technical mentorship</li><li>Project development along the period</li><li>Final run at NASA Space Apps · Nov 14–15</li>",
    "events.e3tag": 'FRI 04 · DEC <span class="accent-text">●</span> TALK',
    "events.e3name": "Spark Session",
    "events.e3more": "Learn more →",
    "events.e3desc":
      "Closing talk with tech industry professionals to end the year with momentum.",
    "objects.e3":
      "<li>Inspiring talk by one or two guests</li><li>Real-world trends and experiences</li><li>Quarter-end closing networking</li>",

    "evpage.index": "03 · EVENTS & CALENDAR",
    "evpage.title": "Events & calendar",
    "evpage.sub":
      "Discover LEAD Forge's upcoming hackathons, workshops, talks and activities, along with their dates and how to join.",
    "evpage.calNov": "NASA Space Apps Challenge",
    "evpage.period": "18–31 · ForgeHack · build period",
    "evpage.period2": "01–13 · ForgeHack · build period",
    "evpage.ecosysTitle": "Activity types",
    "evpage.explore": "Explore the club",

    "news.index": "NEWS",
    "news.title": "Club news",
    "news.sub":
      "Announcements, coverage and updates around every event and activity, from the newest to the oldest.",
    "news.t": "COMING SOON",
    "news.c1n": "Event coverage",
    "news.c1d":
      "Photos, recaps and the best moments from each activity, published shortly after every event.",
    "news.c2n": "Club announcements",
    "news.c2d": "Call for entries, date changes and official LEAD Forge news, always up to date.",
    "news.c3n": "External opportunities",
    "news.c3d": "Global hackathons, scholarships and industry challenges worth sharing with the community.",
    "news.c4n": "Member spotlight",
    "news.c4d": "The community's work on display: projects, wins and profiles of the people building the club.",
    "news.c5n": "Collaborations",
    "news.c5d": "Partnerships with industry and with Costa Rica's tech community to open doors and resources.",
    "news.c6n": "Event gallery",
    "news.c6d": "A visual tour of every activity: what we lived, what we built and what's next.",
    "news.read": "Older news ↓",
    "news.end": "// no more news for now",
    "evpage.past": "Past events →",
    "footer.past": "Past events",

    "past.index": "ARCHIVE",
    "past.title": "Past events",
    "past.sub":
      "The club's history, record by record: every event that happens will be documented here, with coverage, photos and results.",
    "past.code": "// history.arch · empty",
    "past.emptyT": "The archive is taking shape",
    "past.emptyD":
      "There are no past events yet: the club's first generation kicks off with the Lighting de Forge. Once an event ends, its full record will show up here.",
    "past.row": "No event yet",
    "past.back": "← Back to events",

    "ecosys.index": "03 · CLUB ECOSYSTEM",
    "ecosys.title": "Club activities",
    "ecosys.sub":
      "Five activity types, each with its own identity. This is how LEAD Forge lives.",
    "ecosys.c1t": "Talks",
    "ecosys.c1n": "Spark Sessions",
    "ecosys.c1d":
      "Conferences with industry professionals that bring the real world and current trends closer.",
    "ecosys.c2t": "Workshops",
    "ecosys.c2n": "Forge Labs",
    "ecosys.c2d": "Hands-on sessions on AI, cloud and modern software where you learn by doing.",
    "ecosys.c3t": "Networking",
    "ecosys.c3n": "Ignite & Connect",
    "ecosys.c3d":
      "Spaces to meet, form teams and build your network, both inside and outside the club.",
    "ecosys.c4t": "Hackathons",
    "ecosys.c4n": "ForgeHack",
    "ecosys.c4d":
      "Intense competitions where ideas become working demos in just a few hours.",
    "ecosys.c5t": "Demo showcases",
    "ecosys.c5n": "Demo Days",
    "ecosys.c5d":
      "An open showcase of members' projects to celebrate and share what was built.",

    "projects.index": "04 · PROJECTS",
    "projects.title": "Projects in the forge",
    "projects.sub":
      "Members' projects will be published here. This is your space to build the first one.",
    "projects.note": "// your ideas have a reserved slot. forge the first one.",

    "community.index": "05 · COMMUNITY",
    "community.title":
      'Different minds.<br />One single team<span class="accent-dot">.</span>',
    "community.sub":
      "LEAD Forge is a network, not just an organization. It connects students from different majors and interests to collaborate on real technology projects.",
    "members.1role": "DATA SCIENCE & AI ARCHITECT · FOUNDER OF LEAD FORGE",
    "members.1name": "Diego Díaz Montero",
    "members.1bio":
      "Data Science & AI Architect from Heredia, 19, studying a B.S. in Data Science & AI at LEAD University. Founder of NTK Solutions and co-founder of MIMIC, building data, AI and automation solutions.",
    "members.2role": "DATA SCIENCE ENGINEERING · CO-FOUNDER OF LEAD FORGE",
    "members.2name": "Julián Maroto",
    "members.2bio":
      "Data Science Engineering student and co-founder of LEAD Forge. Passionate about applied AI and Python: international hackathons, Azure AI certifications and LLM tools.",

    "join.code": "be part of the change",
    "join.title": 'Join LEAD Forge<span class="accent-dot">.</span>',
    "join.sub":
      "Tell us what you want to build. We'll bring the fire, the tools and the people.",
    "join.primary": "Join LEAD Forge →",
    "join.secondary": "Contact",

    "status.univ": "University: LEAD University",
    "status.loc": "Location: Costa Rica",
    "status.members": "Members:",

    "footer.name": "LEAD Forge",
    "footer.tagline":
      "University Innovation & Technology Club<br />LEAD University · Costa Rica",
    "footer.explore": "Explore",
    "footer.follow": "Follow us",
    "footer.join": "Join →",
    "footer.sig": "BUILT BY STUDENTS · FOR THE NEXT GENERATION",

    "socials.back": "← leadforgecr.com",
    "socials.web": "LEAD Forge website",
    "socials.soon": "community · coming soon",
    "socials.soon2": "channel · coming soon",
    "socials.note": "@lead_forge_cr · LEAD University · Costa Rica",

    /* head / meta */
    "meta.title": "LEAD Forge · Build what's next. | University Innovation & Technology Club",
    "meta.desc":
      "LEAD Forge is the innovation & technology club of LEAD University. An open space for students to build, experiment, ship and connect around AI, data, software, innovation and entrepreneurship.",
    "meta.ogdesc":
      "The university innovation & technology club of LEAD University. Build, experiment, ship and connect with peers.",
    "meta.twdesc":
      "The university innovation & technology club of LEAD University. AI · Data · Software · Innovation · Entrepreneurship.",
  };

  const SPANISH_META = {
    title: document.title,
    desc: document.querySelector('meta[name="description"]').content,
    ogdesc: document.querySelector('meta[property="og:description"]').content,
    twdesc: document.querySelector('meta[name="twitter:description"]').content,
  };

  /* -------- dynamic value from config.js (solo el número de miembros) -------- */
  function renderConfig() {
    const cfg = window.SITE_CONFIG;
    if (!cfg) return;
    const members = document.getElementById("membersCount");
    if (members) members.textContent = cfg.members !== undefined ? cfg.members : "-";

    const statMap = {
      statSpark: "sparkSessions",
      statLabs: "forgeLabs",
      statIgnite: "igniteConnect",
      statHack: "forgeHack",
      statDemo: "demoDays",
    };
    Object.entries(statMap).forEach(([id, key]) => {
      const el = document.getElementById(id);
      if (el) el.textContent = cfg[key] !== undefined ? cfg[key] : 0;
    });
  }

  const els = Array.from(document.querySelectorAll("[data-i18n]"));
  els.forEach((el) => {
    if (!el.dataset.original) el.dataset.original = el.innerHTML;
  });

  function applyMeta(lang) {
    const isEs = lang === "es";
    document.documentElement.lang = lang;
    document.title = isEs ? SPANISH_META.title : EN["meta.title"];
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", isEs ? SPANISH_META.desc : EN["meta.desc"]);
    document
      .querySelector('meta[property="og:description"]')
      .setAttribute("content", isEs ? SPANISH_META.ogdesc : EN["meta.ogdesc"]);
    document
      .querySelector('meta[property="og:title"]')
      .setAttribute("content", isEs ? SPANISH_META.title : EN["meta.title"]);
    document
      .querySelector('meta[name="twitter:description"]')
      .setAttribute("content", isEs ? SPANISH_META.twdesc : EN["meta.twdesc"]);
    document
      .querySelector('meta[name="twitter:title"]')
      .setAttribute("content", isEs ? SPANISH_META.title : EN["meta.title"]);
  }

  function applyLang(lang) {
    const isEs = lang === "es";
    els.forEach((el) => {
      if (isEs) {
        el.innerHTML = el.dataset.original;
      } else {
        const t = EN[el.dataset.i18n];
        if (t !== undefined) el.innerHTML = t;
      }
    });
    applyMeta(lang);
    renderConfig(lang);

    document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.lang === lang);
    });
  }

  /* -------- switcher -------- */
  document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      localStorage.setItem(STORAGE_KEY, lang);
      applyLang(lang);
    });
  });

  /* -------- init -------- */
  const saved = localStorage.getItem(STORAGE_KEY);
  const initial = saved === "en" || saved === "es" ? saved : DEFAULT_LANG;
  applyLang(initial);
})();
(() => {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ============================================================
     NAVIGATION
     ============================================================ */
  const nav = document.getElementById("nav");
  if (nav) {
    const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* Mobile toggle */
  const toggle = document.getElementById("navToggle");
  const navLinks = document.querySelector(".nav__links");
  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      const open = toggle.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      navLinks.classList.toggle("open", open);
      document.body.classList.toggle("no-scroll", open);
    });
    navLinks.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        toggle.classList.remove("open");
        navLinks.classList.remove("open");
        document.body.classList.remove("no-scroll");
      })
    );
  }

  /* ============================================================
     REVEAL ON SCROLL
     ============================================================ */
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach((el) => {
    const delay = el.dataset.delay || 0;
    el.style.setProperty("--d", delay);
  });

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    reveals.forEach((el) => el.classList.add("in"));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  }

  /* ============================================================
     MESH DOT NETWORK (canvas)
     interactive, minimal: drifting nodes + proximity lines
     ============================================================ */
  function initMesh(canvas) {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w = 0,
      h = 0;
    let dots = [];
    const mouse = { x: -9999, y: -9999 };
    const ACCENT = "#FF6B1A";
    const DOT = "237,237,234";
    const LINE_ACCENT = "255,107,26";
    const LINK = 130;
    let raf = 0;

    function dpr() {
      return Math.min(window.devicePixelRatio || 1, 2);
    }

    function resize() {
      const rect = canvas.getBoundingClientRect();
      const nw = rect.width;
      const nh = rect.height;
      if (nw === 0 || nh === 0) return;
      const scale = dpr();
      canvas.width = Math.round(nw * scale);
      canvas.height = Math.round(nh * scale);
      ctx.setTransform(scale, 0, 0, scale, 0, 0);

      const count = Math.max(34, Math.min(90, Math.floor((nw * nh) / 16000)));
      if (dots.length === count) {
        // keep existing dots, rescale positions instead of re-seeding
        if (w > 0 && h > 0) {
          const sx = nw / w;
          const sy = nh / h;
          for (const d of dots) {
            d.x *= sx;
            d.y *= sy;
          }
        }
      } else {
        dots = Array.from({ length: count }, () => ({
          x: Math.random() * nw,
          y: Math.random() * nh,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          r: Math.random() < 0.28 ? Math.random() * 2 + 1.6 : Math.random() * 1 + 0.4,
          accent: Math.random() < 0.24,
        }));
      }
      w = nw;
      h = nh;
    }

    function step() {
      ctx.clearRect(0, 0, w, h);

      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;

        // gentle attraction toward the cursor
        const dx = mouse.x - d.x;
        const dy = mouse.y - d.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 220 && dist > 0.01) {
          const pull = (220 - dist) / 220 * 0.16;
          d.x += dx / dist * pull;
          d.y += dy / dist * pull;
        }

        // wrap edges
        if (d.x < -20) d.x = w + 20;
        if (d.x > w + 20) d.x = -20;
        if (d.y < -20) d.y = h + 20;
        if (d.y > h + 20) d.y = -20;
      }

      // node dots
      for (const d of dots) {
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = d.accent
          ? ACCENT
          : (dist2(mouse, d) < 140 ? `rgba(${LINE_ACCENT},0.9)` : `rgba(${DOT},0.5)`);
        ctx.globalAlpha = d.accent ? 0.95 : 0.45;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      // proximity lines
      for (let i = 0; i < dots.length; i++) {
        for (let k = i + 1; k < dots.length; k++) {
          const a = dots[i];
          const b = dots[k];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d > LINK) continue;
          const t = 1 - d / LINK;
          const nearMouse =
            dist2(mouse, a) < 160 || dist2(mouse, b) < 160;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = nearMouse
            ? `rgba(${LINE_ACCENT},${t * 0.5})`
            : `rgba(${DOT},${t * 0.22})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      raf = requestAnimationFrame(step);
    }

    function dist2(p1, p2) {
      const dx = p1.x - p2.x;
      const dy = p1.y - p2.y;
      return dx * dx + dy * dy;
    }

    function onMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }
    function onLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    canvas.addEventListener("pointermove", onMove, { passive: true });
    canvas.addEventListener("pointerleave", onLeave);

    let resizeTimer = 0;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        resize();
        if (prefersReducedMotion) {
          step();
          cancelAnimationFrame(raf);
        }
      }, 120);
    };
    window.addEventListener("resize", onResize);

    resize();

    if (prefersReducedMotion) {
      // static render, no animation loop
      step();
      cancelAnimationFrame(raf);
      return;
    }

    step();
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
    };
  }

  const meshHero = initMesh(document.getElementById("meshHero"));
  const meshCommunity = initMesh(document.getElementById("meshCommunity"));
  const meshSocials = initMesh(document.getElementById("meshSocials"));

  /* ============================================================
     MEMBERS CAROUSEL (community)
     ============================================================ */
  const membersTrack = document.getElementById("membersTrack");
  if (membersTrack) {
    const slides = Array.from(membersTrack.children);
    const N = slides.length;
    slides.forEach((s) => membersTrack.appendChild(s.cloneNode(true)));

    const root = document.getElementById("members");
    const prev = document.getElementById("membersPrev");
    const next = document.getElementById("membersNext");
    let idx = 0;
    let perView = 3;
    let timer = null;
    let manual = false;

    const step = () => 100 / perView;

    const goTo = (i) => {
      idx = i;
      membersTrack.style.transition = "none";
      membersTrack.style.transform = `translateX(-${idx * step()}%)`;
    };

    const move = (dir) => {
      if (idx >= N) goTo(0);
      membersTrack.style.transition = "";
      membersTrack.style.transform = `translateX(-${(idx + dir) * step()}%)`;
      idx += dir;
      if (idx === N) setTimeout(() => goTo(0), 620);
    };

    const onResize = () => {
      perView = window.innerWidth <= 760 ? 1 : 3;
      goTo(idx >= N ? 0 : idx);
    };
    onResize();
    window.addEventListener("resize", onResize);

    const pause = () => {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    };
    const resume = () => {
      if (!timer && !manual && !prefersReducedMotion) {
        timer = setInterval(() => move(1), 2600);
      }
    };

    prev.addEventListener("click", () => {
      manual = true;
      pause();
      move(-1);
    });
    next.addEventListener("click", () => {
      manual = true;
      pause();
      move(1);
    });
    root.addEventListener("mouseenter", pause);
    root.addEventListener("mouseleave", resume);
    resume();
  }

  /* ============================================================
     HERO PARALLAX (subtle, pointer based)
     ============================================================ */
  const heroInner = document.querySelector(".hero__inner");
  if (heroInner && !prefersReducedMotion && window.matchMedia("(pointer: fine)").matches) {
    let tx = 0,
      ty = 0,
      cx = 0,
      cy = 0;
    window.addEventListener("pointermove", (e) => {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      tx = nx * 12;
      ty = ny * 12;
    });
    (function rail() {
      cx += (tx - cx) * 0.05;
      cy += (ty - cy) * 0.05;
      heroInner.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      requestAnimationFrame(rail);
    })();
  }
})();
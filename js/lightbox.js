(() => {
  "use strict";

  const overlay = document.createElement("div");
  overlay.className = "lb-overlay";
  overlay.innerHTML =
    '<button class="lb-close" aria-label="Cerrar">&times;</button><img class="lb-img" alt="" />';
  document.body.appendChild(overlay);

  const img = overlay.querySelector(".lb-img");
  const close = () => {
    overlay.classList.remove("open");
    document.body.classList.remove("no-scroll");
  };

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay || e.target.classList.contains("lb-close")) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  document.querySelectorAll("[data-lightbox]").forEach((el) => {
    el.addEventListener("click", () => {
      img.src = el.getAttribute("src");
      img.alt = el.getAttribute("alt") || "";
      overlay.classList.add("open");
      document.body.classList.add("no-scroll");
    });
  });
})();
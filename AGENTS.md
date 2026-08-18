# AGENTS.md

Guidance for working on this project. Read this before making changes.

## What this is

Landing page (100% static: HTML + CSS + JS, no server, no build step, no framework)
of **LEAD Forge** · the university innovation & technology club of LEAD University
(Costa Rica). Goal: tell university members what LEAD Forge is and show its
quality and magnitude.

Open `index.html` in a browser to preview. There is no test/lint/build command.

## Structure

- `index.html` · all sections (content in Spanish, the default language)
- `css/style.css` · full design system
- `js/main.js` · mesh dot canvas (hero + community), reveal on scroll, nav, mobile menu, parallax
- `js/i18n.js` · language switcher. HTML is Spanish; it swaps to English and back
- `config.js` · datos del club (número de miembros y contadores por tipo de
  actividad). Se muestran en la barra de estado (`.statusbar`) y en las stats de
  "The Club". Los reescribe automáticamente un GitHub Action (ver "Datos del club
  (GitHub Secrets)"); también se pueden editar a mano.
- `assets/img/*.svg` · generated placeholder images (brand aesthetic, no stock photos)
- `assets/img/projects/*.svg` · project slots (placeholders only)
- `assets/favicon.svg` · favicon
- `LOGO LEAD FORGE.png`, `LEAD Forge BANNER.png` · real club assets (also referenced in OG metadata)

## Brand system

- Background (base): `#21211F` · NOT pure black, keep it warm/dark gray
- Accent: LEAD orange `#FF6B1A` (use sparingly: CTAs, highlights, nodes, hovers)
- Text: off-white `#EDEDEA`; muted `#A9A9A2`; dim `#71716B`
- Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (technical labels)
- Aesthetic: minimal, laboratory/engineering. Mesh dots + thin grid lines are the
  visual signature. White space, micro-interactions, technical details.
- Avoid: gradients overdose, clichés (robot AI, stock photos, generic startup look).

## Language / i18n

- **Default language: Spanish (`lang="es"`)**.
- Language switch lives in the nav (`.lang-switch`), persisted in `localStorage`.
- To translate a text: add `data-i18n="some.key"` to the element (the markup stays
  in Spanish) and add the English string in `EN[...]` inside `js/i18n.js`.
- New page-level strings must not be duplicated; use existing keys via the same pattern.

## Events calendar (Cuatrimestre III 2026) · dates are tentative

1. **Lighting de Forge** · kickoff. Tentative: Sep 12 (Sábado). Welcome, founding
   team, club vision, exclusive founding-member pin, coffee & networking.
2. **ForgeHack / NASA Space Apps** (hackathon, antes "Crucible Incubator") · starts Oct 17 (Sábado),
   period mid-Oct → mid-Nov. Teams build for several weeks and culminate at the
   **NASA Space Apps Challenge 2026** (Nov 14–15). Ideation, intros to the global
   event, technical mentoring.
3. **Spark Session** · closing talk. Tentative: Dec 4 (Viernes). Guest speaker(s)
   from industry. Possible guests: Cursor Ambassador, Google/Developer Community
   (GDG) Ambassador, IBM Z Ambassador, CIHUBS.

### Event ecosystem (official names)

| Type | Name |
| --- | --- |
| Talks (Charlas) | Spark Sessions |
| Workshops (Talleres) | Forge Labs |
| Networking | Ignite & Connect |
| Hackathons (Hackatones) | ForgeHack |
| Demo showcases (Exhibición de demos) | Demo Days |

## Datos del club (GitHub Secrets)

Los contadores se cambian fácilmente desde el teléfono sin tocar el código:

1. En el repo de GitHub → Settings → Secrets and variables → Actions → **New repository secret**
   por cada valor que quieras actualizar (solo crea los que necesites):
   - `MEMBERS_COUNT` → Miembros (barra de estado)
   - `SPARK_SESSIONS` → stat Spark Sessions
   - `FORGE_LABS` → stat Forge Labs
   - `IGNITE_CONNECT` → stat Ignite & Connect
   - `FORGEHACK` → stat ForgeHack
   - `DEMO_DAYS` → stat Demo Days
2. Ejecuta la acción **"Actualizar datos del club"** (Actions → Run workflow),
   también desde la app/web de GitHub en el móvil.
3. El workflow (`.github/workflows/site-data.yml`) lee los secrets, reescribe
   `config.js` vía `.github/scripts/set_site_data.py` y hace push; el sitio se actualiza
   tras el deploy (GH Pages u otro). También corre cada 6 h por `cron`.

Nota: los secrets vacíos o no numéricos no cambian nada. Editar `config.js` a mano
sigue funcionando para desarrollo local.

## Projects section

The club has **no shipped projects yet**. Grid "04 · PROYECTOS" must stay as
placeholders only: generic slots (`SLOT 01..06`), no fictional names,
descriptions or tags. Replace when real member projects exist.

## Conventions

- Do not add code comments unless asked.
- Follow existing naming (BEM-ish: `.section__head`, `.event__bullets`, …).
- Keep base background and fonts from `:root` in `css/style.css`.
- Mesh-dot canvases already exist (`#meshHero`, `#meshCommunity`); reuse, do not duplicate.
- When editing `index.html`, keep `data-i18n` keys coherent with `js/i18n.js`.
- **Do NOT use the em dash "—" (U+2014) anywhere** in the code or content. Use `·`, `,`, `-` or `|` instead.

## Temporal state

- **LinkedIn está oculto**: la tarjeta de LinkedIn en `socials.html` está marcada con el atributo `hidden` (con `data-i18n-skip` para que el switcher no la toque). No se muestra en la página hasta nuevo aviso; no eliminar la tarjeta, solo quitar el `hidden` cuando se quiera publicar de nuevo.
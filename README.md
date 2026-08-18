# LEAD Forge · Landing Page

![LEAD Forge BANNER](./LEAD%20Forge%20BANNER.png)

Landing page oficial de **LEAD Forge**, el club universitario de innovación y tecnología de **LEAD University** (Costa Rica).

Un espacio donde estudiantes de todas las carreras construyen, experimentan y conectan alrededor de la tecnología: AI, data, software, innovación y emprendimiento.

> 100% estático: HTML + CSS + JavaScript. Sin servidor, sin build, sin framework.

---

## ✨ Qué incluye

- **Hero con mesh interactivo**: red de nodos que reacciona al cursor, la firma visual del club.
- **La forja**: la filosofía de "construir para aprender" con terminal estilo ingeniería.
- **Ecosistema del club**: Spark Sessions (talks), Forge Labs (workshops), Ignite & Connect (networking), ForgeHack (hackathons) y Demo Days (showcases).
- **Calendario real**: eventos del cuatrimestre III 2026 con calendarios mensuales interactivos y tarjetas por evento.
- **Miembros destacados**: carrusel de perfiles del equipo fundador con auto-scroll, pausa en hover y control manual.
- **Proyectos**: grid placeholder reservado para los primeros proyectos reales de los miembros.
- **Comunidad**: perfiles y perfil de miembros, con espacio para nuevos rostros.
- **Página de redes (linktree)**: todos los canales oficiales en una sola vista mobile-first.

## 🌐 Redes oficiales

| Canal | Enlace |
| --- | --- |
| Instagram | [@lead_forge_cr](https://www.instagram.com/lead_forge_cr) |
| LinkedIn | [lead-forge-cr](https://www.linkedin.com/company/lead-forge-cr/) |
| Discord | [discord.gg/ySFarmbRd](https://discord.gg/ySFarmbRd) |
| GitHub | [@LEAD-FORGE](https://github.com/LEAD-FORGE) |
| WhatsApp | próximamente |

## 🛠️ Stack

- **HTML5** semántico + **CSS3** con variables y design system propio
- **JavaScript vanilla** (sin dependencias, solo Google Fonts)
- **Canvas API** para el efecto mesh (nodos + líneas de proximidad)
- **i18n** integrado: español por defecto, inglés vía `localStorage`

## 🎨 Design system

| Token | Valor |
| --- | --- |
| Fondo base | `#21211F` (no negro puro, gris cálido) |
| Acento | LEAD orange `#FF6B1A` |
| Texto | `#EDEDEA` / muted `#A9A9A2` / dim `#71716B` |
| Display | Space Grotesk |
| Cuerpo | Inter |
| Técnico | JetBrains Mono |

Estética minimalista de laboratorio: mesh dots + retícula fina, microinteracciones y espacio en blanco.

## 🚀 Desarrollo local

No hay build ni instalación:

```bash
# abre en el navegador
start index.html
```

Valida sintaxis de JS:

```bash
node --check js/main.js
node --check js/i18n.js
```

## 🌍 Traducciones (i18n)

- El HTML vive en **español** (idioma por defecto).
- Para traducir un texto: añade `data-i18n="clave"` y el equivalente en `js/i18n.js` (dict `EN`).
- El switch está en el nav y persiste en `localStorage` con la clave `leadforge-lang`.

## 📁 Estructura

```
├── index.html                  # página principal (todas las secciones)
├── eventos.html                # calendario + tarjetas de eventos
├── socials.html                # linktree de redes
├── 404.html                    # página de error on-brand
├── eventos/                    # páginas por evento
│   ├── lighting-de-forge.html
│   ├── forgehack-nasa-space-apps.html
│   ├── spark-session.html
│   └── pasados.html            # archivo de eventos pasados
├── css/style.css               # design system completo
├── js/
│   ├── main.js                 # mesh, reveal, nav, carrusel, parallax
│   ├── i18n.js                 # switcher de idioma + config dinámica
│   └── lightbox.js             # lightbox de imágenes
├── config.js                   # contadores del club (miembros y stats)
├── assets/                     # imágenes, logos, fotos de miembros
├── firebase.json               # config de Firebase Hosting
├── .github/workflows/
│   ├── site-data.yml           # actualiza datos del club desde secrets
│   └── deploy.yml              # despige automático a Firebase
```

## 🔥 Deploy (Firebase Hosting)

```bash
firebase login          # solo la primera vez
firebase deploy --only hosting
```

La config (`firebase.json`) apunta a la raíz con reglas `ignore` (no se suben archivos internos), caché inmutable para assets y `no-cache` para `config.js`.

## ⚙️ CI/CD

- **Push a `main`** → despliega automáticamente a Firebase Hosting.
- **Secrets actualizados** → el workflow "Actualizar datos del club" reescribe `config.js`, hace push y eso dispara el deploy. Cadena completa sin intervención.

### Secrets de GitHub necesarios

| Secret | Uso |
| --- | --- |
| `FIREBASE_TOKEN` | Token CI de Firebase (deploy automático) |
| `MEMBERS_COUNT` | Miembros en la barra de estado |
| `SPARK_SESSIONS` | Stat Spark Sessions |
| `FORGE_LABS` | Stat Forge Labs |
| `IGNITE_CONNECT` | Stat Ignite & Connect |
| `FORGEHACK` | Stat ForgeHack |
| `DEMO_DAYS` | Stat Demo Days |

## 🔗 URLs

- Producción: `https://lead-forge-e1116.web.app`
- Dominio oficial: `https://leadforgecr.com`

## 📄 Licencia

Documenta la propiedad del contenido. Contacto: `LEAD Forge · líderes@leadfor.ge` (por definir).

---

**CONSTRUIDO POR ESTUDIANTES · PARA LA PRÓXIMA GENERACIÓN**
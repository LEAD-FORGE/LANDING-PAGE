/* ============================================================
   SITE CONFIG · LEAD Forge
   ------------------------------------------------------------
   Datos que se muestran en la página y se actualizan vía
   GitHub Secrets + GitHub Action (ver AGENTS.md).

   El workflow reescribe estos valores automáticamente al
   ejecutar la acción "Actualizar datos del club".

   Valores:
     members        → barra de estado "Miembros: X"
     sparkSessions  → stat "Spark Sessions"
     forgeLabs      → stat "Forge Labs"
     igniteConnect  → stat "Ignite & Connect"
     forgeHack      → stat "ForgeHack"
     demoDays       → stat "Demo Days"

   Por ahora todos en 0 (se actualizan por secret pronto).
   Para desarrollo local también puedes editarlos a mano aquí.
   ============================================================ */
window.SITE_CONFIG = {
  members: 2,
  sparkSessions: 0,
  forgeLabs: 0,
  igniteConnect: 0,
  forgeHack: 0,
  demoDays: 0
};
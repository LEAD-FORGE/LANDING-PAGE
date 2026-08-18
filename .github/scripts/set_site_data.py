# Actualiza los datos del club en config.js a partir de los secrets
# (los valores se leen del entorno; aquí no se escriben secretos).
import os
import re
from pathlib import Path

KEYS = {
    "MEMBERS": "members",
    "SPARK_SESSIONS": "sparkSessions",
    "FORGE_LABS": "forgeLabs",
    "IGNITE_CONNECT": "igniteConnect",
    "FORGEHACK": "forgeHack",
    "DEMO_DAYS": "demoDays",
}

path = Path("config.js")
text = path.read_text(encoding="utf-8")

for env_name, config_key in KEYS.items():
    value = os.environ.get(env_name, "").strip()
    if not value:
        print(f"- {env_name}: vacío, sin cambios")
        continue
    try:
        n = int(value)
    except ValueError:
        print(f"- {env_name}: '{value}' no es un número entero, sin cambios")
        continue
    pattern = re.compile(re.escape(config_key) + r":\s*\d+")
    m = pattern.search(text)
    if not m:
        print(f"ERROR: no se encontró '{config_key}: N' en config.js")
        continue
    text = text[: m.start()] + f"{config_key}: {n}" + text[m.end():]
    print(f"- {config_key} actualizado a {n}")

path.write_text(text, encoding="utf-8")
# Práctica 3 · Configuración Básica de Pipeline CI/CD

**Autor:** Jensey Jimenez (2023-1800)

[![CI](https://github.com/JenseyJim/practica3-ci-cd/actions/workflows/ci.yml/badge.svg)](https://github.com/JenseyJim/practica3-ci-cd/actions/workflows/ci.yml)
[![Deploy](https://github.com/JenseyJim/practica3-ci-cd/actions/workflows/pages.yml/badge.svg)](https://github.com/JenseyJim/practica3-ci-cd/actions/workflows/pages.yml)

**🌐 Sitio publicado:** https://JenseyJim.github.io/practica3-ci-cd/

---

## 📋 Objetivo

Implementar un pipeline CI/CD básico con **GitHub Actions** para una aplicación web simple, ejecutando **pruebas automáticas** y **despliegue automatizado** a **GitHub Pages**.

## ⚡ Requisitos

- Git y cuenta de GitHub
- Node.js 20.x (probado con 20.16.0) y npm
- Editor de código (VS Code recomendado)

## 📁 Estructura del Proyecto

```
practica3-ci-cd/
├── public/                    # Sitio estático (se publica en Pages)
│   ├── index.html
│   ├── styles.css
│   └── app.js
├── src/                       # Código fuente a testear
│   └── utils.js
├── tests/                     # Pruebas unitarias e integración
│   ├── utils.test.js
│   └── dom.test.js
├── .github/workflows/
│   ├── ci.yml                 # Pipeline de integración continua
│   └── pages.yml              # Pipeline de despliegue a Pages
├── package.json
└── README.md
```

## 🛠️ Scripts de NPM

- `npm test` – Ejecuta Vitest en modo CI
- `npm run coverage` – Genera reporte de cobertura (carpeta `coverage/`)

## 🚀 Ejecución Local

```bash
# Instalar dependencias
npm ci

# Ejecutar pruebas
npm test

# Generar reporte de cobertura
npm run coverage
```

## ⚙️ Pipeline de GitHub Actions

### CI — `.github/workflows/ci.yml`

**Disparadores:** Push y Pull Request a la rama `main`

**Pasos del pipeline:**
1. `actions/checkout@v4` - Descarga el código
2. `actions/setup-node@v4` - Configura Node.js 20 con cache de npm
3. `npm ci` - Instala dependencias
4. `npm test` - Ejecuta pruebas
5. `npm run coverage` - Genera cobertura
6. Sube el reporte de cobertura como artifact

### Deploy — `.github/workflows/pages.yml`

**Disparadores:** Push a `main` y ejecución manual (`workflow_dispatch`)

**Pasos del pipeline:**
1. `actions/checkout@v4` - Descarga el código
2. `actions/upload-pages-artifact@v3` - Prepara la carpeta `public/`
3. `actions/deploy-pages@v4` - Despliega a GitHub Pages

> **Nota:** En Settings → Pages, la Source debe estar configurada como "GitHub Actions"

## 🔄 Flujo de Trabajo Recomendado

1. **Crear rama** desde `main`: `feat/<funcionalidad>` o `fix/<correcion>`
2. **Desarrollar** y ejecutar `npm ci && npm test` localmente
3. **Subir rama** y abrir Pull Request hacia `main`
4. **Verificar** que el CI esté en verde ✅
5. **Fusionar** a `main` para despliegue automático a Pages

## 🔧 Solución de Problemas

| Problema | Solución |
|----------|----------|
| **CI falla en `npm ci`** | Subir `package-lock.json` o ejecutar `npm install` localmente |
| **Error de jsdom** | Instalar con `npm i -D jsdom` (ya incluido en este repo) |
| **Pages muestra 404** | Verificar que existe `public/index.html` y la Source sea "GitHub Actions" |
| **Node incompatible** | Usar Node.js ≥ 20.19.x o 22.x según los requisitos del paquete |

## 📝 Comandos de Git

```bash
# Guardar cambios y desplegar
git add README.md
git commit -m "docs: README completo con CI, pruebas y Pages"
git push origin main
```

---

**Desarrollado por:** Jensey Jimenez (2023-1800)  
**Práctica:** CI/CD con GitHub Actions

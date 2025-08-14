# 🤝 Guía de Contribución

¡Gracias por tu interés en contribuir a este proyecto! Este repositorio demuestra un pipeline CI/CD con **GitHub Actions**, pruebas automatizadas con **Vitest** y despliegue continuo en **GitHub Pages**.

---

## 📋 Requisitos Previos

- **Git** y cuenta de GitHub activa
- **Node.js 20.x** y npm instalados
- **Pruebas locales exitosas** antes de enviar cambios

## 🔄 Flujo de Trabajo con Git

### 1. Crear nueva rama desde `main`

```bash
# Para nuevas funcionalidades
git checkout -b feat/<breve-descripcion>

# Para corrección de errores
git checkout -b fix/<breve-descripcion>
```

### 2. Configurar entorno local

```bash
# Instalar dependencias
npm ci

# Ejecutar pruebas
npm test

# Revisar cobertura (opcional)
npm run coverage
```

### 3. Proceso de contribución

1. **Sube tu rama** al repositorio remoto
2. **Abre un Pull Request** hacia la rama `main`
3. **Verifica** que el CI esté en verde (Actions → CI)
4. **Al fusionar** en `main`, el deploy a Pages se ejecuta automáticamente

## 📝 Convención de Commits

Utiliza prefijos descriptivos para mantener un historial claro:

| Prefijo | Descripción | Ejemplo |
|---------|-------------|---------|
| `feat:` | Nueva funcionalidad | `feat: agregar validación de formularios` |
| `fix:` | Corrección de bug | `fix: resolver error de carga en Safari` |
| `test:` | Añadir/mejorar pruebas | `test: cobertura para módulo utils` |
| `docs:` | Documentación | `docs: actualizar guía de instalación` |
| `ci:` | Cambios en workflows | `ci: optimizar pipeline de pruebas` |
| `refactor:` | Refactorización | `refactor: simplificar función de validación` |
| `chore:` | Tareas menores | `chore: actualizar dependencias` |

## 📏 Estándares de Código

### ✅ Buenas prácticas

- **Código claro y simple** - Evita la sobreingeniería
- **Nombres descriptivos** para variables y funciones
- **Pruebas mínimas** por cada cambio funcional
- **Mantén o mejora** la cobertura de código actual

### 📁 Estructura del Proyecto

```
practica3-ci-cd/
├── public/                    # Se despliega directamente en GitHub Pages
│   ├── index.html
│   ├── styles.css
│   └── app.js
├── src/                       # Código fuente a testear
│   └── utils.js
├── tests/                     # Pruebas unitarias e integración (Vitest)
│   ├── utils.test.js
│   └── dom.test.js
└── .github/workflows/
    ├── ci.yml                 # Pipeline de pruebas y cobertura
    └── pages.yml              # Pipeline de despliegue automático
```

## 🚀 Comandos de Desarrollo

```bash
# Instalar dependencias (recomendado)
npm ci

# Ejecutar todas las pruebas
npm test

# Generar reporte de cobertura
npm run coverage

# Ver archivos de cobertura
open coverage/index.html  # macOS/Linux
start coverage/index.html # Windows
```

## 🐛 Solución de Problemas Comunes

| Problema | Solución |
|----------|----------|
| **Pruebas fallan localmente** | Ejecutar `npm ci` para reinstalar dependencias |
| **CI falla en GitHub** | Verificar que `package-lock.json` esté actualizado |
| **Cobertura baja** | Añadir pruebas para funciones sin testear |
| **Deploy falla** | Confirmar que `public/index.html` existe |

## 🎯 Checklist Antes de Enviar PR

- [ ] ✅ Pruebas pasan localmente (`npm test`)
- [ ] 📊 Cobertura mantenida o mejorada
- [ ] 📝 Commit messages siguen la convención
- [ ] 🔍 Código revisado y limpio
- [ ] 📚 Documentación actualizada (si aplica)

## 📞 Contacto y Soporte

¿Tienes preguntas o necesitas ayuda? 

- **Issues:** Abre un issue en GitHub para reportar bugs o sugerir mejoras
- **Discussions:** Utiliza GitHub Discussions para preguntas generales

---

**¡Gracias por contribuir al proyecto!** 🎉

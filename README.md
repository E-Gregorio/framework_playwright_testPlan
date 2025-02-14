
# Finalidad del Proyecto

Este proyecto tiene como objetivo demostrar la configuración de un framework de automatización utilizando **Playwright** para la ejecución de pruebas de tipo **Smoke**, **Sanity** y **Regression**, en el contexto de pruebas de aplicaciones web.

## Características principales del proyecto

1. **TestBase y Page Object Model (POM):** Se implementa un diseño robusto utilizando el patrón **TestBase** para compartir configuraciones y utilidades entre pruebas, y el patrón **Page Object Model (POM)** para representar las interacciones con las diferentes páginas de la aplicación de manera modular y fácil de mantener.

2. **Pruebas Smoke, Sanity y Regression:** Se incluyen diferentes tipos de pruebas (Smoke, Sanity y Regression) que validan los flujos básicos y funcionalidades de la aplicación de manera continua, asegurando que el sistema esté funcionando correctamente en diversas situaciones.

3. **CI/CD Pipeline:** El proyecto está configurado para ser ejecutado en un pipeline de integración continua/entrega continua (CI/CD) utilizando herramientas como **GitHub Actions**, **Jenkins**, o **GitLab CI**. El pipeline automatiza la ejecución de las pruebas en entornos de desarrollo, staging y producción, permitiendo despliegues más rápidos y con mayor confianza.

4. **Reporte Allure:** Para garantizar una trazabilidad clara y detallada de las ejecuciones de prueba, se ha integrado **Allure Report**. Este reporte ofrece una visualización gráfica y detallada de los resultados de las pruebas, facilitando la interpretación de los fallos y éxitos.

---

## README Actualizado

### Introducción

Este repositorio contiene un **framework de automatización** construido con **Playwright** y **TypeScript**. El proyecto está estructurado para realizar pruebas **Smoke**, **Sanity** y **Regression** utilizando el patrón **TestBase** y **Page Object Model (POM)**. Además, el framework está preparado para integrarse con un pipeline CI/CD y generar reportes detallados con **Allure**.

### Requisitos

- **Node.js** (versión 16 o superior)
- **npm** o **yarn** como gestor de paquetes
- **Playwright** para ejecutar las pruebas
- **Allure** para generar los reportes

---

### Comandos Iniciales para la Creación del Proyecto

1. **Crear un nuevo proyecto de Node.js:**

   ```bash
   mkdir playwright-automation-framework
   cd playwright-automation-framework
   npm init -y
   ```

2. **Instalar Playwright y dependencias de pruebas:**

   ```bash
   npm install --save-dev playwright @playwright/test
   ```

3. **Instalar Allure para generación de reportes:**

   ```bash
   npm install --save-dev allure-playwright allure-commandline
   ```

4. **Instalar las dependencias adicionales (en caso de ser necesarias, como jest, typescript, etc.):**

   ```bash
   npm install --save-dev jest typescript ts-jest
   ```

---

### Instalación de Dependencias

Para instalar las dependencias necesarias, ejecuta:

```bash
npm install
```

---

### Estructura del Proyecto

```plaintext
├── README.md
├── package.json
├── playwright.config.ts          # Configuración global de Playwright
├── tests                        # Carpeta que contiene las pruebas
│   ├── smoke
│   ├── sanity
│   ├── regression
├── pages                        # Páginas de objetos con el patrón POM
│   ├── buttonsPage.ts
├── utils                        # Utilidades y funciones comunes
│   ├── testBase.ts              # Base para las pruebas (configuración compartida)
├── reports                      # Reportes generados por Allure
├── node_modules
├── package-lock.json
└── tsconfig.json                # Configuración de TypeScript
```

---

### Configuración del CI/CD Pipeline

Este proyecto está preparado para ser ejecutado dentro de un pipeline CI/CD utilizando herramientas como **GitHub Actions**, **GitLab CI**, o **Jenkins**. Para automatizar la ejecución de las pruebas en cada push, puedes configurar un archivo como el siguiente (para **GitHub Actions**):

**`.github/workflows/playwright.yml`:**

```yaml
name: Playwright CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'

      - name: Install dependencies
        run: |
          npm install

      - name: Run Playwright tests
        run: |
          npx playwright install
          npx playwright test

      - name: Generate Allure Report
        run: |
          allure generate --clean
          allure open
```

---

### Ejecución de Pruebas

Para ejecutar las pruebas de forma local, utiliza el siguiente comando:

```bash
npx playwright test
```

Para ejecutar una prueba específica, puedes usar:

```bash
npx playwright test tests/smoke/yourTest.spec.ts
```

---

### Generación de Reportes con Allure

Para generar y visualizar los reportes de ejecución, primero asegúrate de haber instalado Allure y luego corre los siguientes comandos:

1. Generar el reporte:

   ```bash
   allure generate allure-results --clean
   ```

2. Abrir el reporte:

   ```bash
   allure open allure-results
   ```

---

### Ejemplo de Estructura de Prueba con TestBase y POM

```typescript
import { test } from '../base/testBase'; // Asegúrate de importar correctamente el `test` extendido
import { expect } from '@playwright/test';

test.describe('GX3-1355: ToolsQA | Elements | Buttons', () => {

    // Definir test.beforeEach fuera del bloque de prueba
    test.beforeEach(async ({ buttonsPage }) => {
        await buttonsPage.navigate();
    });

    test('TC1: Validar botón doble click', async ({ buttonsPage }) => {
        await buttonsPage.doubleClick();
        await expect(await buttonsPage.getDoubleClickMessage()).toHaveText('You have done a double click');
    });

    test('TC2: Validar botón right click', async ({ buttonsPage }) => {
        await buttonsPage.rightClick();
        await expect(await buttonsPage.getRightClickMessage()).toHaveText('You have done a right click');
    });

    test('TC3: Validar botón simple', async ({ buttonsPage }) => {
        await buttonsPage.simpleClick();
        await expect(await buttonsPage.getDynamicClickMessage()).toHaveText('You have done a dynamic click');
    });

});
```

---

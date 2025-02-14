import { test } from '../base/testBase'; // Asegúrate de importar correctamente el `test` extendido
import { expect } from '@playwright/test';

test.describe('GX3-1355: ToolsQA | Elements | Buttons', () => {

    test('TC1: Validar botón doble click', async ({ buttonsPage }) => {
        // Usamos buttonsPage que ya está inyectado por TestBase
        await buttonsPage.navigate();
        await buttonsPage.doubleClick();
        await expect(await buttonsPage.getDoubleClickMessage()).toHaveText('You have done a double click');
    });

    test('TC2: Validar botón right click', async ({ buttonsPage }) => {
        // Usamos buttonsPage que ya está inyectado por TestBase
        await buttonsPage.navigate();
        await buttonsPage.rightClick();
        await expect(await buttonsPage.getRightClickMessage()).toHaveText('You have done a right click');
    });

    test('TC3: Validar botón simple', async ({ buttonsPage }) => {
        // Usamos buttonsPage que ya está inyectado por TestBase
        await buttonsPage.navigate();
        await buttonsPage.simpleClick();
        await expect(await buttonsPage.getDynamicClickMessage()).toHaveText('You have done a dynamic click');
    });

});

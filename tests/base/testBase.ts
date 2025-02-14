import { test as base } from '@playwright/test';
import { ButtonsPage } from '../../pages/buttonsPage';

export const test = base.extend<{ buttonsPage: ButtonsPage }>({
    buttonsPage: async ({ page }, use) => {
        const buttonsPage = new ButtonsPage(page);
        await use(buttonsPage);
    },
});

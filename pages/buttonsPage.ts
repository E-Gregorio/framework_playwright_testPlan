import { Page, Locator } from '@playwright/test';

export class ButtonsPage {
    private readonly page: Page;
    private readonly doubleClickBtn: Locator;
    private readonly rightClickBtn: Locator;
    private readonly dynamicClickBtn: Locator;
    private readonly doubleClickMessage: Locator;
    private readonly rightClickMessage: Locator;
    private readonly dynamicClickMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.doubleClickBtn = page.locator('#doubleClickBtn');
        this.rightClickBtn = page.locator('#rightClickBtn');
        this.dynamicClickBtn = page.getByText('Click Me', { exact: true });
        this.doubleClickMessage = page.locator('#doubleClickMessage');
        this.rightClickMessage = page.locator('#rightClickMessage');
        this.dynamicClickMessage = page.locator('#dynamicClickMessage');
    }

    async navigate() {
        await this.page.goto('https://demoqa.com/buttons');
    }

    async doubleClick() {
        await this.doubleClickBtn.dblclick();
    }

    async rightClick() {
        await this.rightClickBtn.click({ button: 'right' });
    }

    async simpleClick() {
        await this.dynamicClickBtn.click();
    }

    async getDoubleClickMessage() {
        return this.doubleClickMessage;
    }

    async getRightClickMessage() {
        return this.rightClickMessage;
    }

    async getDynamicClickMessage() {
        return this.dynamicClickMessage;
    }
}

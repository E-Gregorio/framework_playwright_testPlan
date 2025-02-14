
import { defineConfig } from '@playwright/test';
import { TestPlan } from './tests/plans/testPlan';

export default defineConfig({
    testDir: './tests/specs',
    timeout: 30000,
    retries: 1,
    use: {
        browserName: 'chromium',
        headless: true,
        screenshot: 'only-on-failure',
        trace: 'on',
    },
    projects: [
        {
            name: 'Sanity',
            testMatch: TestPlan.sanity,
        },
        {
            name: 'Smoke',
            testMatch: TestPlan.smoke,
        },
        {
            name: 'Regression',
            testMatch: TestPlan.regression,
        },
    ],
    reporter: [
        ['line'],
        ['allure-playwright'],
    ],
});
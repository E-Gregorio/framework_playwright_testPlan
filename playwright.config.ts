// playwright.config.ts
import { defineConfig } from '@playwright/test';
import { TestPlan } from './tests/plans/testPlan';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 2,
  workers: 3,
  projects: [
    {
      name: 'smoke',
      testMatch: TestPlan.smoke.testMatch,
    },
    {
      name: 'sanity',
      testMatch: TestPlan.sanity.testMatch,
    },
    {
      name: 'regression',
      testMatch: TestPlan.regression.testMatch,
    }
  ],
  reporter: [
    ['html'],
    ['allure-playwright']
  ]
});
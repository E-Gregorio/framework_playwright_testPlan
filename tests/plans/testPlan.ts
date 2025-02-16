// tests/plans/testPlan.ts
export const TestPlan = {
    sanity: {
      testMatch: '**/specs/buttons.test.ts',
      metadata: {
        group: 'sanity',
        priority: 'high'
      }
    },
    smoke: {
      testMatch: '**/smoke/*.test.ts',
      metadata: {
        group: 'smoke',
        priority: 'critical'
      }
    },
    regression: {
      testMatch: '**/regression/*.test.ts',
      metadata: {
        group: 'regression',
        priority: 'medium'
      }
    }
  };
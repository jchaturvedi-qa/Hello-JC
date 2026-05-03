import { test as baseTest } from '@playwright/test';
import { NaukriRegistrationPage } from '../pages/NaukriRegistrationPage';

/**
 * Define the types for the custom fixtures we are creating.
 * This ensures TypeScript provides type safety and autocomplete in our tests.
 */
type MyFixtures = {
  naukriRegistrationPage: NaukriRegistrationPage;
};

/**
 * Extend the base Playwright test module to include our custom fixtures.
 * By defining fixtures here, we automatically instantiate Page Objects
 * before each test and provide them directly to the test context.
 *
 * This follows industry standards for reducing boilerplate code and
 * making tests significantly easier to maintain.
 */
export const test = baseTest.extend<MyFixtures>({

  // Define the 'naukriRegistrationPage' fixture
  naukriRegistrationPage: async ({ page }, use) => {
    // 1. Setup: Instantiate the page object
    const registrationPage = new NaukriRegistrationPage(page);

    // 2. Use: Provide the page object to the test
    await use(registrationPage);

    // 3. Teardown: Any cleanup needed after the test runs can go here.
    // In this case, Playwright automatically handles page closure, so no explicit teardown is needed.
  },

});

// Export 'expect' so tests can just import from this fixture file
export { expect } from '@playwright/test';

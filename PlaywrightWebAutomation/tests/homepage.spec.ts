import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Playwright Homepage', () => {
  test('should have the correct title', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();

    const title = await homePage.getTitle();
    expect(title).toContain('Playwright');
  });
});

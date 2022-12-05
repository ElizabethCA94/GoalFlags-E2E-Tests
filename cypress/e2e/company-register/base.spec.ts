import { test, expect } from '@playwright/test';

test('register company in home page', async ({ page }) => {
  await page.goto('https://test.goalflags.com/');

  const nameElement = page.locator('[test-id="name"]')
  await nameElement.click()

});
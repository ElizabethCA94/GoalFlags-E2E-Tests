import { test, expect } from '@playwright/test';

test('register company in home page', async ({ page }) => {
  await page.goto('https://test.goalflags.com/');

  const companyName = 'Company C&E'

  const nameElement = page.locator('[test-id="name"]')
  await nameElement.click()
  await nameElement.type(companyName)

  const phonePrefixElement = page.locator('[test-id="phone-country-code-search"]')
  await phonePrefixElement.click()
  await phonePrefixElement.type('col')
  await page.locator('text=Colombia').click()

  const phoneElement = page.locator('[test-id="phone"]')
  await phoneElement.click()
  await phoneElement.type('777546544')

  const companyEmail = 'test@test.com'

  const emailElement = page.locator('[test-id="email"]')
  await emailElement.click()
  await emailElement.type(companyEmail)

  const passwordElement = page.locator('[test-id="password"]')
  await passwordElement.click()
  await passwordElement.type('test12345')

  const passwordConfirmElement = page.locator('[test-id="passwordConfirm"]')
  await passwordConfirmElement.click()
  await passwordConfirmElement.type('test12345')

  const registerElement = page.locator('[test-id="register"]')
  await registerElement.click()

  await expect(page.getByText(companyName)).toBeVisible()
  await expect(page.getByText(companyEmail)).toBeVisible()

});
// @ts-check
const { test, expect } = require('@playwright/test');

test('my GitHub profile', async ({ page }) => {
  await page.goto('https://github.com/tmphat1312/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Trương Minh Phát/i);
});

import { expect, test } from '@playwright/test';

test.use({ storageState: 'state.json' });

test('Authentication: verify title of the page', async ({ page }) => {
  await page.goto('https://github.com/');

  await expect(page).toHaveTitle('GitHub');
});

import { test, expect } from '@playwright/test';

test('Tour guide', async ({ page }) => {
  await page.goto('https://skyticket.jp/guide/');
  await page.getByPlaceholder('キーワードからガイドを探す').click();
  await page.getByPlaceholder('キーワードからガイドを探す').fill('ホテル');
  await page.getByPlaceholder('キーワードからガイドを探す').press('Enter');
  await page.getByRole('link', { name: 'たびのホテルlit' }).click();
  await page.locator('#articleIndexList').getByRole('link', { name: 'たびのホテル鹿島' }).click();
  const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'たびのホテル鹿島' }).nth(4).click();
    await expect(page.locator('たびのホテル鹿島')).toBeVisible(); 
  // Expect a title "to contain" a substring.
 // await expect(page).toHaveTitle(/Playwright/);
});

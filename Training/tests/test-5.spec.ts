import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://skyticket.jp/');
  await page.getByRole('button', { name: '旅のオプション' }).click();
  await page.locator('skyticket-header-nav-item-pc').getByRole('link', { name: '観光ガイド' }).click();
  await page.getByPlaceholder('キーワードからガイドを探す').click();
  await page.getByPlaceholder('キーワードからガイドを探す').fill('鎌倉');
  await page.getByPlaceholder('キーワードからガイドを探す').press('Enter');
  await page.getByRole('link', { name: '鎌倉 高徳院 桜 【鎌倉】桜の名所・お花見スポットをご紹介｜開花時期はいつ頃？ 神奈川県・鎌倉の桜の名所や見どころ、開花予想時期などをご解説致します。 四' }).click();
  await page.goto('https://skyticket.jp/guide/417768/');
  await expect(page).toHaveTitle(/skyticket.jp/);
});
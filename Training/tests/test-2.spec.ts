import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://skyticket.jp//');
  await page.getByRole('button', { name: '航空券' }).click();
  await page.locator('skyticket-header-nav-item-pc').getByRole('link', { name: '国内航空券' }).click();
  await page.getByPlaceholder('出発地').click();
  await page.locator('li').filter({ hasText: '東京(成田・羽田)(TYO)' }).first().click();
  await page.getByPlaceholder('到着地').click();
  await page.locator('li').filter({ hasText: '福岡(FUK)' }).nth(2).click();
  await page.locator('#da_oneway i').click();
  await page.getByLabel('出発日', { exact: true }).click();
  await page.getByTitle('next').click();
  await page.getByRole('link', { name: '10' }).nth(4).click();
  await page.getByRole('button', { name: '最安値を検索' }).click();
  await page.getByRole('cell', { name: '日本航空 JAL303 普通席' }).getByRole('paragraph').first().click();
  await page.waitForSelector('#js-applicant-info td', { state: 'visible' });
  await page.locator('#js-applicant-info td').filter({ hasText: '姓 姓(カナ)を入力してください' }).locator('span').click();
  await page.getByRole('textbox', { name: '例）ヤマダ' }).click();
  await page.getByRole('textbox', { name: '例）ヤマダ' }).fill('ヤマダ');
  await page.getByRole('textbox', { name: '例）タロウ' }).click();
  await page.getByRole('textbox', { name: '例）タロウ' }).fill('タロウ');
  await page.getByRole('textbox', { name: '例）YAMADA' }).click();
  await page.getByRole('textbox', { name: '例）YAMADA' }).fill('YAMADA');
  await page.getByRole('textbox', { name: '例）TARO' }).click();
  await page.getByRole('textbox', { name: '例）TARO' }).fill('TARO');
});
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://jp.skyticket.jp/');
  await page.getByRole('link', { name: ' 国内航空券' }).click();
  await page.locator('#da_oneway i').click();
  await page.getByText('片道').click();
  await page.getByPlaceholder('出発地').click();
  await page.locator('li').filter({ hasText: '東京(成田・羽田)(TYO)' }).first().click();
  await page.getByPlaceholder('到着地').click();
  await page.locator('li').filter({ hasText: '札幌(新千歳)(CTS)' }).nth(2).click();
  await page.getByLabel('出発日', { exact: true }).click();
  await page.getByRole('link', { name: '5', exact: true }).click();
  await page.locator('#num_of_people').click();
  await page.locator('#search_form').getByText('保存').click();
  await page.getByRole('button', { name: '最安値を検索' }).click();
  await page.locator('#fare_result_list_new').getByText('GK105').click();
  await page.getByRole('link', { name: 'ログインして予約する方はこちら' }).click();
  await page.getByPlaceholder('登録メールアドレス（会員ID用）').click();
  await page.getByPlaceholder('登録メールアドレス（会員ID用）').fill('t-xie@adventure-inc.co.jp');
  await page.getByRole('textbox', { name: 'パスワード' }).click();
  await page.getByRole('textbox', { name: 'パスワード' }).fill('Kani12041205');
  await page.getByRole('button', { name: 'ログイン' }).click();
  await page.getByText('今すぐ購入').click();
  await page.getByRole('button', { name: '申込内容の確認へ' }).click();
  await page.getByLabel('上記の内容に同意します').check();
  await page.getByRole('button', { name: 'お支払いへ' }).click();
  await page.getByText('クレジットカード').click();
  await page.locator('#selectTravelInsurance path').click();
  await page.locator('#selectCancelInsurance path').dblclick();
  await page.locator('#selectCancelInsurance path').click();
  await page.getByRole('button', { name: '支払いを完了する' }).click();
  await page.goto('https://jp.skyticket.jp/flights-in-japan/application2.php?cart_id=1751-6161-9109-03&code=success&message=flight_app_success');
  await expect(page).toHaveTitle(/skyticket.jp/);

  //await page.getByText('申込番号をコピー').click();
});
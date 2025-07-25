import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
await page.goto('https://dev-pay-fe02.skyticket.jp/test/register/');
await page.locator('div').filter({ hasText: /^デフォルト国内航空券海外航空券ホテルレンタカー高速バステイクアウトレストラン国内DP国内ツアー国内ツアー（\+レンタカー）フェリー海外DP保険単体$/ }).getByRole('combobox').selectOption('da');
await page.getByRole('button', { name: '上記の内容で「/api/v1/payments/' }).click();
await page.getByText('クレジットカード').click();
await page.getByText('国内旅行傷害保険 航空機欠航・遅延時の宿泊費補償付きプラン保険料相当額1,200円/一人当たり航空機欠航・遅延時の宿泊費補償携行品損害補償').click();
await page.locator('#selectCancelInsurance path').click();
await page.getByRole('button', { name: '支払いを完了する' }).click();
});
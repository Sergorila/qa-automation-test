import { test, expect } from '@playwright/test';

test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    const screenshotPath = testInfo.outputPath(`failure.png`);
    testInfo.attachments.push({ name: 'failure', path: screenshotPath, contentType: 'image/png' });
    await page.screenshot({ path: screenshotPath, timeout: 5000 });
  }
});

test('Test rowi first instance', async ({ page }) => {
  await page.goto('https://www.google.com');
  const searchInput = page.getByRole('search').getByRole('combobox');
  await searchInput.click();
  await searchInput.fill('Rowi');
  await searchInput.press('Enter');
  await page.waitForSelector('#search');
  
  const firstPage = page.locator('#search cite').first();
  await expect(firstPage).toContainText('https://rowi.com'); 
});


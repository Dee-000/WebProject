import { test, expect } from '@playwright/test';

test('TC003!', async ({ page }) => {
  await page.goto('https://google.com/');
  const googleAbout = page.getByRole('link', { name: 'About' });
  await expect(googleAbout).toBeVisible()
  // await page.pause(); 
});



import { test, expect } from '@playwright/test';

test('TestQ', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');
    await page.pause()
  
});




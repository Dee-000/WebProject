import { test, expect } from '@playwright/test';
import { CheckboxPage } from './util/checkbox';

test('Checkbox Selections', async ({ page }) => {

  const Checkbox = new CheckboxPage(page)

  await Checkbox.gotoCheckboxPage()
  await Checkbox.checkboxselect()
  await page.pause()
});





import { test, expect } from '@playwright/test';
import { CheckboxAssertionPage } from './util/checkboxassertion';

test('Checkbox Assertions', async ({ page }) => {

  const Checkboxassertions = new CheckboxAssertionPage(page)

  await Checkboxassertions.gotoCheckboxPage()
  // await Checkboxassertions.checkboxValidation()
  // await page.pause()
  await Checkboxassertions.checkboxValidation()
  await expect(Checkboxassertions.checkbox2).not.toBeChecked()
  // await page.pause()
  // await expect(Checkboxassertions.checkbox2).toBeChecked()


  // expect(Checkboxassertions.checkbox1).toBeChecked()

  // await expect(page.getByRole('checkbox').first()).toBeChecked

});

// await expect(page.getByRole('checkbox').first()).toBeChecked
// if (await page.$('checkbox')) {
//   await page.getByRole('checkbox').first().click()
//   await page.pause()




import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login'

test('test', async ({ page }) => {

  const Login = new LoginPage(page)

  await Login.gotoLoginPage()
  await Login.login('tomsmith', 'SuperSecretPassword!')
  await expect(Login.logout_button).toBeVisible()
  
  // await expect(Login.success_validation).toHaveText("You logged into a secure area!")
  
});
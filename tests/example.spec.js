const { test, expect } = require('@playwright/test');

test.describe("Freestyle cases", () => {

  test("Login User with correct email and password", async ({ page }) => {

    //await page.goto('https://www.automationexercise.com/')

    //await expect(page).toHaveURL('https://www.automationexercise.com/');

    //await expect(page.getByText('Category')).toBeVisible()

    //await page.getByText('Signup / Login').click()

    //await expect(page).toHaveURL('https://www.automationexercise.com/login')

    //await expect(page.locator('.signup-form h2')).toBeVisible()

    await page.locator('//*[@class="login-form"]//input[@type="email"]').fill("testiranje@gmail.com")

    await page.locator('//*[@class="login-form"]//input[@type="password"]').fill("testiranje")

    await page.locator('//*[@class="login-form"]//button[@type="submit"]|//button[text()="Login"]').click();

    await expect(page).toHaveURL('https://www.automationexercise.com/')

    await expect(page.locator('//*[@class = "shop-menu pull-right"]//.//ul//li[4]//*[text()=" Logout"]')).toBeVisible()

  })

  test("Register User", async ({ page }) => {
    await page.goto('https://www.automationexercise.com/')

    await expect(page).toHaveURL('https://www.automationexercise.com/');

    await expect(page.getByText('Category')).toBeVisible()

    await page.getByText('Signup / Login').click()

    await expect(page).toHaveURL('https://www.automationexercise.com/login')

    await expect(page.locator('.signup-form h2')).toHaveText("New User Signup!")


  })
})

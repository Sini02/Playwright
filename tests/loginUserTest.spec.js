const { test, expect } = require('@playwright/test');
import { loginPage } from "../Pages/loginPage";
import { BasePage } from "../Pages/basePage";


test.describe("Testovi user acc", () => {
    test("Login user test", async ({page}) =>{

        let loginPageIn = new loginPage(page);

        await loginPageIn.openApp()

        await expect(page).toHaveURL(loginPageIn.getApplicationUrl())

        await loginPageIn.btnSignupLogin.click()

        await loginPageIn.newUserSignupTxt.isVisible()

        await loginPageIn.loginUser("teeest@teeest.com", "teeest")

        await loginPageIn.checkLogedAccTxtHome.isVisible()

        await loginPageIn.deleteUser()
    })

    test("Register user test", async ({page}) => {
        
    })
})
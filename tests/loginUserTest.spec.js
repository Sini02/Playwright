const { test, expect } = require('@playwright/test');
import { loginPage } from "../Pages/loginPage";
import { BasePage } from "../Pages/basePage";
import { verifyClass } from "../Pages/verifyClass";


test.describe("Testovi user acc", () => {
    test("Login user with correct parameters test", async ({page}) =>{

        let loginPageIn = new loginPage(page);

        await loginPageIn.navigateToLogin()

        await loginPageIn.loginUser("teeest@teeest.com", "teeest")

        await loginPageIn.checkLogedAccTxtHome.isVisible()

        await loginPageIn.deleteUser()
    })

    test("Register user test", async ({page}) => {
        
        let loginPageRe = new loginPage(page);

        await loginPageRe.navigateToLogin()

        await loginPageRe.registerUserFirstScreen("teeest", "teeest@teeest.com")

        await page.getByText(loginPageRe.checkEnterAccInfoTxt).isVisible()

        await loginPageRe.registerUserSecondScreen("Mr.", "teeest", "teeest", "5", "5", 
            "2025",  "teeest", "teeest", "teeest", "teeest", "teeest", "Australia", "teeest", "teeest", "zipCode", "mobileNUmber")

        await page.getByText(loginPageRe.newAccCreatedTxt).isVisible()

        await loginPageRe.btnNewContinue.click()

        await loginPageRe.checkLogedAccTxtHome.isVisible()

        await loginPageRe.deleteUser()
    })

    test("Login user with incorrect parameters", async ({page}) =>{
        let loginPageIn = new loginPage(page);

        await loginPageIn.navigateToLogin()

        await loginPageIn.loginUser("wrong@wrong.com", "wrong")

        await page.getByText('Your email or password is incorrect!').isVisible()
    })

    test("Logout user test", async ({page}) =>{
        let loginPageLO = new loginPage(page);

        await loginPageLO.navigateToLogin()

        await loginPageLO.loginUser("wrong1@wrong1.com", "wrong1")

        await loginPageLO.checkLogedAccTxtHome.isVisible()

        await loginPageLO.btnLogout.click()

        await loginPageLO.newUserSignupTxt.isVisible()
    })

    test("Register user with existing email", async ({page}) =>{
        let loginPageRegisterExistingMail = new loginPage(page)

        await loginPageRegisterExistingMail.navigateToLogin()

        await loginPageRegisterExistingMail.newUserSignupTxt.isVisible()

        await loginPageRegisterExistingMail.registerUserFirstScreen("ime", "wrong1@wrong1.com")

        await page.getByText("Email Address already exist!").isVisible()
    })

})
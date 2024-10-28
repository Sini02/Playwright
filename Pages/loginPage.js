import { BasePage } from "./basePage";

export class loginPage extends BasePage{

    /**
    * @param {import  ('@playwright/test').Page } page
    */

    constructor(page){
        super(page)
        this.checkCategoryText = page.getByText("Category")
        this.btnSignupLogin = page.getByText(' Signup / Login')
        this.newUserSignupTxt = page.locator('.signup-form h2')
        this.inputLoginEmail = page.locator('//*[@class="login-form"]//input[@type="email"]')
        this.inputLoginPassword = page.locator('//*[@class="login-form"]//input[@type="password"]')
        this.btnLoginCommit = page.locator('//*[@class="login-form"]//button[@type="submit"]|//button[text()="Login"]')
        this.homeLogoutTxt = page.locator('//*[@class = "shop-menu pull-right"]//.//ul//li[4]//*[text()=" Logout"]')
        this.inputSignupName = page.locator('//*[@class="signup-form"]//input[@type="text"]')
        this.inputSignupEmail = page.locator('//*[@class="signup-form"]//input[@type="email"]')
        this.btnSignupCommit = page.locator('//*[@class="signup-form"]//button[@type="submit"]') 
        this.checkEnterAccInfoTxt = page.locator('//*[@class = "title text-center"]/b[text() = "Enter Account Information"]')
        this.btnTitleMr = page.locator('//*[@id = "uniform-id_gender1"]')
        this.btnTitleMrs = page.locator('//*[@id = "uniform-id_gender2"]')
        this.labelNewName = page.locator('//*[@id = "name"]')
        this.labelNewEmail = page.locator('//*[@id = "email"]')
        this.labelNewPassword = page.locator('//*[@id = "password"]')
        this.dropMenuNewDay = page.locator('//*[@id = "days"]')
        this.dropMenuNewMonth = page.locator('//*[@id = "months"]')
        this.dropMenuNewYear = page.locator('//*[@id = "years"]')
        this.checkBoxNewSletter = page.locator('//*[@id = "newsletter"]')
        this.checkBoxSpecialOffers = page.locator('//*[@id = "optin"]')
        this.newFirstName = page.locator('//*[@id = "first_name"]')
        this.newLastName = page.locator('//*[@id = "last_name"]')
        this.newCompany = page.locator('//*[@id = "company"]')
        this.newAddress1 = page.locator('//*[@id = "address1"]')
        this.newAddress2 = page.locator('//*[@id = "address2"]')
        this.newCountry = page.locator('//*[@id = "country"]')
        this.newState = page.locator('//*[@id = "state"]')
        this.newCity = page.locator('//*[@id = "city"]')
        this.newZipCode= page.locator('//*[@id = "zipcode"]')
        this.newMobileNumber = page.locator('//*[@id = "mobile_number"]')
        this.btnCreateAcc = page.locator('//*[@id = "mobile_number"]//..//..//*[@class="btn btn-default"]')
        this.newAccCreatedTxt = page.locator('//*[@class="title text-center"]//b')
        this.btnNewContinue = page.locator('//*[@class="btn btn-primary"]')
        this.checkLogedAccTxtHome = page.locator('//*[@class="fa fa-user"]//..')
        this.btnDeleteAcc = page.locator('//*[@class="nav navbar-nav"]//li[5]//a')
        this.deleteAccTxt = page.locator('//*[@class="title text-center"]//b')
        this.btnContinueDeletedAcc = page.locator('//*[@class= "btn btn-primary"]')
    }

    async loginUser(username, password){
        await this.inputLoginEmail.fill(username)

        await this.inputLoginPassword.fill(password)

        await this.btnLoginCommit.click()
    }
    async deleteUser(){
        await this.btnDeleteAcc.click()

        await this.deleteAccTxt.isVisible()

        await this.btnContinueDeletedAcc.click()

    }
}
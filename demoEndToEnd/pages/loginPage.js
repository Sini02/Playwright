import { BasePage } from './basePage';

export class LoginPage extends BasePage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        super(page);
        this.loginPageLabelUsername = page.locator('//*[@id="user-name"]');
        this.loginPageLabelPassword = page.locator('//*[@id="password"]');
        this.loginPageBtnLogin = page.locator('//*[@id="login-button"]');
    }

    async loginUser(username) {
        await this.openLoginPage();
        await this.loginPageLabelUsername.fill(username);
        await this.loginPageLabelPassword.fill("secret_sauce");
        await this.loginPageBtnLogin.click();
    }
}

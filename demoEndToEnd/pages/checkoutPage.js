import { BasePage } from './basePage';

export class CheckOutPage extends BasePage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        super(page);
        this.checkoutPageLabelFirstName = page.locator('//*[@id="first-name"]')
        this.checkoutPageLabelLastName = page.locator('//*[@id="last-name"]')
        this.checkoutPageLabelZipCode = page.locator('//*[@id="postal-code"]')
        this.checkoutPageBtnLogout = page.locator('//*[@id="logout_sidebar_link"]')
    }

    async checkoutPageInfos(firstName, lastName, zipCode){
        await this.checkoutPageLabelFirstName.fill(firstName)
        await this.checkoutPageLabelLastName.fill(lastName)
        await this.checkoutPageLabelZipCode.fill(zipCode)
    }
}
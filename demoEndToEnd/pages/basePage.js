export class BasePage{

    constructor(page){
        this.page = page

        this.homePageURL = "https://www.saucedemo.com/v1/inventory.html"
        this.loginPageURL = "https://www.saucedemo.com/v1/index.html"
        this.cartPageURL = "https://www.saucedemo.com/v1/cart.html"
        this.checkoutFirstPageURL = "https://www.saucedemo.com/v1/checkout-step-one.html"
        this.checkoutSecondPageURL = "https://www.saucedemo.com/v1/checkout-step-two.html"
        this.checkoutThirdPageURL = "https://www.saucedemo.com/v1/checkout-complete.html"
    }

    async openLoginPage(){
        return this.page.goto(this.loginPageURL)
    }

}
import { BasePage } from "./basePage";

export class verifyClass extends BasePage{

        /**
    * @param {import  ('@playwright/test').Page } page
    */

    constructor(page){
        super(page);
        this.btnContactUs = page.locator('//*[@class = "nav navbar-nav"]/li[8]/a')
        this.inputNameContactUs = page.locator('//*[@class="form-group col-md-6"]//*[@type="text"]')
        this.inputEmailContactUs = page.locator('//*[@class="form-group col-md-6"]//*[@type="email"]')
        this.inputSubjectContactUs = page.locator('//*[@class="form-group col-md-12"]//*[@type="text"]')
        this.inputMessage = page.locator('//*[@id="message"]')
        this.btnUploadFileContactUs = page.locator('//*[@type="file"]')
        this.btnSubmitContactUs = page.locator('//*[@class="btn btn-primary pull-left submit_form"]')
        this.btnHomeContactUs = page.locator('//*[@class="btn btn-success"]')
        this.btnTestCases = page.locator('//*[@class="nav navbar-nav"]//li[5]/a')
        this.testCasesPagetxt = page.locator('//*[@class="title text-center"]/b')
        this.btnProductsHome = page.locator('//*[@class="nav navbar-nav"]//li[2]/a')
        this.btnProductSearch = page.locator('//*[@id="submit_search"]')
        this.searchProductLabel = page.locator('//*[@id="search_product"]')
        this.subscriptionText = page.locator('//*[@class = "single-widget"]/h2')
        this.subscriptionInputEmail = page.locator('//*[@id = "susbscribe_email"]')
        this.btnSubscribe = page.locator('//*[@id = "subscribe"]')
        this.btnAddToCartProduct = page.locator('//*[@class="productinfo text-center"]//a[@data-product-id="1"]')
        this.hoverAreaProduct1 = page.locator('//*[@class="productinfo text-center"]//img[@src="/get_product_picture/1"]//..')
        this.labelProduct1Cart = page.locator('//*[@id="product-1"]')
        this.labelProduct2Cart = page.locator('//*[@id="product-2"]')
        this.btnViewProduct = page.locator('//*[@class="nav nav-pills nav-justified"]//a[@href="/product_details/1"]')
        this.labelQuantity = page.locator('//*[@id="quantity"]')
        this.btnAddToCartView = page.locator('//button[@type="button"]')
        this.btnQuantityCart = page.locator('//*[@class="cart_quantity"]//button')


        }

    async contactUsInput(name, email, subject, message){
        await this.inputNameContactUs.fill(name)

        await this.inputEmailContactUs.fill(email)

        await this.inputSubjectContactUs.fill(subject)

        await this.inputMessage.fill(message)

        await this.btnUploadFileContactUs.click()

    }

    async subscription(email){
        await this.subscriptionInputEmail.fill(email)

        await this.btnSubscribe.click()

    }

    async addProductToCart(numOfProdPic){
        await this.btnProductsHome.click()

        await this.page.locator('//*[@class="productinfo text-center"]//a[@data-product-id="'+numOfProdPic+'"]').click()

    }

    async countProdCart(id){
        let numberOfChildren = await this.page.$$eval(
            '//*[@id="product-'+id+'"]/*',
            elements => elements.length
        );

        return numberOfChildren
    }

}
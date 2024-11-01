import { BasePage } from './basePage';

export class HomePage extends BasePage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        super(page);
        this.homePageBtnMenu = page.getByText('Open Menu');
        this.homePageCartIconValue = page.locator('//*[@class="fa-layers-counter shopping_cart_badge"]')
        this.homePageBtnCartIcon = page.locator('//*[@class="shopping_cart_link fa-layers fa-fw"]')

    }

    async addProductToCart(id){
        await this.page.locator('//*[@id="item_'+id+'_title_link"]//..//..//*[@class="pricebar"]//button[text()="ADD TO CART"]').click()
    }

    async productName(id){
        return await this.page.locator('//*[@id="item_'+id+'_title_link"]//*[@class="inventory_item_name"]').textContent();
    }

}
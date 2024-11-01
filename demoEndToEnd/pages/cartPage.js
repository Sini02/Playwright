import { BasePage } from './basePage';

export class CartPage extends BasePage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        super(page);
        this.cartPageItemsInCart = page.locator('//*[@class="cart_item"]')
        this.cartPageBtnCheckout = page.locator('//*[@class="btn_action checkout_button"]')
        this.cartPageTextProduct = page.locator('//*[@id="item_3_title_link"]//.//*[@class="inventory_item_name"]')
    }

    async getCartItems(){
        return await this.cartPageItemsInCart.count()
    }

    async escapeString(str){
        return str
            .replace(/\\/g, '\\\\')
            .replace(/'/g, "\\'")  
            .replace(/"/g, '\\"')  
            .replace(/\n/g, '\\n')  
            .replace(/\r/g, '\\r')   
            .replace(/\t/g, '\\t')     
            .replace(/\b/g, '\\b') 
            .replace(/\f/g, '\\f'); 
    }
}
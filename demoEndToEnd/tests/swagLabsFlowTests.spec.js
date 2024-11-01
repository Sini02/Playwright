import { test, expect } from '@playwright/test';
import { LoginPage } from "../pages/loginPage";
import { HomePage } from '../pages/homePage';
import { CartPage } from '../pages/cartPage';
import { CheckOutPage } from '../pages/checkoutPage';
import { BasePage } from '../pages/basePage.js';

test.describe("Test Login Purchase Logout flow", () => {
    test("Test", async () => {

        const { chromium } = require("playwright")
        const browser = await chromium.launch({ headless: false });
        const page = await browser.newPage();


        const loginTest = new LoginPage(page);
        await loginTest.loginUser("standard_user");
        await expect(page).toHaveURL(loginTest.homePageURL)

        const addProductToCart = new HomePage(page)
        let id = Math.floor(Math.random() * 6); 
        await addProductToCart.addProductToCart(id)

        const validateProductsInCart = new CartPage(page)
        let homePageProductName = validateProductsInCart.escapeString(addProductToCart.productName(id).toString())
        await addProductToCart.homePageCartIconValue.isVisible()
        await addProductToCart.homePageBtnCartIcon.click()


        expect((await validateProductsInCart.getCartItems()).toString()).toBe(await addProductToCart.homePageCartIconValue.textContent())
        expect(page).toHaveURL(validateProductsInCart.cartPageURL)
        let cartPageProductName = validateProductsInCart.escapeString(validateProductsInCart.cartPageTextProduct.textContent().toString())
        
        expect(cartPageProductName.toString()).toMatch(homePageProductName.toString())
        await validateProductsInCart.cartPageBtnCheckout.click()


        await page.getByText('Checkout: Your Information').isVisible()
        const checkOutTest = new CheckOutPage(page)
        expect(page).toHaveURL(checkOutTest.checkoutFirstPageURL)
        await checkOutTest.checkoutPageInfos("usersFirstName", "usersLastName", "123")
        await page.getByText('CONTINUE').click()


        expect(page).toHaveURL(checkOutTest.checkoutSecondPageURL)
        await page.getByText('Checkout: Overview').isVisible()
        await page.getByText('FINISH').click()


        await page.getByText('THANK YOU FOR YOUR ORDER').isVisible()
        expect(page).toHaveURL(checkOutTest.checkoutThirdPageURL)


        await page.getByText('Open Menu').click()
        await checkOutTest.checkoutPageBtnLogout.click()
        await loginTest.loginPageBtnLogin.isVisible()
        expect(page).toHaveURL(loginTest.loginPageURL)

    })
});

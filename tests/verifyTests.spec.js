const { test, expect } = require('@playwright/test');
import { loginPage } from "../Pages/loginPage";
import { BasePage } from "../Pages/basePage";
import { verifyClass } from "../Pages/verifyClass";


test.describe("Verifikacije", () => {
    test("Contact Us Form test", async ({page}) =>{
        let verifyContact = new verifyClass(page)

        page.on('dialog', async (dialog) => {
            await dialog.accept();
        });
        
        await verifyContact.openApp()

        await expect(page).toHaveURL(verifyContact.homeURL)

        await verifyContact.btnContactUs.click()

        await page.getByText("Get In Touch").isVisible()

        await verifyContact.contactUsInput("name", "email@email.com", "subject", "message")

        await verifyContact.btnSubmitContactUs.click()
        
        await page.getByText("Success! Your details have been submitted successfully.")

        await verifyContact.btnHomeContactUs.click()
        
        await expect(page).toHaveURL(verifyContact.homeURL)

    })

    test("Verify Test Cases Page", async ({page}) =>{
        let verifyTestCases = new verifyClass(page)

        await verifyTestCases.openApp()

        await expect(page).toHaveURL(verifyTestCases.homeURL)

        await verifyTestCases.btnTestCases.click()

        await page.getByText(verifyTestCases.testCasesPagetxt).isVisible()

    })

    test("Search Product Test", async ({page}) =>{
        let verifySearch = new verifyClass(page)

        await verifySearch.openApp()

        await expect(page).toHaveURL(verifySearch.homeURL)

        await verifySearch.btnProductsHome.click()

        await verifySearch.searchProductLabel.fill("Tshirt")

        await verifySearch.btnProductSearch.click()

        await page.getByText('Searched Products').isVisible()
    })

    test("Verify Subscription in Home", async ({page}) =>{
        let verifySubHome = new verifyClass(page)

        await verifySubHome.openApp()

        await expect(page).toHaveURL(verifySubHome.homeURL)
        
        await page.getByText(verifySubHome.subscriptionText).isVisible()

        await verifySubHome.subscription("email@email.com")

        await page.getByAltText('You have been successfully subscribed!').isVisible()

    })

    test("Verify Adding products to cart", async ({page}) =>{
        let verifyAddProduct = new verifyClass(page)

        await verifyAddProduct.openApp()

        await expect(page).toHaveURL(verifyAddProduct.homeURL)

        await verifyAddProduct.addProductToCart("1")

        await page.getByText('Continue Shopping').click()

        await verifyAddProduct.addProductToCart("2")

        await page.getByText('View Cart').click()

        for(let i = 1; i < 3; i++){
            if(verifyAddProduct.countProdCart(i.toString()) == 6){
                await verifyAddProduct.labelProduct1Cart.isVisible()
            }

        }
        
    })

    test("Verify product quantity in cart", async ({page}) => {
        let verifyQuantity = new verifyClass(page)

        await verifyQuantity.openApp()

        await expect(page).toHaveURL(verifyQuantity.homeURL)

        await verifyQuantity.btnViewProduct.click()

        await page.getByText('Availability:').isVisible()

        let randomNumber = Math.floor(Math.random() * 34) + 1

        await verifyQuantity.labelQuantity.fill(randomNumber.toString())

        await verifyQuantity.btnAddToCartView.click()

        await page.getByText('View Cart').click()

        await expect(verifyQuantity.btnQuantityCart).toHaveText(randomNumber.toString())
    })
})
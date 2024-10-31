const { test, expect } = require('@playwright/test');
const { Subservice } = require('../postman/subservices');
//import { Proxy } from '../postman/proxy';
const Ajv = require("ajv");

test.describe("API testovi", () => {
    test("GET test", async () =>{
        let getMetoda = new Subservice();

        let response = await getMetoda.getAllProducts()
        console.log(response)

        expect(response.responseCode).toBe(200)

        expect(response.products).toBeDefined();
        expect(Array.isArray(response.products)).toBe(true);

        let productWithId1 = response.products[0];
        expect(productWithId1.id).toBe(1);
        expect(productWithId1.name).toBe("Blue Top");

        for(let i = 0; i < response.products.length; i++){

            if(response.products[i].name){

                let priceNum = parseInt(response.products[i].price.split(' ')[1]);

                let twenty = priceNum * 0.20
                priceNum += twenty
                response.products[i].price = "Rs " + priceNum

                console.log(response.products[i])
            }
        }
    })

    test("Search test", async () => {
        let searchMetoda = new Subservice()
        let response = await searchMetoda.searchProduct("tshirt")
        console.log(response)

    })

    test.skip("Register user", async () => {
        let registerUser = new Subservice()

        let reqBodyData = {
            email: "api123@api.com",
            name:  "api",
            password: "api",
            title: "api",
            birth_date: "3",
            birth_month: "3",
            birth_year: "2002",
            firstname: "api",
            lastname: "api",
            company: "api",
            address1: "api",
            address2: "api",
            country:"India",
            zipcode:"5929818",
            state: "Bagdad",
            city: "India",
            mobile_number: "29292992"

        }

        let response = await registerUser.createAccount(reqBodyData)
        console.log(response)

    })

    test.skip("Get user details", async () => {
        let detailMetoda = new Subservice()
        let response = await detailMetoda.getUserDetail("api123@api.com") 
        console.log(response)

    })

    test.skip("Delete account", async () => {
        let deleteNalog = new Subservice()

        let reqBodyData = {
            email: "api123@api.com",
            password: "api"
        }

        let response = await deleteNalog.deleteAccount(reqBodyData)
        console.log(response)
    })

    test("Register-Check-Delete-Check", async () =>{
        const ajv = new Ajv();

        //Registrovanje user naloga
        let registerUser = new Subservice();

        let reqBodyData = {
            email: "api12345@api.com",
            name: "api",
            password: "api",
            title: "Mr",
            birth_date: "3",
            birth_month: "3",
            birth_year: "2002",
            firstname: "api",
            lastname: "api",
            company: "api",
            address1: "api",
            address2: "api",
            country: "India",
            zipcode: "5929818",
            state: "Bagdad",
            city: "India",
            mobile_number: "29292992"
        };

        let responseRegister = await registerUser.createAccount(reqBodyData);
        console.log("Response Register:", responseRegister);
        expect(responseRegister.responseCode).toBe(201)

       //GET-ovanje detalja o user nalogu
        let detailMetoda = new Subservice();
        let responseDetail = await detailMetoda.getUserDetail(reqBodyData.email);
        console.log("Response Detail:", responseDetail);
        expect(responseDetail.responseCode).toBe(200)

        //Validacija scheme
        const schema = require("C:\\Users\\SinisaJurisin\\Desktop\\playWrigth\\Playwrigth\\utility\\userSchema.json");
        const validate = ajv.compile(schema);
        const isValid = validate(responseDetail.user);
        expect(isValid).toBe(true);

        //Validacija vrednosti podatakaka
        let actualData = {
            name: responseDetail.user['name'],
            email: responseDetail.user['email'],
            title: responseDetail.user['title'],
            birth_day: responseDetail.user['birth_day'],
            birth_month: responseDetail.user['birth_month'],
            birth_year: responseDetail.user['birth_year'],
            first_name: responseDetail.user['first_name'],
            last_name: responseDetail.user['last_name'],
            company: responseDetail.user['company'],
            address1: responseDetail.user['address1'],
            address2: responseDetail.user['address2'],
            country: responseDetail.user['country'],
            state: responseDetail.user['state'],
            city: responseDetail.user['city'],
            zipcode: responseDetail.user['zipcode']
        };


        let keysToCompare = Object.keys(reqBodyData)
        let matched = true;


        keysToCompare.forEach(key => {
            if (actualData.hasOwnProperty(key)) {
                if (reqBodyData[key] === actualData[key]) {
                    console.log(`Vrednosti '${reqBodyData[key]}' za ključ '${key}' su jednake u oba objekta.`)
                } else {
                    console.log(`Vrednosti '${reqBodyData[key]}' za ključ '${key}' nisu jednake u oba objekta.`);
                    matched = false
                }
            }
        })

        expect(matched).toBe(true)

        //Brisanje user naloga
        let deleteNalog = new Subservice();
        let reqBodyDataDelete = {
            email: reqBodyData.email,
            password: reqBodyData.password
        };
        
        let responseDelete = await deleteNalog.deleteAccount(reqBodyDataDelete)
        console.log("Response Delete:", responseDelete);
        expect(responseDelete.responseCode).toBe(200)
    })
})
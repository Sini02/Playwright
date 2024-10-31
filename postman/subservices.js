import { Proxy } from "./proxy";

export class Subservice extends Proxy{

    constructor(){
        super()
        this.BaseUrl = "https://automationexercise.com/api"
        this.productList = "/productsList"
        this.searchProd = "/searchProduct"
        this.createAcc = "/createAccount"
        this.userDetail = "/getUserDetailByEmail?email="
        this.deleteAcc = "/deleteAccount"
    }

    getBaseUrl(){
        return this.BaseUrl
    }
    
    async getAllProducts(){
        let url = this.getBaseUrl() + this.productList
        let response = await this.get(url, {}) 
        return response
    }

    async searchProduct(data){
        let url = this.getBaseUrl() + this.searchProd
        let form = new FormData()
        form.append("search_product", data)
        let response = await this.post(url, form, {}) 
        return response
    }

    async createAccount(data){
        let url = this.getBaseUrl() + this.createAcc
        let form = new FormData()
        form.append("email", data.email)
        form.append("name", data.name)
        form.append("password", data.password)
        form.append("title", data.title)
        form.append("birth_date", data.birth_date)
        form.append("birth_month", data.birth_month)
        form.append("birth_year", data.birth_year)
        form.append("firstname", data.firstname)
        form.append("lastname", data.lastname)
        form.append("company", data.company)
        form.append("address1", data.address1)
        form.append("address2", data.address2)
        form.append("country", data.country)
        form.append("zipcode", data.zipcode)
        form.append("state", data.state)
        form.append("city", data.city)
        form.append("mobile_number", data.mobile_number)
        let response = await this.post(url, form, {}) 
        return response
    }

    async getUserDetail(email){
        let url = this.getBaseUrl() + this.userDetail + email
        let response = await this.get(url, {}) 
        return response
    }

    async deleteAccount(data){
        let url = this.getBaseUrl() + this.deleteAcc
        let form = new FormData()
        form.append("email", data.email)
        form.append("password", data.password)
        let response = await this.deleteAccountP(url, form, {}) 
        return response
    }
    
}
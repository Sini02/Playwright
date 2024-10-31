import { Proxy } from "./p";

export class exercisesPost extends Proxy {
    getBaseUrl(){
        return "https://automationexercise.com/api"
    }

    async getAllProducts(){
        let url = this.getBaseUrl() + "/productsList"
        let response = await this.get(url, {}, {}, {}) 
        return response
    }

    async getAllBrands(){
        let url = this.getBaseUrl() + "/brandsList"
        let response = await this.get(url, {}, {}, {}) 
        return response
    }

    async searchProduct(terms){
        let url = this.getBaseUrl() + "/brandsList"
        let response = await this.post(url, {}, {"search_product": terms}, {}) 
        return response
    }
}
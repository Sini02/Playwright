export class Proxy{

 /**
  * 
  * @param {*} url 
  * @param {*} body 
  * @param {*} headers 
  * @returns 
  */

    async get(url = null, headers = {}){

        let response = await fetch(url, {headers:headers, method:"GET"} )

        let res = await response.json()

        return res;
    }

    async post(url = null, body = {}, headers = {}){
        let response = await fetch(url, {body:body, headers:headers, method:"POST"})

        let res = await response.json()

        return res
    }

    async deleteAccountP(url = null, body = {}, headers = {}){
        let response = await fetch(url, {body:body, headers:headers, method:"DELETE"})

        let res = await response.json()

        return res
    }
}
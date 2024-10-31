export class Proxy {
    /**
     * GET request
     * @params url - request url
     * @params params - request parameters
     * @params auth - request token
     * @returns res - java script object
     */
    async get(url = null, params = {}, body = {}, auth = {}){
        const headers = {
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': auth
        }
    
        const response = await fetch(url, {headers:headers, data: body, params: params});
        let res = await response.json();
        
        return res;   
    }

    /**
     * POST request
     * @params url - request url
     * @params params - request parameters
     * @params auth - request token
     * @returns res - java script object
     */
     async post(url = null, params = {}, body = {}, auth = {}){
        const headers = {
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': auth
        }
    
        const response = await fetch(url, {headers:headers, data: body, params: params});
        let res = await response.json();
        
        return res;   
    }
}
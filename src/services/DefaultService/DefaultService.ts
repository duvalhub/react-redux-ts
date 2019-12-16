import http from "../http"

export default class DefaultService {
    resource: string
    constructor(resource: string) {
        this.resource = "/" + resource
    }
    async get() {
        return await http.get(this.resource);
    }
}
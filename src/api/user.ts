import service from "../util/request";
function login(data: any) {
    return service.post('/api/login', data);
}


export default {
    login
}
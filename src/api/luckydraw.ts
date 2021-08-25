import service from "../util/request";
function getLuckydraw() {
    return service.get('/api/luckydraw');
}
function addPrize(data:any) {
    return service.post('/api/createprize',data);
}
function getPrizeList(){
    return service.get('/api/prize');
}


export default {
    getLuckydraw,
    addPrize,
    getPrizeList
}
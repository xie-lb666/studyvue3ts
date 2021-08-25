function screenRouter(list: any, name: string) {
    let array = [];
   let  brr = list.filter(item => {
        return item.meta.role.some(v=>{
            return v==name;
        })
    });
    return array;
}
export default {
    screenRouter
}
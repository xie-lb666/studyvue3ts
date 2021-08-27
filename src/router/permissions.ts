function screenRouter(list: any, name: string) {
    let brr = list.filter((item: any) => {
        return item.meta.role.some((v: any) => {
            return v == name;
        })
    });
    return brr;
}
export default {
    screenRouter
}
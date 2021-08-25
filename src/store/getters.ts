const getters = {
    tokne: (state: any) => state.user.tokne,
    role: (state: any) => state.user.role,
    routerMap:(state:any) => state.app.routerMap,
}

export default getters;
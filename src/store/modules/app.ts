const state = () => ({
    routerMap: [],
})

const actions = {
}

// mutations
const mutations = {
    SETROUTERMAP(state: any, data:any) {
        state.routerMap = data;
    },
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
const state = () => ({
    routerMap: [],
    routerList: [],
    loadMenus: true,//第一次加载，动态添加路由。
})

const actions = {
    updateLoadMenus({
        commit
    }) {
        return new Promise((resolve, reject) => {
            commit('SETLOADMENUS', false)
        })
    }
}

// mutations
const mutations = {
    SETROUTERMAP(state: any, data: any) {
        state.routerMap = data;
    },
    SETROUTERLIST(state: any, list: any) {
        state.routerList = list;
    },
    SETLOADMENUS(state: any, flag: any) {
        state.loadMenus = flag;
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
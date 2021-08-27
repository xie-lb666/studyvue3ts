const state = () => ({
    routerMap: [],
    routerList:[],
})

const actions = {
}

// mutations
const mutations = {
    SETROUTERMAP(state: any, data:any) {
        state.routerMap = data;
    },
    SETROUTERLIST(state:any,list:any){
        console.log(list);
        state.routerList  = list;
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
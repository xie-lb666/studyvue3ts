import serve from '../../api/user'

const state = () => ({
    token: '',
    role: ''
})

// actions
const actions = {
    LoginByUsername({ commit }, data) {
        return new Promise((resovel, rej) => {
            serve.login(data).then(res => {
                commit('SETTOKEN', res.token);
                commit('SETROLE', res.role);
                resovel(res);
            }).catch(err => {
                rej(err);
            })
        })
    }
}

// mutations
const mutations = {
    SETTOKEN(state: any, token: any) {
        state.token = token;
    },
    SETROLE(state: any, role: any) {
        state.role = role;
    },
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
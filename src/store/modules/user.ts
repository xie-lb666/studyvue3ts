import serve from '../../api/user';
import {
    getToken,
    setToken,
    removeToken,
    getUserInfo,
    setUserInfo,
    removeUserInfo
} from '../../util/auth';

const state = () => ({
    token: getToken() || '',
    role: '',
    user: getUserInfo() || {},
})

// actions
const actions = {
    LoginByUsername({ commit }, data) {
        return new Promise((resovel, rej) => {

            serve.login(data).then(res => {

                commit('SETTOKEN', res.token);
                commit('SETROLE', res.role);
                commit('SETUSERINFO', res.data);
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
        setToken(token, 1)
    },
    SETROLE(state: any, role: any) {
        state.role = role;
    },
    SETUSERINFO(state: any, user: any) {
        state.user = user;
        state.role = user.role;
        setUserInfo(user);
    },
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}
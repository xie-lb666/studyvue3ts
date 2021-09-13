import { createStore } from 'vuex'
// import createPersistedState from "vuex-persistedstate";
import user from './modules/user'
import app from './modules/app';
import getters from './getters'

export default createStore({
  modules: {
    user,
    app
  },
  getters,
  // plugins: [createPersistedState({
  //   key: 'token',
  //   paths: ['user.token']
  // })],
})

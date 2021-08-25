import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
// import { store } from './store'
import store from "./store"

import axios from "axios";
import './router/router';   //前置守卫，动态生成路由

let app = createApp(App)
app.config.globalProperties.$axios = axios;  //this.axios  util/request里对axios进行了封装
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')

const win: any = window

if (process.env.NODE_ENV === 'development') {
    if ('__VUE_DEVTOOLS_GLOBAL_HOOK__' in win) {
        win.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app

    }

}


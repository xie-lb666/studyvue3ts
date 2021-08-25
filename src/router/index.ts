import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home/Home.vue";
import store from '../store/index';
import AsyncRoutes from './asyncRoutes';
import Layout from '../layout/index.vue';
import {
    Roles
} from "../util/const";
// 基本的路由
const routes = [
    {
        path: "/",
        name: "Home",
        component: Layout,
        meta: {
            auth: true, //登录才能进去的
            name: '首页',
        },
        children: [
        ]
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../views/Login.vue"),
    },
    {
        path: "/404",
        name: "404",
        component: () => import("../views/errorPage/404.vue"),
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
/**
 * 1.获取登录的角色 role   成功
 * 2.与路由的meta的role对应 
 * 什么时候添加？第一次吗？怎么判断? 再登录之后的store中判断路由权限?怎么更改
 * 动态渲染出来，
 */
export default router;
import Home from "../views/Home/Home.vue";
import store from '../store/index';
import AsyncRoutes from './asyncRoutes';
import Layout from '../layout/index.vue';
import permissions from "./permissions";
import {
    Roles
} from "../util/const";
import router from './index';
router.beforeEach((to, from, next) => {
    if (!store.state.user.token) {
        // 未登录
        if (to.matched.length > 0 && !to.matched.some(record => {
            return record.meta.auth;
        })) {
            next();
        } else {
            next({
                path: '/login'
            })
        }
    } else {
        let routeModuleName = Roles.filter((res) => {
            return res.name == store.state.user.role;
        })[0].name;
        // 已经登录，显示对应权限的页面
        loadMenus(routeModuleName, next, to);
        next();
    }
})

/**
 * 传递权限，然后与路由列表对应，有该权限就添加，无则不添加
 * @param module 
 * @param next 
 * @param to 
 * @returns 
 */
export const loadMenus = async (module, next, to) => {
    // console.log("获取传递过来的权限名字", module);
    // console.log("获取原来的路由", router.getRoutes());
    // console.log("添加路由的方法", AsyncRoutes, router);

    let list = {
        path: "/",
        name: "Home",
        component: Layout,
        children: [
            {
                path: "/article/create",
                name: "cjarticle",
                component: () => import('../views/CreateArticle.vue'),
                meta: {
                    icon: 'home',
                    breadcrumb: true,
                    title: '超级管理员',
                    affix: true,
                    noCache: true
                }
            }, {
                path: "/article/list",
                name: "cjarticlelist",
                component: () => import('../views/ListArticle.vue'),
                meta: {
                    icon: 'home',
                    breadcrumb: true,
                    title: '超级管理员',
                    affix: true,
                    noCache: true
                }
            },
            {
                path: "/article/edit",
                name: "cjarticleedit",
                component: () => import('../views/EditArticle.vue'),
                meta: {
                    icon: 'home',
                    breadcrumb: true,
                    title: '超级管理员',
                    affix: true,
                    noCache: true
                }
            },{
                path: "/luckydraw",
                name: "luckydraw",
                component: () => import('../views/LuckyDraw/LuckyDraw.vue'),
                meta: {
                    icon: 'home',
                    breadcrumb: true,
                    title: '抽奖',
                    affix: true,
                    noCache: true
                }
            },{
                path: "/luckydraw/edit",
                name: "luckydrawedit",
                component: () => import('../views/LuckyEdit/LuckyEdit.vue'),
                meta: {
                    icon: 'home',
                    breadcrumb: true,
                    title: '抽奖设置',
                    affix: true,
                    noCache: true
                }
            },]
    };
    router.addRoute(list) //
    let  perlist = permissions.screenRouter(AsyncRoutes,module);
    // console.log(router.getRoutes());
    AsyncRoutes.forEach(item => {
        // console.log(item);
        router.addRoute(item) //
    })
    // console.log(router.getRoutes());
    return AsyncRoutes;
}
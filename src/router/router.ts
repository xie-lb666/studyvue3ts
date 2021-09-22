import store from '../store/index';
import AsyncRoutes from './asyncRoutes';
import permissions from "./permissions";
import {
    Roles
} from "../util/const";
import router from './index';
router.beforeEach((to, from, next) => {
    if (!store.state.user.token) {
        // 未登录  以及判断是不是需要权限才能进入的
        if (to.matched.length > 0 && !to.matched.some(record => {
            return record.meta.auth;
        })) {
            // console.log(router.getRoutes())
            next();
        } else {
            // console.log(router.getRoutes())
            next({
                path: '/login'
            })
        }
    } else {
        /**
         * 控制系统初次渲染动态添加路由
         * 获取登录账号的权限，
         */
        let routeModuleName = Roles.filter((res) => {
            let role = store.state.user.user.role;
            return res.name == role;
        })[0].name;
        // 已经登录，显示对应权限的页面
        if (store.state.app.loadMenus) {
            store.dispatch('app/updateLoadMenus')
            loadMenus(routeModuleName, next, to);
        } 
        if (to.matched.length === 0) {
            next('/404') // 判断此跳转路由的来源路由是否存在，存在的情况跳转到来源路由，否则跳转到404页面
        }
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
export const loadMenus = async (module: any, next: any, to: any) => {
    /**
     * 获取所有的路由
     * 将路由与自身的权限对比，得到自己的路由     permissions.screenRouter
     * 动态添加对应的路由   并存store   方便渲染侧边导航
     * module ：自身的权限
     * router.getRoutes()   ：获取所有的路由
     * router.addRoute({})  ：添加路由
     */
    let routerList = permissions.screenRouter(AsyncRoutes, module);
    routerList.forEach((item: any) => {
        router.addRoute(item)
    });
    // router.removeRoute('prizeindex')
    let setRouterList = routerList.map((item: any) => {
        return {
            path: item.path,
            icon: item.meta.icon,
            name: item.meta.title,
            children: item.children
        }
    })
    console.log(setRouterList)
    store.commit('app/SETROUTERLIST', setRouterList);
    // next();
    next({
        ...to,
        replace: true
    })
    return routerList;
}
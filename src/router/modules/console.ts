import Layout from '../../layout/index.vue';
const routes = {
    path: '/console',
    name: 'console',
    component: Layout,
    redirect: '/console/index',
    meta: {
        icon: 'home',
        breadcrumb: true,
        title: '超级管理员',
        affix: true,
        noCache: true,
        role:['admin']
    },
    children: [{
        path: "/console/index",
        name: "consoleindex",
        component: () => import('../../views/LuckyDraw/LuckyDraw.vue'),
        meta: {
            icon: 'home',
            breadcrumb: true,
            title: '抽奖',
            affix: true,
            noCache: true
        }
    },
    ]
}
export default routes;

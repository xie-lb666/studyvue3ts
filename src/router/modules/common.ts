import Layout from '../../layout/index.vue';
const routes = {
    path: '/common',
    name: 'common',
    component: Layout,
    redirect: '/common/index',
    meta: {
        icon: 'home',
        breadcrumb: true,
        title: '常用',
        affix: true,
        noCache: true,
        role: ['ordinary']
    },
    children: [{
        path: "/common/index",
        name: "commonindex",
        component: () => import('../../views/common/common.vue'),
        meta: {
            icon: 'home',
            breadcrumb: true,
            title: '浏览器',
            affix: true,
            noCache: true
        }
    },
    ]
}
export default routes;

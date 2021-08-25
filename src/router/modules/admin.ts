import Layout from '../../layout/index.vue';
const routes = {
    path: '/cj',
    name: 'cj',
    component: Layout,
    redirect: '/cj/adminone',
    meta: {
        icon: 'home',
        breadcrumb: true,
        title: '超级管理员',
        affix: true,
        noCache: true,
        role:['cj']
    },
    children: [{
        path: "/cj/adminone",
        name: "cjadminone",
        component: () => import('../../views/adminone/index.vue'),
        meta: {
            icon: 'home',
            breadcrumb: true,
            title: '超级管理员',
            affix: true,
            noCache: true
        }
    },
    ]
}
export default routes;

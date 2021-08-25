import Layout from '../../layout/index.vue'
const routes = {
    path: "/",
    name: "Home",
    component: Layout,
    meta: {
        auth: true, //登录才能进去的
        name: '首页',
    },
    children: [{
        path: "/cj/adminone",
        name: "cjadminone",
        component: () => import('../views/adminone/index.vue'),
        meta: {
            icon: 'home',
            breadcrumb: true,
            title: '超级管理员',
            affix: true,
            noCache: true
        }
    },
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
    },
    {
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
    },
    ]
};
export default routes;

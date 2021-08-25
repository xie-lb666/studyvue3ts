import Layout from '../../layout/index.vue';
export default {
    path: '/user',
    name: 'user',
    component: Layout,
    redirect:'/user/index',
    meta: {
        auth: true,
        icon: 'home',
        title: '用户界面',
        role:['gly']
    },
    children: [{
        path: '/user/index',
        component: () => import('../../views/user/user.vue'),
        name: 'userindex',
        meta: {
            icon: 'home',
            title: '用户界面',
            noCache: true,
        }
    },
    ]
}

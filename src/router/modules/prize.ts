import Layout from '../../layout/index.vue';
const routes = {
    path: '/prize',
    name: 'prize',
    component: Layout,
    redirect: '/prize/index',
    meta: {
        icon: 'el-icon-medal',
        breadcrumb: true,
        title: '抽奖',
        affix: true,
        noCache: true,
        role:['ordinary']
    },
    children: [{
        path: "/prize/index",
        name: "prizeindex",
        component: () => import('../../views/LuckyDraw/LuckyDraw.vue'),
        meta: {
            icon: 'el-icon-medal',
            breadcrumb: true,
            title: '抽奖',
            affix: true,
            noCache: true
        }
    },{
        path: "/prize/edit",
        name: "prizeedit",
        component: () => import('../../views/LuckyEdit/LuckyEdit.vue'),
        meta: {
            icon: 'el-icon-medal',
            breadcrumb: true,
            title: '抽奖设置',
            affix: true,
            noCache: true
        }
    }
    ]
}
export default routes;

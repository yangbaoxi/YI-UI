import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'index',
            component: () => import('@/views/home/index.vue')
        },
        {
            path: '/snowflake',
            name: 'snowflake',
            component: () => import('@/views/snowflake/snowflakeDemo.vue')
        },
        {
            path: '/particle',
            name: 'particle',
            component: () => import('@/views/particle/particleDemo.vue')
        },
        {
            path: '/copy',
            name: 'copy',
            component: () => import('@/views/copy/copyDemo.vue')
        },
        {
            path: '/print',
            name: 'print',
            component: () => import('@/views/print/printDemo.vue')
        },
        {
            path: '/download',
            name: 'download',
            component: () => import('@/views/download/downloadDemo.vue')
        },
        {
            path: '/from',
            name: 'from',
            component: () => import('@/views/from/from.vue')
        },
        {
            path: "/photo",
            name: "photo",
            component: () => import('@/views/photo/photoDemo.vue')
        },
        {
            path: "/canvas",
            name: "canvas",
            component: () => import('@/views/canvas/demo.vue')
        }
    ]
})
// 全局拦截
router.beforeEach((to, from, next) => {
    next();
})

export default router;

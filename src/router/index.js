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
        }
    ]
})
// 全局拦截
router.beforeEach((to, from, next) => {
    next();
})

export default router;

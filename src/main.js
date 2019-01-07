import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import "./assets/css/reset.css";
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/index';
import store from './store/index';
import $service from "./service/index";
import $directive from './utils/directive';
import $filters from './utils/filters';
import $Fn from './utils/public';
// import appMixins from "./utils/mixins"
import YIUI from "./yi-ui/index.js"
Vue.config.productionTip = false;// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.use($service);// 使用 axios 封装服务
Vue.use(ElementUI);// 使用 ElementUI
Vue.use(YIUI);// 使用 YiUi
Vue.use($directive);// 使用全局自定义指令
Vue.use($filters);// 使用全局自定义管道(过滤器)
// Vue.mixin(appMixins);// 全局混入
Vue.prototype.$Fn = $Fn;// 全局公共函数
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

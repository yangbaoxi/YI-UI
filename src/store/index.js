import Vue from "vue";
import Vuex from "vuex";

import state from "./state/state.js"
import getters from "./getters/getters.js"
import mutations from "./mutations/mutations.js"
import actions from "./actions/actions.js"

import pm from "./modules/pm"

Vue.use(Vuex);
// 生产环境 严格模式关闭
const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
    strict: debug,
    state,
    getters,
    mutations,
    actions,
    modules: {
        pm
    }
})

export default store;
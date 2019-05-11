import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions/index';
import getters from './getters/index';
import modules from './modules/index';
Vue.use(Vuex);
export default new Vuex.Store({
    actions,
    getters,
    modules,
    strict: process.env.NODE_ENV !== 'production'
});

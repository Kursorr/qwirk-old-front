import Vue from 'vue';
import VueI18n from 'vue-i18n';
import axios from 'axios';
import VueAxios from 'vue-axios';
import io from 'socket.io-client';
import VueSocketIO from 'vue-socket.io';
import App from './renderer/App.vue';
import router from '@/renderer/router';
import store from '@/renderer/vuex/store';
import '@/registerServiceWorker';
Vue.config.productionTip = false;
axios.defaults.baseURL = 'qwirk.test:4100';
const socketInstance = io('qwirk.test:6100', {
    transports: ['websocket']
});
Vue.use(require('vue-electron'));
Vue.use(VueI18n);
Vue.use(VueSocketIO, socketInstance);
Vue.use(VueAxios, axios);
const messages = {
    en: {
        message: {
            hello: 'hello world'
        }
    },
    ja: {
        message: {
            hello: 'こんにちは、世界'
        }
    }
};
const i18n = new VueI18n({
    locale: 'ja',
    messages // set locale messages
});
new Vue({
    components: { App },
    router,
    store,
    i18n,
    render: (h) => h(App),
}).$mount('#app');
//# sourceMappingURL=main.js.map
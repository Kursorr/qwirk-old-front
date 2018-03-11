import Vue from 'vue'
import VueI18n from 'vue-i18n'
import axios from 'axios'
import io from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'

import App from './App.vue'
import router from './router.js'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

axios.defaults.baseURL = 'http://localhost'
Vue.http = Vue.prototype.$http = axios

Vue.config.productionTip = false

const socketInstance = io('http://localhost:3000', {
  transports: ['websocket']
})

Vue.use(VueI18n)
Vue.use(VueSocketIO, socketInstance)

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
}

const i18n = new VueI18n({
  locale: 'ja', // set locale
  messages // set locale messages
})

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  i18n,
  template: '<App/>'
}).$mount('#app')

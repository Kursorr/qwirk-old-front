import Vue from 'vue'
import axios from 'axios'
import io from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'

import App from './App.vue'
import router from './router.js'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

axios.defaults.baseURL = 'http://localhost:1337'
Vue.http = Vue.prototype.$http = axios

Vue.config.productionTip = false

const socketInstance = io('http://localhost:4000', {
  transports: ['websocket']
})

Vue.use(VueSocketIO, socketInstance)

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  template: '<App/>'
}).$mount('#app')

import Vue from 'vue'
import VueI18n from 'vue-i18n'
import axios from 'axios'
import VueAxios from 'vue-axios'
import io, { Socket } from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'
import * as Electron from 'electron'
const Pusher = require('pusher-js')

import App from './renderer/App.vue'
import router from '@/renderer/router'
import store from './renderer/vuex/store'
import '@/registerServiceWorker'

Vue.config.productionTip = false
Pusher.logToConsole = true

const pusher = new Pusher('e0aa787b85b50bfa58eb', {
  cluster: 'eu',
  forceTLS: true
})

const channel = pusher.subscribe('my-channel')

channel.bind('my-event', (data: any) => {
  console.log(JSON.stringify(data))
})

axios.defaults.baseURL = 'localhost:4100'

const socketInstance = io('localhost:6100', {
  transports: ['websocket']
})

declare module 'vue/types/vue' {
  interface Vue {
    $electron: typeof Electron,
    $socket: typeof Socket,
    $pusher: typeof Pusher
  }
}

Vue.prototype.$pusher = pusher

Vue.use(require('vue-electron'))
Vue.use(VueI18n)
Vue.use(VueSocketIO, socketInstance)
Vue.use(VueAxios, axios)

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

new Vue({
  components: { App },
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app')

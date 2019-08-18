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

Vue.directive('click-outside', {
  bind: function (el, binding, vnode) {
    const bubble = binding.modifiers.bubble
    const handler = (e: any) => {
      if (bubble || (!el.contains(e.target) && el !== e.target)) {
        binding.value(e)
      }
    }

    // @ts-ignore
    el.__vueClickOutside__ = handler
    document.addEventListener('click', handler)
  },
  unbind: function (el, binding) {
    // @ts-ignore
    document.removeEventListener('click', el.__vueClickOutside__)
    // @ts-ignore
    el.__vueClickOutside__ = null
  }
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

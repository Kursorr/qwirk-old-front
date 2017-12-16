<template>
  <section id="app">
    <section class="title-bar">
      <button class="win-minimize"></button>
      <button class="win-maximize"></button>
      <button class="win-close"></button>
    </section>
    <section class="full-content">
      <sidebar></sidebar>
      <auth v-if="!user"></auth>
      <router-view></router-view>
    </section>
  </section>
</template>

<script>
  import Vuex from 'vuex'

  import Sidebar from './components/Sidebar/Sidebar.vue'
  import Auth from './components/Modals/Auth.vue'
  import store from './vuex/store'
  require('../../static/style/style.css')

  export default {
    store,
    name: 'front',
    components: {
      Sidebar, Auth
    },
    computed: {
      ...Vuex.mapGetters([
        'user'
      ])
    },
    mounted () {
      window.io = this.$socket
      this.$socket.emit('connection')
    }
  }
</script>

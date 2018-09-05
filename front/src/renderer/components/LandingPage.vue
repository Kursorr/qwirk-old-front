<template>
  <section id="wrapper">
    <sidebar v-if="user"></sidebar>
    <auth v-if="!user"></auth>
    <router-view></router-view>
  </section>
</template>

<script>
  import Vuex from 'vuex'

  import Sidebar from './Sidebar/Sidebar.vue'
  import Auth from './Modals/Auth.vue'
  import Tchat from './Tchat/Tchat.vue'

  import store from '@store'

  export default {
    store,
    name: 'landing-page',
    components: {
      Tchat,
      Sidebar,
      Auth
    },
    computed: {
      ...Vuex.mapGetters([
        'user'
      ])
    }
  }
</script>

<template>
  <section id="wrapper">
    <navigation-bar v-if="user"></navigation-bar>
    <auth v-if="!user"></auth>
    <router-view></router-view>
  </section>
</template>

<script lang="ts">
  import { Component, Vue, Watch } from 'vue-property-decorator'
  import * as Vuex from 'vuex'

  import Auth from './Modals/Auth.vue'
  import NavigationBar from './Navigation/NavigationBar.vue'

  @Component({
    components: {
      NavigationBar,
      Auth
    },
    computed: {
      ...Vuex.mapGetters([
        'user',
        'current'
      ])
    },
    methods: {
      ...Vuex.mapActions([
        'setMessage'
      ])
    }
  })
  export default class LandingPage extends Vue {
    @Watch('current')
    onCurrentChanged(val: any, oldVal: any) {
      console.log(val)
      if (val !== null) {
        this.setMessage([])
        this.$socket.emit('GET::MESSAGES', val.id)
      }
    }
  }
</script>

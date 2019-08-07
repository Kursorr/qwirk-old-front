<template>
  <section id="wrapper">
    <navigation-bar v-if="user"></navigation-bar>
    <auth v-if="!user"></auth>
    <router-view></router-view>
  </section>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import { mapGetters } from 'vuex'

  import Auth from './Auth.vue'
  import NavigationBar from '../components/Navigation/NavigationBar.vue'

  @Component({
    components: {
      NavigationBar,
      Auth
    },
    computed: {
      ...mapGetters({
        user: 'user'
      })
    }
  })
  export default class LandingPage extends Vue {
  }
</script>

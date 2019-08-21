<template>
  <section id="wrapper">
    <navigation-channel v-if="user && this.$route.params.type === 'public'"
    ></navigation-channel>

    <navigation-bar v-if="user && this.$route.params.type === 'private' ||
      (user && this.$route.path.includes('/landing-page') && this.$route.params.type !== 'public')"
    ></navigation-bar>
    <auth v-if="!user"></auth>
    <router-view></router-view>
  </section>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import { mapGetters } from 'vuex'

  import Auth from './Auth.vue'
  import NavigationBar from '../components/Navigation/NavigationBar.vue'
  import NavigationChannel from '../components/Navigation/NavigationChannel.vue'

  @Component({
    components: {
      NavigationBar,
      NavigationChannel,
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

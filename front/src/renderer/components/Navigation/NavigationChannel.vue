<template>
  <section class="container">
    <section class="components">
      <server>
        {{ serverName }}
      </server>
      <div v-for="name in channelsName">
        {{ name.name }}
      </div>
    </section>
    <profile></profile>
  </section>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import Profile from './Sections/Profile.vue'
  import Server from './Sections/Server.vue'

  @Component({
    components: {
      Profile,
      Server
    },
    sockets: {
      updateChannel (server) {
        this.serverName = server.name
        this.channelsName = server.channelsName
      }
    }
  })
  export default class NavigationChannel extends Vue {
    serverName = ''
    channelsName = ''
  }
</script>

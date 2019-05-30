<template>
  <section class="rooms">
    <!-- Tous les MP -->
    <section class="room">
      <h2>Messages Privés</h2>
      <router-link
        @click.native="idChan()" :to="{name:'tchat', params: { convId: 123, type: 'private' }}"
        class="chan set"
        tag="section">
        <section>
          <section class="avatar">
            <img src="http://i0.wp.com/marioasselin.com/wp-content/plugins/buddypress/bp-core/images/mystery-man.jpg" alt="avatar">
            <div class="status"></div>
          </section>
          <span class="color">Purexo</span>
        </section>
        <button class="close-chan"></button>
      </router-link>
    </section>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import * as Vuex from 'vuex'
import store from '../../../vuex/store'

@Component({
  store,
  computed: {
    ...Vuex.mapGetters([
      'user'
    ])
  }
})
export default class Rooms extends Vue {
  public channel: any = {
    convId: 0,
    type: ''
  }
  public user!: any

  public idChan () {
    this.$socket.emit('GET::MESSAGES', this.$route.params.convId)
  }
}
</script>

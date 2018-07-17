<template>
  <section class="rooms">
    <!-- Tous les MP -->
    <section class="room">
      <h2>Messages Privés</h2>
      <router-link @click.native="idChan()" :to="{name:'tchat', params: { convId: 123, type: 'private' }}"
                   class="chan set"
                   tag="section">
        <section>
          <section class="avatar">
            <img src="http://i0.wp.com/marioasselin.com/wp-content/plugins/buddypress/bp-core/images/mystery-man.jpg" alt="avatar">
            <div class="status"></div>
          </section>
          <span>Purexo</span>
        </section>
        <button class="close-chan"></button>
      </router-link>
    </section>

    <!-- Tous les groupes -->
    <section class="room">
      <h2>Messages Groupes</h2>
      <router-link @click.native="idChan()" :to="{name:'tchat', params: { convId: 456, type: 'group' }}"
                   class="chan set"
                   tag="section">
        <section>
          <section class="avatar">
            <img src="http://i0.wp.com/marioasselin.com/wp-content/plugins/buddypress/bp-core/images/mystery-man.jpg" alt="avatar">
            <div class="status"></div>
          </section>
          <span>ES Community</span>
        </section>
        <button class="close-chan"></button>
      </router-link>
    </section>

    <!-- Tous les salons -->
    <section class="room">
      <h2>Messages Channels</h2>
      <router-link @click.native="idChan()" :to="{name:'tchat', params: { convId: 789, type: 'channel' }}"
                   class="chan set"
                   tag="section">
        <section>
          <section class="avatar">
            <img src="http://i0.wp.com/marioasselin.com/wp-content/plugins/buddypress/bp-core/images/mystery-man.jpg" alt="avatar">
            <div class="status"></div>
          </section>
          <span>Le Monde</span>
        </section>
        <button class="close-chan"></button>
      </router-link>
    </section>
  </section>
</template>

<script>
  import Vuex from 'vuex'
  import store from '../../../vuex/store'

  export default {
    store,
    data () {
      return {
        channel: {
          convId: 0,
          type: ''
        }
      }
    },
    components: {
    },
    sockets: {
    },
    methods: {
      idChan () {
        this.$socket.emit('GET::MESSAGES', this.$route.params.convId)
      }
    },
    computed: {
      ...Vuex.mapGetters([
        'user'
      ])
    },
    mounted () {
      this.$socket.emit('GET::CHANNELS', this.user.id)
    }
  }
</script>

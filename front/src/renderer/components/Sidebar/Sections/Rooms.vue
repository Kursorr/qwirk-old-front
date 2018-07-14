<template>
  <section class="rooms">
    <!-- Tous les MP -->
    <section class="room">
      <h2>Messages Privés</h2>
      <router-link :to="{name:'tchat', params: { convId: 123, type: 'private' }}" class="chan set" tag="section"
                   @click="gr()">
        <section>
          <section class="avatar">
            <img src="http://i0.wp.com/marioasselin.com/wp-content/plugins/buddypress/bp-core/images/mystery-man.jpg" alt="avatar">
            <div class="status"></div>
          </section>
          <span>Quenti77</span>
        </section>
        <button class="close-chan"></button>
      </router-link>
    </section>

    <!-- Tous les groupes -->
    <section class="room">
      <h2>Messages Groupes</h2>
      <router-link :to="{name:'tchat', params: { convId: 456, type: 'group' }}" class="chan set" tag="section"
                   @click="gr()">
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
      <router-link :to="{name:'tchat', params: { convId: 789, type: 'channel' }}" class="chan set" tag="section"
                   @click="gr()">
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
      // Faire une fonction qui récupérer l'id du channel, envoyer un emit GET:MESSAGE avec l'idChannel afin de récupérer uniquement les messages du channel.
      gr () {
        this.channel.convId = this.$route.params.convId
        this.channel.type = this.$route.params.type
        console.log(this.channel)
      }
    },
    computed: {
    },
    mounted () {
      // this.gr()
      // Récupérer les channels ici - Emit GET:CHANNELS - Récupérer l'id de l'user ici
    }
  }
</script>

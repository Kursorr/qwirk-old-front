<template>
  <section class="container">
    <section class="components">
      <server v-if="currentServer">
        {{ currentServer.name }}
      </server>

      <div class="server" v-for="channel in channels">
        <router-link @click.native="choiceChannel(channel)"
                     :to="{name: 'tchat', params: { convId: channel.id, type: 'public' }}"
                     class="chan set" tag="div">
          {{ channel.name }}
        </router-link>
      </div>

    </section>
    <profile></profile>
  </section>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import { Store, mapGetters, mapActions } from 'vuex'

  import Profile from './Sections/Profile.vue'
  import Server from './Sections/Server.vue'
  import pusherStore from '../../store/PusherStore'

  @Component({
    Store,
    components: {
      Profile,
      Server
    },
    computed: {
      ...mapGetters([
        'currentServer',
        'currentChannel'
      ])
    },
    methods: {
      ...mapActions([
        'addMessage',
        'upWaitMsg',
        'setChannel'
      ])
    },
    sockets: {
      updateChannel (channel) {
        this.channelName = channel.name
        this.channels = channel.channels
        this.channels.map((channel) => {
          pusherStore.subscribe(`ch-${channel.id}`, this.processChannel)
        })
      }
    }
  })
  export default class NavigationChannel extends Vue {
    channelName = ''
    channels = ''

    public processChannel(data) {
      console.log(this.currentChannel.id)
      console.log(data)
      if (this.currentChannel.id === data.channelName) {
        this.addMessage([data.msg])
      } else {
        this.upWaitMsg(data.channelName)
      }
    }

    public choiceChannel(channel) {
      const data = channel
      data.serverId = this.currentServer.id
      this.setChannel(channel)
      this.$socket.emit('GET::MESSAGES', data)
    }
  }
</script>

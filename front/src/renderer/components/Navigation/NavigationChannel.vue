<template>
  <section class="container">
    <section class="components">
      <server v-if="currentServer">
        {{ currentServer.name }}
      </server>

      <div class="channels">
        <router-link @click.native="choiceChannel(channel)"
                     :to="{name: 'tchat', params: { convId: channel.id, type: 'public' }}"
                     class="chan set" tag="div"
                     v-for="channel in channels">
          <icon-base
            icon-name="diese"
            class="diese"
            width="16"
            height="16"
            view-box="0 0 24 24">
            <diese-icon></diese-icon>
          </icon-base>
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
  import IconBase from '../Svg/IconBase.vue'
  import DieseIcon from '../Svg/Bar/DieseIcon.vue'
  import pusherStore from '../../store/PusherStore'

  @Component({
    Store,
    components: {
      Profile,
      Server,
      IconBase,
      DieseIcon
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

<style lang="scss">
  .diese {
    color: #72767D;
    margin-right: 4px;
  }

  .channels {
    display: flex;
    flex-direction: column;
    color: #DCDDDE;

    .chan.set {
      margin: 0 10px;
      padding: 6px 8px;
      border-radius: 3px;

      &:hover {
        cursor: pointer;
        background-color: #292B2F;
      }
    }

    .chan.set.router-link-exact-active.router-link-active {
      background-color: #40444B;
    }
  }
</style>

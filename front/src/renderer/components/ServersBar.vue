<template>
  <div id="leftBar">
    <transition name="fade">
      <new-or-join-server v-if="modal.newServeur"
                    @close="setModal('newServeur', false)"></new-or-join-server>
    </transition>

    <div class="friendsOnline">7 en ligne {{current}}</div>
    <div class="separator"></div>
    <div class="servers">
      <draggable v-model="servers">
        <div class="server" v-for="server in servers">

          <router-link @click.native="setChannel(server)"
                       :to="{name: 'tchat', params: { convId: server.id }}"
                       class="chan set" tag="div">
            <avatar :url="server.icon" size="medium"></avatar>
          </router-link>
        </div>
      </draggable>
    </div>
    <button class="groupAdd" @click="setModal('newServeur', true)">
      <span class="icon">+</span>
    </button>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Watch } from 'vue-property-decorator'
  const draggable = require('vuedraggable')
  import * as Vuex from 'vuex'
  import store from '../vuex/store'

  import Avatar from './Contents/components/Avatar.vue'
  import NewOrJoinServer from './Modals/NewOrJoinServer.vue'

  @Component({
    components: {
      draggable,
      Avatar,
      NewOrJoinServer
    },
    store,
    computed: {
      ...Vuex.mapGetters([
        'user',
        'current'
      ])
    },
    methods: {
      ...Vuex.mapActions([
        'setChannel'
      ])
    },
    sockets: {
      updateChannel (channels) {
        this.servers = channels.map((channel) => {
          return channel.right
        })
      }
    }
  })
  export default class ServersBar extends Vue {
    @Watch('user')
    onUserChanged(val: any, oldVal: any) {
      if (val !== null) {
        this.$socket.emit('GET::CHANNELS', val.id)
      }
    }

    servers: any = []
    user!: any
    modal: any = {
      newServeur: false
    }

    setModal(modalName: string, value: boolean) {
      this.modal[modalName] = value
      this.$emit('test', this.modal)
    }
  }
</script>

<style lang="scss">
#leftBar {
  width: 70px;
  background-color: #202225;
  display: flex;
  flex-direction: column;
  align-items: center;

  div.friendsOnline {
    color: hsla(0,0%,100%,.3);
    font-size: 10px;
    margin-top: 10px;
    text-align: center;
    text-transform: uppercase;
  }

  div.separator {
    transform: rotate(90deg);
  }

  div.servers {
    div.server {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      margin-top: 5px;

      &:hover { cursor: pointer; }
      &:first-child { margin-top: 0; }

      div.chan.set {
        position: relative;
      }

      div.chan.set.router-link-active:before {
        background: #FFF;
        border-radius: 20px;
        content: " ";
        position: absolute;
        width: 10px;
        height: 40px;
        left: -14px;
        margin-top: 5px;
      }
    }
  }

  button.groupAdd {
    background: #202225;
    color: #535559;
    margin-top: 8px;
    border-radius: 50%;
    border: 1px dashed #535559;
    font-size: 40px;
    font-weight: 300;
    height: 50px;
    line-height: 100%;
    padding: 0;
    text-align: center;
    transition: border-color .25s ease,color .25s ease;
    width: 50px;
    margin-right: 0;

    &:hover {
      border-color: hsla(0,0%,100%,.75);
      color: hsla(0,0%,100%,.75);
    }
  }
}
</style>

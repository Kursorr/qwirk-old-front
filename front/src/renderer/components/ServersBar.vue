<template>
  <div id="leftBar">
    <transition name="fade">
      <new-or-join-server v-if="modal.newServeur"
                    @close="setModal('newServeur', false)"></new-or-join-server>
    </transition>

    <div class="friendsOnline">7 en ligne</div>
    <div class="separator"></div>
    <div class="servers">
      <draggable v-model="servers">
        <div class="server" v-for="server in servers">
          <router-link @click.native="idChan()" :to="{name:server.name, params: { convId: server.convId, type: server.type
         }}" class="chan set" tag="div">
            <avatar :url="null" size="medium"></avatar>
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
  import { Component, Vue } from 'vue-property-decorator'
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
        'user'
      ])
    }
  })
  export default class ServersBar extends Vue {
    servers: any = [
      {name: 'tchat', convId: 456, type: 'server', url: null},
      {name: 'tchat', convId: 789, type: 'server', url: null}
    ]

    channel: any = {
      convId: 0,
      type: ''
    }
    user!: any

    modal: any = {
      newServeur: false
    }

    idChan () {
      this.$socket.emit('GET::MESSAGES', this.$route.params.convId)
    }

    setModal(modalName: string, value: boolean) {
      this.modal[modalName] = value
      this.$emit('test', this.modal)
    }

    mounted () {
      // this.$socket.emit('GET::CHANNELS', this.user.id)
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

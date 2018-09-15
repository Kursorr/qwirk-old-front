<template>
  <section class="account">
    <transition name="fade">
      <account-settings v-if="modal.accountSettings"
                        @close="setModal('accountSettings', false)"></account-settings>
    </transition>

    <section class="avatar">
      <section id="changeStatus" v-show="changeStatus">
        <section class="actualStatus principal" @click="getOnlineStatus()">
          <div class="status online"></div>
          <h4>En ligne</h4>
        </section>

        <section class="actualStatus" @click="getIdleStatus()">
          <div class="status idle"></div>
          <h4>Inactif</h4>
        </section>

        <section class="actualStatus" @click="getBusyStatus()">
          <div class="status busy"></div>
          <div class="info">
            <h4>Ne pas déranger</h4>
            <p>Vous ne recevrez aucune notification sur votre ordinateur.</p>
          </div>
        </section>

        <section class="actualStatus" @click="getInvisibleStatus()">
          <div class="status invisible"></div>
          <div class="info">
            <h4>Invisible</h4>
            <p>Vous n'apparaîtrez pas connecté, mais aurez néanmoins accès à toutes les fonctionnalités de Discord.</p>
          </div>
        </section>
      </section>
      <avatar :url="user.avatar" size="small" @click.native="toggleStatus()"></avatar>
      <div class="status" :class="{
        online: status.online,
        idle: status.idle,
        busy: status.busy,
        invisible: status.invisible
      }"></div>
    </section>

    <section class="profil">
      <span class="username">{{ user.pseudo }}</span>
      <span class="tag">#{{ user.tag }}</span>
    </section>

    <section class="options">
      <button class="mute"></button>
      <button class="headset"></button>
      <button class="settings" @click="setModal('accountSettings', true)"></button>
    </section>
  </section>
</template>

<script>
  import Vuex from 'vuex'
  import store from '@store'

  import AccountSettings from '../../Modals/UserParams'
  import Avatar from '../../Contents/components/Avatar.vue'

  export default {
    store,
    components: {
      AccountSettings,
      Avatar
    },
    data () {
      return {
        changeStatus: false,
        status: {
          online: true,
          idle: false,
          busy: false,
          invisible: false
        },
        modal: {
          accountSettings: false
        }
      }
    },
    methods: {
      setModal (modalName, value) {
        this.modal[modalName] = value
      },
      toggleStatus () {
        this.changeStatus = !this.changeStatus
      },
      getOnlineStatus () {
        this.status.online = true
        this.status.idle = false
        this.status.busy = false
        this.status.invisible = false
        this.toggleStatus()
      },
      getIdleStatus () {
        this.status.idle = true
        this.status.online = false
        this.status.busy = false
        this.status.invisible = false
        this.toggleStatus()
      },
      getBusyStatus () {
        this.status.busy = true
        this.status.idle = false
        this.status.online = false
        this.status.invisible = false
        this.toggleStatus()
      },
      getInvisibleStatus () {
        this.status.invisible = true
        this.status.idle = false
        this.status.busy = false
        this.status.online = false
        this.toggleStatus()
      }
    },
    computed: {
      ...Vuex.mapGetters([
        'user'
      ])
    }
  }
</script>

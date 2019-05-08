<template>
  <section class="account">
    <transition name="fade">
      <user-params v-if="modal.accountSettings"
                        @close="setModal('accountSettings', false)"></user-params>
    </transition>

    <section class="avatar">
      <section id="changeStatus" v-show="changeStatus">
        <section class="actualStatus principal" @click="getOnlineStatus()">
          <div class="status online"></div>
          <div class="info">
            <h4>En ligne</h4>
          </div>
        </section>

        <section class="actualStatus" @click="getIdleStatus()">
          <div class="status idle"></div>
          <div class="info">
            <h4>Inactif</h4>
          </div>
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

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import * as Vuex from 'vuex'
  import store from '../../../vuex/store'

  import UserParams from '../../Modals/UserParams.vue'
  import Avatar from '../../Contents/components/Avatar.vue'

  @Component({
    store,
    components: {
      UserParams,
      Avatar
    },
    computed: {
      ...Vuex.mapGetters([
        'user'
      ])
    }
  })
  export default class Profile extends Vue {
    changeStatus: boolean = false
    status: any = {
      online: true,
      idle: false,
      busy: false,
      invisible: false
    }
    modal: any = {
      accountSettings: false
    }

    setModal (modalName, value) {
      this.modal[modalName] = value
    }

    toggleStatus () {
      this.changeStatus = !this.changeStatus
    }

    getOnlineStatus () {
      this.status.online = true
      this.status.idle = false
      this.status.busy = false
      this.status.invisible = false
      this.toggleStatus()
    }

    getIdleStatus () {
      this.status.idle = true
      this.status.online = false
      this.status.busy = false
      this.status.invisible = false
      this.toggleStatus()
    }

    getBusyStatus () {
      this.status.busy = true
      this.status.idle = false
      this.status.online = false
      this.status.invisible = false
      this.toggleStatus()
    }

    getInvisibleStatus () {
      this.status.invisible = true
      this.status.idle = false
      this.status.busy = false
      this.status.online = false
      this.toggleStatus()
    }
  }
</script>

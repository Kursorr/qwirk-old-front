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
      <button class="muted"></button>
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
  public changeStatus: boolean = false
  public status: any = {
    online: true,
    idle: false,
    busy: false,
    invisible: false
  }
  public modal: any = {
    accountSettings: false
  }

  public setModal (modalName: any, value: any) {
    this.modal[modalName] = value
  }

  public toggleStatus () {
    this.changeStatus = !this.changeStatus
  }

  public getOnlineStatus () {
    this.status.online = true
    this.status.idle = false
    this.status.busy = false
    this.status.invisible = false
    this.toggleStatus()
  }

  public getIdleStatus () {
    this.status.idle = true
    this.status.online = false
    this.status.busy = false
    this.status.invisible = false
    this.toggleStatus()
  }

  public getBusyStatus () {
    this.status.busy = true
    this.status.idle = false
    this.status.online = false
    this.status.invisible = false
    this.toggleStatus()
  }

  public getInvisibleStatus () {
    this.status.invisible = true
    this.status.idle = false
    this.status.busy = false
    this.status.online = false
    this.toggleStatus()
  }
}
</script>

<style lang="scss" scoped>
  section.account {
    display: flex;
    align-items: center;
    height: 70px;
    min-height: 70px;
    padding: 0 10px;
    background-color: #1C1E22;
    color: #FEFEFE;

    section.profil {
      display: flex;
      flex-direction: column;
      text-overflow: ellipsis;
      overflow: hidden;

      span.username {
        font-size: 14px;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      span.tag {
        font-size: 11px;
        opacity: 0.5;
        margin-right: 40px;
      }
    }

    section.options {
      display: flex;
      flex-direction: row;

      button {
        width: 37px;
        height: 37px;
        border: solid #1C1E22 1px;
        background: #2E3136 no-repeat center;
        background-size: 20px;
        opacity: 0.6;
        cursor: pointer;
        margin-right: 0;

        &:hover {
          opacity: 1;
        }
      }

      button.muted    { background-image: url('../../../assets/webrtc/mute.svg');     }
      button.headset  { background-image: url('../../../assets/webrtc/headset.svg');  }
      button.settings { background-image: url('../../../assets/webrtc/settings.svg'); }
    }
  }

  #changeStatus {
    position: absolute;
    top: -237px;
    background: #282b30;
    color: #000;
    left: -3px;
    width: 226px;
    border-radius: 5px;

    section.actualStatus {
      display: flex;
      align-items: center;
      padding: 12px;
      position: relative;

      div.status {
        top: 12px;
        left: 8px;
        border: solid #282b30 2px;
      }

      h4 {
        font-size: 12px;
        color: #99AAB5;
      }

      &:hover {
        background-color: #25282d;
      }

      div.info {
        width: 185px;
        margin-left: 15px;

        h4 {
          color: #99AAB5;
          font-size: 12px;
        }

        p {
          font-size: 11px;
          color: rgba(153, 170, 181, .8);
        }
      }

      &:hover > div.info > h4 {
        color: #FFF;
      }
    }
  }

  section.actualStatus.principal {
    border-bottom: 1px solid hsla(0,0%,96.1%,.08);
  }
</style>

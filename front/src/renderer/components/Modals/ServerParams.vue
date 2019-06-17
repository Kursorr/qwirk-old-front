<template>
  <section class="modal" id="create-group" @click="closeModal($event)">
    <section class="set">
      <section class="menu">
        <h1 class="title">Paramètres du serveur</h1>
        <button class="tab" :class="{'is-active': tab === 'global-view'}"
                @click="setTab('global-view')">Vue d'ensemble</button>
        <button class="tab" :class="{'is-active': tab === 'moderation'}"
                @click="setTab('moderation')">Moderation</button>
        <button class="tab" :class="{'is-active': tab === 'roles'}"
                @click="setTab('roles')">Rôles</button>
        <div class="separator"></div>
        <h1 class="subtitle">Gestion des utilisateurs</h1>
        <button class="tab" :class="{'is-active': tab === 'members'}"
                @click="setTab('members')">Membres</button>
        <button class="tab" :class="{'is-active': tab === 'invitation'}"
                @click="setTab('invitation')">Invites</button>
        <button class="tab" :class="{'is-active': tab === 'bans'}"
                @click="setTab('bans')">Bans</button>
      </section>

      <section class="content">
        <section id="general" class="settings" v-if="tab === 'global-view'">
          <global></global>
        </section>

        <section id="moderation" class="settings" v-if="tab === 'moderation'">
          <moderation></moderation>
        </section>

        <section id="role" class="settings" v-if="tab === 'roles'">
          <roles></roles>
        </section>

        <section id="member" class="settings" v-if="tab === 'members'">
          <members></members>
        </section>

        <section id="invit" class="settings" v-if="tab === 'invitation'">
          <invitations></invitations>
        </section>

        <section id="ban" class="settings" v-if="tab === 'bans'">
          <bans></bans>
        </section>

        <section class="buttons">
          <button class="success" @click="finish()">Terminer</button>
          <button class="danger" @click="cancel()">Annuler</button>
        </section>
      </section>
    </section>
  </section>
</template>

<script lang="ts">
  import {Component, Emit, Vue} from 'vue-property-decorator'

  import Global from './components/Group/Global.vue'
  import Moderation from './components/Group/Moderation.vue'
  import Invitations from './components/Group/Invitations.vue'
  import Roles from './components/Group/Roles.vue'
  import Members from './components/Group/Members.vue'
  import Bans from './components/Group/Bans.vue'

  @Component({
    components: {
      Global,
      Moderation,
      Invitations,
      Roles,
      Members,
      Bans
    }
  })
  export default class ServerParams extends Vue {
    private tab: string = 'global-view'

    public closeModal (e: any) {
      if (e.target.classList.contains('modal')) {
        this.$emit('close')
      }
    }

    public finish () {
      this.$emit('finish')
    }

    public cancel () {
      this.$emit('close')
    }

    public setTab (tabName: string) {
      this.tab = tabName
    }
  }
</script>

<style lang="scss" scoped>
  section.modal {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 9999;

    section.set {
      display: flex;
      flex-direction: row;
      width: 800px;
      height: 650px;
      background-color: transparent;

      section.menu {
        display: flex;
        flex-direction: column;
        width: 210px;
        background-color: #282b30;
        border-right: solid #1C1E22 1px;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;

        div.separator {
          height: 1px;
          margin: 3px 10px 0 15px;
          background-color: rgba(114, 118, 125, .3);
          width: 170px;
        }

        h1.title {
          padding: 20px 0;
          font-size: 12px;
          font-weight: 700;
          margin-left: 14px;
          color: #72767d;
          text-transform: uppercase;
        }

        h1.subtitle {
          padding: 20px 0;
          font-size: 11px;
          font-weight: 700;
          color: #72767d;
          text-transform: uppercase;
          margin-left: 14px;
        }

        button.tab {
          padding: 12px 15px;
          font-size: 14px;
          background-color: #282b30;
          color: #b9bbbe;
          text-align: left;
          transition: all 200ms ease;

          &:hover {
            background-image: linear-gradient(to right, #2E3136 100%, #2e3130);
          }

          &:active {
            border-left: 2px solid #7289da;
            padding-left: 28px;
            background-image: linear-gradient(to right, #282b30 80%, #2e3136);
          }
        }
      }

      section.content {
        flex: 1;
        background-color: #2E3136;

        section.settings {
          flex: 1;
          color: #FFF;
          padding: 12px;
          height: 90%;
          overflow: auto;
        }
      }
    }
  }

  div.separator {
    transform: rotate(180deg);
  }
</style>

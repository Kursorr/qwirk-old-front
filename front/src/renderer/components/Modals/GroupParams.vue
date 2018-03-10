<template>
  <section class="modal" id="create-group" @click="closeModal($event)">
    <section class="set">
      <section class="menu">
        <h1 class="title">Paramètres du groupe</h1>
        <button class="tab" :class="{'is-active': tab === 'global-view'}"
                @click="setTab('global-view')">Vue d'ensemble</button>
        <button class="tab" :class="{'is-active': tab === 'moderation'}"
                @click="setTab('moderation')">Moderation</button>
        <button class="tab" :class="{'is-active': tab === 'roles'}"
                @click="setTab('roles')">Rôles</button>

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

<script>
  import Global from './components/Group/Global'
  import Moderation from './components/Group/Moderation'
  import Invitations from './components/Group/Invitations'
  import Roles from './components/Group/Roles'
  import Members from './components/Group/Members'
  import Bans from './components/Group/Bans'

  export default {
    components: {
      Global,
      Moderation,
      Invitations,
      Roles,
      Members,
      Bans
    },
    data () {
      return {
        tab: 'global-view'
      }
    },
    methods: {
      closeModal (e) {
        if (e.target.classList.contains('modal')) {
          this.$emit('close')
        }
      },
      finish () {
        this.$emit('close')
      },
      cancel () {
        this.$emit('close')
      },
      setTab (tabName) {
        this.tab = tabName
      }
    }
  }
</script>

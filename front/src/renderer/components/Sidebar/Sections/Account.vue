<template>
  <section class="account">
    <transition name="fade">
      <account-settings v-if="modal.accountSettings"
                        @close="setModal('accountSettings', false)"></account-settings>
    </transition>

    <section class="avatar">
      <img src="http://i0.wp.com/marioasselin.com/wp-content/plugins/buddypress/bp-core/images/mystery-man.jpg" alt="avatar-account">
      <div class="status"></div>
    </section>

    <section class="profil">
      <span class="username">Ravaniss</span>
      <span class="tag">#2495</span>
    </section>

    <section class="options">
      <button class="mute"></button>
      <button class="headset"></button>
      <button class="settings" @click="setModal('accountSettings', true)"></button>
    </section>
  </section>
</template>

<script>
  import AccountSettings from '../../Modals/AccountSettings'

  export default {
    components: {
      AccountSettings
    },
    data () {
      return {
        modal: {
          accountSettings: false
        }
      }
    },
    methods: {
      setModal (modalName, value) {
        this.modal[modalName] = value
      }
    }
  }
</script>

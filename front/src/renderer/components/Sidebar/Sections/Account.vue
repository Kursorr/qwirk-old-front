<template>
  <section class="account">
    <transition name="fade">
      <account-settings v-if="modal.accountSettings"
                        @close="setModal('accountSettings', false)"></account-settings>
    </transition>

    <section class="avatar">
      <avatar :url="user.avatar" size="small"></avatar>
      <div class="status"></div>
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
  import store from '../../../vuex/store'

  import AccountSettings from '../../Modals/AccountSettings'
  import Avatar from '../../Contents/components/Avatar.vue'

  export default {
    store,
    components: {
      AccountSettings,
      Avatar
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
    },
    computed: {
      ...Vuex.mapGetters([
        'user'
      ])
    }
  }
</script>

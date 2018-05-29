<template>
  <section class="global">
    <transition name="fade">
      <group-params v-if="modal.groupParams"
                       @close="setModal('groupParams', false)"></group-params>
    </transition>

    <section class="bar">
      <section class="filters">
        <button class="filt add" @click="setModal('groupParams', true)">Créer un channel</button>
        <div class="separator"></div>
        <router-link :to="{name: 'allChannel'}" class="filt">Tous</router-link>
        <a href="#" class="filt">En ligne</a>
        <a href="#" class="filt">En attente</a>
        <div class="separator"></div>
        <a href="#" class="filt">Bloqué</a>
        <div class="separator"></div>
        <router-link :to="{name: 'join'}" class="filt">Rejoindre</router-link>
      </section>
    </section>
    <router-view></router-view>
  </section>
</template>

<script>
  import GroupParams from '../Modals/GroupParams.vue'

  export default {
    components: {
      GroupParams
    },
    data () {
      return {
        modal: {
          groupParams: false
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

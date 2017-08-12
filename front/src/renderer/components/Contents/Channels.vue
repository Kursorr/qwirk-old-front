<template>
  <section class="global">
    <transition name="fade">
      <create-and-edit v-if="modal.createAndEdit"
                       @close="setModal('createAndEdit', false)"></create-and-edit>
    </transition>

    <section class="bar">
      <section class="filters">
        <button class="filt add" @click="setModal('createAndEdit', true)">Créer un channel</button>
        <div class="separator"></div>
        <router-link to="/all_channel" class="filt">Tous</router-link>
        <a href="#" class="filt">Tous</a>
        <a href="#" class="filt">En ligne</a>
        <a href="#" class="filt">En attente</a>
        <div class="separator"></div>
        <a href="#" class="filt">Bloqué</a>
        <div class="separator"></div>
        <router-link to="/join" class="filt">Rejoindre</router-link>
      </section>
    </section>
    <router-view></router-view>
  </section>
</template>

<script>
  import CreateAndEdit from '../Modals/CreateAndEdit.vue'

  export default {
    components: {
      CreateAndEdit
    },
    data () {
      return {
        modal: {
          createAndEdit: false
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

<template>
  <section class="global">
    <menu-bar
      iconName="Amis"
      :filters="true"
      :separator="true"
      :links="{
        addFriend: 'Ajouter un ami',
        allFriend: 'Tous',
        online: 'En ligne',
        wait: 'En attente',
        locked: 'Bloqué'
      }">
      <friend-icon/>
    </menu-bar>
    <router-view></router-view>
  </section>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import MenuBar from '../components/Contents/MenuBar.vue'
  import FriendIcon from '../components/Svg/Menu/FriendIcon.vue'

  @Component({
    components: {
      MenuBar,
      FriendIcon
    }
  })
  export default class Friends extends Vue {}
</script>

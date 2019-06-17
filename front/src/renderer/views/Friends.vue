<template>
  <section class="global">
    <bar
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
    </bar>
    <router-view></router-view>
  </section>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import Bar from '../components/Contents/Bar.vue'
  import FriendIcon from '../components/Svg/Menu/FriendIcon.vue'

  @Component({
    components: {
      Bar,
      FriendIcon
    }
  })
  export default class Friends extends Vue {}
</script>

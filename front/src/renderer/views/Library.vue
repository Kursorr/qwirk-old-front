<template>
  <section class="global">
    <menu-bar
      iconName="Bibliothèque"
      :filters="true"
      :separator="true"
      :links="{
        myGames: 'My Games',
        gift: 'Gift Inventory'
      }">
      <library-icon/>
    </menu-bar>
    <router-view></router-view>
  </section>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import MenuBar from '../components/Contents/MenuBar.vue'
  import LibraryIcon from '../components/Svg/Menu/LibraryIcon.vue'

  @Component({
    components: {
      MenuBar,
      LibraryIcon
    }
  })
  export default class Library extends Vue {}
</script>

<template>
  <section class="global">
    <bar
      iconName="Bibliothèque"
      :filters="true"
      :separator="true"
      :links="{
        myGames: 'My Games',
        gift: 'Gift Inventory'
      }">
      <library-icon/>
    </bar>
    <router-view></router-view>
  </section>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import Bar from '../components/Contents/Bar.vue'
  import LibraryIcon from '../components/Svg/Menu/LibraryIcon.vue'

  @Component({
    components: {
      Bar,
      LibraryIcon
    }
  })
  export default class Library extends Vue {}
</script>

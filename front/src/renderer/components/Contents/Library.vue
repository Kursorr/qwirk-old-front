<template>
  <section class="global">
    <bar iconName="Bibliothèque">
      <library-icon/>
    </bar>
    <router-view></router-view>
  </section>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import Bar from './Bar.vue'
  import LibraryIcon from '../Svg/Menu/LibraryIcon.vue'

  @Component({
    components: {
      Bar,
      LibraryIcon
    }
  })
  export default class Library extends Vue {}
</script>

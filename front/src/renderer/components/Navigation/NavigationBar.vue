<template>
  <section class="container">
    <section class="components">
      <menue></menue>
      <rooms></rooms>
    </section>
    <profile></profile>
  </section>
</template>

<script lang="ts">
  import Menue from './Sections/Menu.vue'
  import Rooms from './Sections/Rooms.vue'
  import Profile from './Sections/Profile.vue'

  import { Component, Vue } from 'vue-property-decorator'

  @Component({
    components: {
      Menue,
      Rooms,
      Profile
    }
  })
  export default class NavigationBar extends Vue {
  }
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 240px;
    background: #202225;
  }

  .components {
    flex-direction: column;
    width: 240px;
    flex-grow: 1;
    background-color: #2e3136;
    overflow: auto;
    border-top-left-radius: 5px;
  }
</style>

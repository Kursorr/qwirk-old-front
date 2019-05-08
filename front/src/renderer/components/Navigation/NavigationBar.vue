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

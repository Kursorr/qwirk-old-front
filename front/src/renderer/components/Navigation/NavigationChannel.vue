<template>
  <section class="container">
    <section class="components">
      channels here
    </section>
    <profile></profile>
  </section>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import Profile from './Sections/Profile.vue'

  @Component({
    components: {
      Profile
    }
  })
  export default class NavigationChannel extends Vue {
  }
</script>

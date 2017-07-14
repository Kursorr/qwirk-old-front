<template>
  <section class="container">
    <section class="components">
      <chans></chans>
      <rooms></rooms>
    </section>
    <account></account>
  </section>
</template>

<script>
  import Chans from './Sections/Chans.vue'
  import Rooms from './Sections/Rooms.vue'
  import Account from './Sections/Account.vue'

  export default {
    components: {
      Chans,
      Rooms,
      Account
    }
  }
</script>

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
  import Chans from './Chans.vue'
  import Rooms from './Rooms.vue'
  import Account from './Account.vue'

  export default {
    components: {
      Chans,
      Rooms,
      Account
    }
  }
</script>

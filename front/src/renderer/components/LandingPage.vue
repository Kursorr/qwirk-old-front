<template>
  <section id="wrapper">
    <tchat></tchat>
  </section>
</template>

<script>
  import Tchat from './Tchat/Tchat.vue'

  export default {
    name: 'landing-page',
    components: {
      Tchat
    }
  }
</script>

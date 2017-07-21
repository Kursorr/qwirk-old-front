<template>
  <section id="wrapper">
    <emoji-picker></emoji-picker>
  </section>
</template>

<script>
  import EmojiPicker from './Tchat/EmojiPicker.vue'
  export default {
    name: 'landing-page',
    components: {
      EmojiPicker
    }
  }
</script>

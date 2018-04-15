<template>
  <form>
    <button id="file" type="button" @click="dropzoneToggle"></button>
    <textarea id="tchat" rows="1" placeholder="Envoyer un message"></textarea>
    <button id="emoji" type="button" @click="emojiToggle">😁</button>
  </form>
</template>

<script>
  export default {
    name: 'Bar',
    data () {
      return {
      }
    },
    methods: {
      dropzoneToggle () {
        this.$emit('toggledz')
      },
      emojiToggle () {
        this.$emit('togglemoji')
      }
    }
  }
</script>

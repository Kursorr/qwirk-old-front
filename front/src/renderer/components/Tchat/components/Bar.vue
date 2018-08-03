<template>
  <form>
    <button id="file" type="button" @click="dropzoneToggle"></button>
    <textarea id="tchat" rows="1" placeholder="Envoyer un message" :value="message" @keypress.enter="onChange"
    ></textarea>
    <button id="emoji" type="button" @click="emojiToggle">😁</button>
  </form>
</template>

<script>
  export default {
    name: 'Bar',
    props: ['message'],
    methods: {
      dropzoneToggle () {
        this.$emit('toggledz')
      },
      emojiToggle () {
        this.$emit('togglemoji')
      },
      onChange (e) {
        this.$emit('update', e.target.value)
      }
    }
  }
</script>

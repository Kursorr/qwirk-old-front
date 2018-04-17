<template>
  <Picker @click="pickEmoji" />
</template>

<script>
  import { Picker } from 'emoji-mart-vue'

  export default {
    name: 'picker',
    data () {
      return {
      }
    },
    components: {
      Picker
    },
    methods: {
      pickEmoji (emoji) {
        console.log('EmojiPicker Vue !')
        this.$emit('emoji', emoji.native)
      }
    }
  }
</script>

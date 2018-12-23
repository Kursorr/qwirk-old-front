<template>
  <Picker @click="pickEmoji"/>
</template>

<script lang="ts">
  const { Picker } = require('emoji-mart-vue')
  import { Component, Vue } from 'vue-property-decorator'

  @Component({
    components: {
      Picker
    }
  })
  export default class EmojiPicker extends Vue {
    emoji: any

    pickEmoji (emoji) {
      this.$emit('emoji', emoji.native)
    }
  }
</script>

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
  public emoji: any

  public pickEmoji (emoji: any) {
    this.$emit('emoji', emoji.native)
  }
}
</script>

<style>
  div.emoji-mart {
    overflow: hidden;
    align-self: flex-end;
    position: absolute;
    bottom: 55px;
  }
</style>

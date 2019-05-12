<template>
  <form>
    <button id="file" type="button" @click="dropzoneToggle"></button>
    <textarea id="tchat" rows="1" placeholder="Envoyer un message" :value="message" @keypress.enter="onChange"
    ></textarea>
    <button id="emoji" type="button" @click="emojiToggle">😁</button>
  </form>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Bar extends Vue {
  @Prop() public message?: string

  public dropzoneToggle () {
    this.$emit('toggledz')
  }

  public emojiToggle () {
    this.$emit('togglemoji')
  }

  public onChange (e: any) {
    this.$emit('update', e.target.value)
  }
}
</script>

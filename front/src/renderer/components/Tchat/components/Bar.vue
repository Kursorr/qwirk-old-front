<template>
  <form>
    <button id="file" type="button" @click="dropzoneToggle"></button>
    <textarea id="tchat" rows="1" placeholder="Envoyer un message" :value="message" @keypress.enter="onChange"
    ></textarea>
    <button id="emoji" type="button" @click="emojiToggle">😁</button>
    <search></search>
  </form>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator'
  import Search from './Search.vue'

  @Component({
    components: {
      Search
    }
  })
  export default class Bar extends Vue {
    @Prop() message: string

    dropzoneToggle () {
      this.$emit('toggledz')
    }

    emojiToggle () {
      this.$emit('togglemoji')
    }

    onChange (e) {
      this.$emit('update', e.target.value)
    }
  }
</script>

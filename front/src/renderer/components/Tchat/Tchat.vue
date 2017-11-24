<template>
  <section id="tchat">
    <section id="cpnts">
      <drop-zone></drop-zone>
      <emoji-picker></emoji-picker>
      <conversation></conversation>
      <bar></bar>
    </section>
    <members></members>
  </section>
</template>

<script>
  import Members from './components/Members.vue'
  import Bar from './components/Bar.vue'
  import DropZone from './components/DropZone.vue'
  import Conversation from './components/Conversation.vue'
  import EmojiPicker from './components/EmojiPicker.vue'

  export default {
    components: {
      Members,
      Bar,
      DropZone,
      Conversation,
      EmojiPicker
    }
  }
</script>

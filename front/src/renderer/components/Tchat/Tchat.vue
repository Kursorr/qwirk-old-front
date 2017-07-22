<template>
  <section id="tchat">
    <section id="cpnts">
      <conversation></conversation>
      <drop-zone></drop-zone>
      <emoji-picker></emoji-picker>
      <bar></bar>
    </section>
    <members></members>
  </section>
</template>

<script>
  import EmojiPicker from './components/EmojiPicker.vue'
  import Members from './components/Members.vue'
  import Bar from './components/Bar.vue'
  import DropZone from './components/DropZone.vue'
  import Conversation from './components/Conversation.vue'

  export default {
    components: {
      EmojiPicker,
      Members,
      Bar,
      DropZone,
      Conversation
    }
  }
</script>

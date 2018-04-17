<template>
  <section id="tchat">
    <section id="cpnts">
      <drop-zone v-if="toggleDropZone" />
      <conversation />
      <emoji-picker v-if="toggleEmoji" @emoji="append" />
      <bar
        @toggledz="toggleDropZone = !toggleDropZone"
        @togglemoji="toggleEmoji = !toggleEmoji"
      />
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
      EmojiPicker // Causes a slowdown
    },
    data () {
      console.log(this.$route.params)
      return {
        toggleDropZone: false,
        toggleEmoji: false
      }
    },
    methods: {
      append (emoji) {
        console.log('Tchat Vue !')
        console.log(emoji)
      }
    }
  }
</script>

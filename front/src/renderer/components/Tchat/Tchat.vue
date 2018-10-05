<template>
  <section id="tchat">
    <section id="cpnts">
      <drop-zone v-if="toggleDropZone" />
      <conversation />
      <emoji-picker v-if="toggleEmoji" @emoji="append" />
      <bar
        @toggledz="toggleDropZone = !toggleDropZone"
        @togglemoji="toggleEmoji = !toggleEmoji"
        :value="message"
        @update="getCurrentTap"
        @keypress.enter.native="onSubmit"
      />
    </section>
    <members></members>
  </section>
</template>

<script>
  import Vuex from 'vuex'
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
      return {
        toggleDropZone: false,
        toggleEmoji: false,
        message: ''
      }
    },
    methods: {
      append (emoji) {
        this.message += emoji
      },
      getCurrentTap (msg) {
        this.message = msg
      },
      onSubmit (e) {
        e.preventDefault()

        this.$socket.emit('SEND::MESSAGE', {
          route: this.$route.params,
          author: this.user,
          content: this.message
        })

        this.message = ''
        e.target.value = ''
      }
    },
    computed: {
      ...Vuex.mapGetters([
        'user'
      ])
    }
  }
</script>

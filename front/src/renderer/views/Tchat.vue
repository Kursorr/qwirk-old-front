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

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import * as Vuex from 'vuex'
import Members from '../components/Tchat/Members.vue'
import Bar from '../components/Tchat/Bar.vue'
import DropZone from '../components/Tchat/DropZone.vue'
import Conversation from '../components/Tchat/Conversation.vue'
import EmojiPicker from '../components/Tchat/EmojiPicker.vue'

@Component({
  components: {
    Members,
    Bar,
    DropZone,
    Conversation,
    EmojiPicker // Causes a slowdown
  },
  computed: {
    ...Vuex.mapGetters([
      'user'
    ])
  }
})
export default class Tchat extends Vue {
  public toggleDropZone: boolean =  false
  public toggleEmoji: boolean =  false
  public message: string =  ''
  public user: any

  public append (emoji: any) {
    this.message += emoji
  }

  public getCurrentTap (msg: any) {
    this.message = msg
  }

  public onSubmit (e: any) {
    e.preventDefault()

    if (this.message === '') {
      return false
    }

    this.$socket.emit('SEND::MESSAGE', {
      route: this.$route.params,
      author: this.user,
      content: this.message
    })

    this.message = ''
    e.target.value = ''

    setTimeout(() => {
      const tchatRoom: any = document.getElementById('convers')
      tchatRoom.scrollTop = tchatRoom.scrollHeight
    }, 50)
  }
}
</script>

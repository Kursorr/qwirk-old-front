<template>
  <section id="tchat">
    <section id="cpnts">
      <tchat-bar
        :filters="false"
        :separator="false"
        channel="quenti77"
        :privateMessage="true">
        <icon-base
          width="24"
          height="24"
          viewBox="0 0 24 24">
          <arobase-icon />
        </icon-base>
      </tchat-bar>
      <!--<tchat-bar
        :filters="false"
        :separator="false"
        channel="general"
        :privateMessage="false">
        <icon-base
          width="24"
          height="24"
          viewBox="0 0 24 24">
          <diese-icon />
        </icon-base>
      </tchat-bar>-->
      <drop-zone v-if="toggleDropZone" />
      <conversation />
      <emoji-picker v-if="toggleEmoji" @emoji="append" />
      <input-bar
        @toggledz="toggleDropZone = !toggleDropZone"
        @togglemoji="toggleEmoji = !toggleEmoji"
        :value="message"
        @update="getCurrentTap"
        @keypress.enter.native="onSubmit"/>
    </section>
    <members></members>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapGetters } from 'vuex'
import IconBase from '../components/IconBase.vue'
import ArobaseIcon from '../components/Svg/Bar/ArobaseIcon.vue'
import DieseIcon from '../components/Svg/Bar/DieseIcon.vue'
import TchatBar from '../components/Contents/TchatBar.vue'
import Members from '../components/Tchat/Members.vue'
import InputBar from '../components/Tchat/InputBar.vue'
import DropZone from '../components/Tchat/DropZone.vue'
import Conversation from '../components/Tchat/Conversation.vue'
import EmojiPicker from '../components/Tchat/EmojiPicker.vue'

@Component({
  components: {
    IconBase,
    ArobaseIcon,
    DieseIcon,
    TchatBar,
    Members,
    InputBar,
    DropZone,
    Conversation,
    EmojiPicker // Causes a slowdown
  },
  computed: {
    ...mapGetters([
      'user',
      'currentChannel'
    ])
  }
})
export default class Tchat extends Vue {
  public toggleDropZone: boolean = false
  public toggleEmoji: boolean = false
  public message: string = ''
  public user: any

  public append (emoji: any) {
    this.message += emoji
  }

  public getCurrentTap (msg: any) {
    this.message = msg
  }

  public onSubmit (e: any) {
    e.preventDefault()

    if (this.message === '')
      return false

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
    }, 500)
  }
}
</script>

<style>
</style>

<template>
  <section id="main">
    <section id="tchat">
      <navigation-channel v-if="user && this.$route.params.type === 'public'"
      ></navigation-channel>
      <section id="cpnts">
        <tchat-bar
          v-if="this.$route.path.includes('landing-page')"
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
        <tchat-bar
          v-if="this.$route.path.includes('server')"
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
        </tchat-bar>
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
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapGetters } from 'vuex'
import IconBase from '../components/Svg/IconBase.vue'
import ArobaseIcon from '../components/Svg/Bar/ArobaseIcon.vue'
import DieseIcon from '../components/Svg/Bar/DieseIcon.vue'
import TchatBar from '../components/Contents/TchatBar.vue'
import Members from '../components/Tchat/Members.vue'
import InputBar from '../components/Tchat/InputBar.vue'
import DropZone from '../components/Tchat/DropZone.vue'
import Conversation from '../components/Tchat/Conversation.vue'
import EmojiPicker from '../components/Tchat/EmojiPicker.vue'
import NavigationChannel from '../components/Navigation/NavigationChannel.vue'

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
    EmojiPicker, // Causes a slowdown
    NavigationChannel
  },
  computed: {
    ...mapGetters([
      'user',
      'currentChannel',
      'currentServer'
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

    console.log(this.currentServer)

    this.$socket.emit('SEND::MESSAGE', {
      route: this.$route.params,
      author: this.user,
      content: this.message,
      serverId: this.currentServer.id
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
  #main {
    display: flex;
    height: 100%;
    flex: 2;
  }
</style>

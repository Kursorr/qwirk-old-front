<template>
  <section id="app">
    <servers-bar></servers-bar>
    <section id="mainContent">
      <section class="title-bar">
        <button class="win-minimize" @click="minimizeWindow()"></button>
        <button class="win-maximize" @click="maximizeWindow()"></button>
        <button class="win-close" @click="closeWindow()"></button>
      </section>
      <router-view></router-view>
    </section>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ServersBar from './components/ServersBar.vue'

require('../../static/style/style.scss')
require('../../static/style/monokai-sublime.min.scss')

@Component({
  components: {
    ServersBar
  }
})
export default class App extends Vue {
  private minimizeWindow () {
    this.getFocusWindow().minimize()
  }

  private maximizeWindow () {
    if (this.getFocusWindow().isMaximized()) {
      this.getFocusWindow().restore()
    } else {
      this.getFocusWindow().maximize()
    }
  }

  private closeWindow () {
    this.getFocusWindow().close()
  }

  private getFocusWindow () {
    return this.$electron.remote.BrowserWindow.getFocusedWindow()
  }

  private mounted () {
    // window.io = this.$socket
    this.$socket.emit('connection')
    // this.axios.get('https://www.google.fr')
  }
}
</script>


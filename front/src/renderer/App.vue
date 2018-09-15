<template>
  <section id="app">
    <section class="title-bar">
      <button class="win-minimize" @click="minimizeWindow()"></button>
      <button class="win-maximize" @click="maximizeWindow()"></button>
      <button class="win-close" @click="closeWindow()"></button>
    </section>
    <section class="full-content">
      <router-view></router-view>
    </section>
  </section>
</template>

<script>
  require('../../static/style/style.css')
  require('../../static/style/monokai-sublime.min.css')

  export default {
    name: 'front',
    methods: {
      minimizeWindow () {
        this.getFocusWindow().minimize()
      },
      maximizeWindow () {
        if (this.getFocusWindow().isMaximized()) {
          this.getFocusWindow().restore()
        } else {
          this.getFocusWindow().maximize()
        }
      },
      closeWindow () {
        this.getFocusWindow().close()
      },
      getFocusWindow () {
        return this.$electron.remote.BrowserWindow.getFocusedWindow()
      }
    },
    mounted () {
      window.io = this.$socket
      this.$socket.emit('connection')
    }
  }
</script>

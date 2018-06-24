<template>
  <section id="app">
    <section class="title-bar">
      <button class="win-minimize"></button>
      <button class="win-maximize"></button>
      <button class="win-close"></button>
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
    mounted () {
      window.io = this.$socket
      this.$socket.emit('connection')
    }
  }
</script>

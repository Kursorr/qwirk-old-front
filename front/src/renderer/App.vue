<template>
  <section id="app">
    <section class="title-bar">
      <button class="win-minimize"></button>
      <button class="win-maximize"></button>
      <button class="win-close"></button>
    </section>
    <section class="full-content">
      <sidebar></sidebar>
      <router-view></router-view>
    </section>
  </section>
</template>

<script>
  import Sidebar from './components/Sidebar/Sidebar.vue'
  import EmojiPicker from './components/Tchat/EmojiPicker.vue'
  require('../../static/style/style.css')

  export default {
    name: 'front',
    components: {
      Sidebar, EmojiPicker
    }
  }
</script>

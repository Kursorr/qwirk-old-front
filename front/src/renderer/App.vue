<template>
  <section id="app">
    <section class="title-bar">
      <button class="win-minimize"></button>
      <button class="win-maximize"></button>
      <button class="win-close"></button>
    </section>
    <auth></auth>
    <section class="full-content">
      <sidebar></sidebar>
      <router-view></router-view>
    </section>
  </section>
</template>

<script>
  import Sidebar from './components/Sidebar/Sidebar.vue'
  import Auth from './components/Modals/Auth.vue'
  require('../../static/style/style.css')

  export default {
    name: 'front',
    components: {
      Sidebar, Auth
    }
  }
</script>

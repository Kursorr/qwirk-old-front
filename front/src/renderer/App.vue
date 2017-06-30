<template>
  <section id="app">
    <section class="title-bar">
      <button class="win-minimize"></button>
      <button class="win-maximize"></button>
      <button class="win-close"></button>
    </section>
    <router-view></router-view>
  </section>
</template>

<script>
  require('../../static/style/style.css')
  export default {
    name: 'front'
  }
</script>

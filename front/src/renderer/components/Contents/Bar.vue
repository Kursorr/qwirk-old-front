<template>
  <section class="bar">
    <section class="filters">
      <div id="friendIconBar">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <slot/>
        </svg>
        <span class="color bar">{{ iconName }}</span>
      </div>
      <div class="separator"></div>
      <div v-for="(text, link) in links">
        <div v-if="text === 'Ajouter un ami'">
          <router-link :to="{name: link}" class="filt add">{{ text }}</router-link>
        </div>
        <div v-else>
          <router-link :to="{name: link}" class="filt">{{ text }}</router-link>
        </div>
      </div>
    </section>
  </section>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  @Component
  export default class Bar extends Vue {
    @Prop() iconName: string
    @Prop() links: any
  }
</script>

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
      <router-link :to="{name: 'addFriend'}" class="filt add">Ajouter un ami</router-link>
      <div class="separator"></div>
      <router-link :to="{name: 'allFriend'}" class="filt">Tous</router-link>
      <router-link :to="{name: 'online'}" class="filt">En ligne</router-link>
      <a href="#" class="filt">En attente</a>
      <div class="separator"></div>
      <a href="#" class="filt">Bloqué</a>
    </section>
  </section>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  @Component
  export default class Bar extends Vue {
    @Prop() iconName: string;
  }
</script>

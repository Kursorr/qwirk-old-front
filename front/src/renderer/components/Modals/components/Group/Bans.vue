<template>
  <section>
    <h2 class="titleSection">1 banni</h2>
    <p class="section-description">
      Les interdictions par défaut sont par compte et IP.
      Un utilisateur peut contourner une interdiction de propriété intellectuelle en utilisant un proxy.
      Le contournement des interdictions peut être très difficile en permettant la vérification du téléphone</p>
    <section class="listing">
      <section class="ban-member">
        <avatar :url="null" size="small" @click.native="toggleStatus()"></avatar>
        <span>Grafikart</span>
        <span> #2497</span>
      </section>
    </section>
  </section>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import Avatar from '../../../Contents/components/Avatar.vue'

  @Component({
    components: {
      Avatar
    }
  })
  export default class Members extends Vue {}
</script>

<style lang="scss" scoped>
  section#ban > section > section.listing {
    display: flex;
    flex-direction: column;
    margin-top: 25px;

    section.ban-member {
      display: flex;
      border-top: solid hsla(218, 5%, 47%, .3) 1px;
      padding: 10px;
      align-items: center;
      width: 100%;

      &:hover {
        background-color: #33363c;
        border-color: #2b2e32;
        cursor: pointer;
      }
    }
  }
</style>

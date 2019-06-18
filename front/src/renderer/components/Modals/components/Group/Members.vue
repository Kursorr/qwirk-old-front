<template>
  <section>
    <h2 class="titleSection">1 membre - <a href="#">Purger</a></h2>
    <input type="text" placeholder="Rechercher un membre">

    <section class="listing">
      <section class="member">
        <avatar :url="null" size="small" @click.native="toggleStatus()"></avatar>
        <span>Grafikart</span>
        <span> #2497</span>
        <button type="button" class="add-role">+</button>
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
  section#member > section > h2 > a {
    color: #f04747;
    font-size: 12px;
    text-transform: none;
  }

  section#member > section > section.listing {
    margin-top: 25px;
  }

  section.listing > section.member {
    display: flex;
    align-items: center;
    padding: 15px;
    border-top: solid hsla(218, 5%, 47%, .3) 1px;

    &:hover {
      background-color: #33363c;
      border-color: #2b2e32;
      cursor: pointer;
    }

    button.add-role {
      background: none;
      border: solid #4f545c 1px;
      padding: 5px 10px;
      margin-left: 15px;
    }
  }
</style>

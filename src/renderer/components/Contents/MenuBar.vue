<template>
  <section class="bar">
    <section class="filters">
      <div id="friendIconBar">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <slot/>
        </svg>
        <span class="color bar">{{ iconName }}</span>
      </div>
      <div v-if="separator" class="separator"></div>
      <div v-for="(text, link) in links">
        <router-link v-if="text === 'Ajouter un ami'" :to="{name: link}" class="filt add">
          {{ text }}
        </router-link>
        <router-link v-else :to="{name: link}">{{ text }}</router-link>
      </div>
    </section>
  </section>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  @Component
  export default class MenuBar extends Vue {
    @Prop() filters: boolean
    @Prop() separator: boolean
    @Prop() iconName: string
    @Prop() links: any
  }
</script>

<style lang="scss" scoped>
  section.bar {
    section.filters {
      display: flex;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: .4px;
      flex: 1;

      div {
        display: flex;
        justify-content: center;
        align-items: center;

        a {
          margin-left: 20px;
          margin-right: 20px;
          padding: 3px 5px;
          color: #B9BBBE;

          &:hover {
            border-radius: 4px;
            background-color: #292b2f;
            color: #FFF;
          }
        }
      }

      div#friendIconBar {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 18px;

        svg {
          color: #FFF;
        }

        span {
          margin-left: 15px;
        }
      }
    }
  }

  a.filt.add {
    background-color: #7289DA;
    color: #FFF!important;
  }

  a.filt.add.router-link-exact-active.router-link-active {
    border-radius: 4px;
    background-color: #7289DA;
    padding: 3px 5px;
    font-size: 14px;
    font-style: normal;
    font-weight: 100;
    color: #FFF;
  }

  .add, .router-link-exact-active.router-link-active {
    border-radius: 4px;
    background-color: #40444b;
    padding: 3px 5px;
    font-size: 14px;
    font-style: normal;
    font-weight: 100;
    color: #FFF;
  }

  .add:hover {
    border-radius: 4px;
    background-color: #40444b;
  }

  a.filt.router-link-exact-active.router-link-active {
    background-color: #40444b;
    color: #FFF!important;
  }
</style>

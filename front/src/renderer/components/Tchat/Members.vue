<template>
  <section class="members">
    <ul>
      <li>
        <section class="avatar">
          <avatar :url="null" size="small"></avatar>
          <div class="status"></div>
        </section>
        <section class="profil">
          <span class="username">Ravaniss</span>
        </section>
      </li>
    </ul>
  </section>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator/lib/vue-property-decorator'
  import Avatar from '../Contents/components/Avatar.vue'

  @Component({
    components: {
      Avatar
    }
  })
  export default class DropZone extends Vue {
  }
</script>

<style lang="scss" scoped>
  section.members {
    width: 240px;
    background-color: #2e3136;
    display: flex;
    justify-content: center;
    overflow: auto;

    ul {
      margin-top: 15px;
      width: 100%;

      li {
        display: flex;
        flex-direction: row;
        padding: 10px 0 10px 10px;
        margin-left: 5px;
        margin-right: 5px;
        border-radius: 4px;

        &:hover {
          background: linear-gradient(90deg, #282b30 85%, #2f3136);
          cursor: pointer;
        }

        section.profil {
          display: flex;
          align-items: center;
        }
      }
    }
  }
</style>

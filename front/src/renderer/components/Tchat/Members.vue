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
  section.avatar {
    position: relative;
    margin-right: 10px;
    border-radius: 50%;

    &:hover {
      cursor: pointer;
    }

    div.status {
      position: absolute;
      border-radius: 50%;
      width: 15px;
      height: 15px;
      top: 18px;
      left: 16px;
      border: solid #2e3136 2px;
      background-color: #FFF;
    }
  }
</style>

<template>
  <section class="members">
    <ul>
      <li>
        <section class="avatar">
          <avatar :url="null" size="normal"></avatar>
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
  import { Component, Vue } from 'vue-property-decorator'
  import Avatar from '../../Contents/components/Avatar.vue'

  @Component({
    components: {
      Avatar
    }
  })
  export default class DropZone extends Vue {
  }
</script>

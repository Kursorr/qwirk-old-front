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
  import Avatar from '../../Contents/components/Avatar.vue'

  export default {
    components: {
      Avatar
    }
  }
</script>

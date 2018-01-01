<template>
  <section id="convers">
    <section class="onechat">
      <section class="avatar">
        <avatar :url="null" size="small"></avatar>
      </section>
      <section class="text">
        <span class="username">Ravaniss <span class="hours">l'heure sera indiquée ici !</span></span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam commodi corporis cumque enim eos esse exercitationem ipsam labore, maiores maxime natus nulla obcaecati quidem, reprehenderit temporibus. Omnis recusandae sapiente suscipit!</p>
      </section>
    </section>
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

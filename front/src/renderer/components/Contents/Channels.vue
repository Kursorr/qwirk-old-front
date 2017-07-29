<template>
  <section class="global">
    <section class="bar">
      <section class="filters">
        <a href="#" class="filt add">Créer un channel</a>
        <div class="separator"></div>
        <router-link to="/all_channel" class="filt">Tous</router-link>
        <a href="#" class="filt">Tous</a>
        <a href="#" class="filt">En ligne</a>
        <a href="#" class="filt">En attente</a>
        <div class="separator"></div>
        <a href="#" class="filt">Bloqué</a>
        <div class="separator"></div>
        <router-link to="/join" class="filt">Rejoindre</router-link>
      </section>
    </section>
    <router-view></router-view>
  </section>
</template>

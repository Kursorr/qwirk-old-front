<template>
  <section class="global">
    <section class="bar">
      <section class="filters">
        <router-link to="/add_friend" class="filt add">Ajouter un ami</router-link>
        <div class="separator"></div>
        <router-link to="/all" class="filt">Tous</router-link>
        <a href="#" class="filt">En ligne</a>
        <a href="#" class="filt">En attente</a>
        <div class="separator"></div>
        <a href="#" class="filt">Bloqué</a>
      </section>
    </section>
    <router-view></router-view>
  </section>
</template>

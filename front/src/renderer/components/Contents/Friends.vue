<template>
  <section class="global">
    <section class="bar">
      <section class="filters">
        <router-link :to="{name: 'addFriend'}" class="filt add">Ajouter un ami</router-link>
        <div class="separator"></div>
        <router-link :to="{name: 'allFriend'}" class="filt">Tous</router-link>
        <router-link :to="{name: 'online'}" class="filt">En ligne</router-link>
        <a href="#" class="filt">En attente</a>
        <div class="separator"></div>
        <a href="#" class="filt">Bloqué</a>
      </section>
    </section>
    <router-view></router-view>
  </section>
</template>

<template>
  <section class="chans">
    <router-link :to="{path:'/landing-page/friends'}" class="chan" tag="section">
      <div class="logo-friend"></div>
      <span>Amis</span>
    </router-link>

    <router-link :to="{path:'/landing-page/groups'}" class="chan" tag="section">
      <div class="logo-groups"></div>
      <span>Groupes</span>
    </router-link>

    <router-link :to="{path:'/landing-page/channels'}" class="chan" tag="section">
      <div class="logo-channels"></div>
      <span>Channels</span>
    </router-link>
  </section>
</template>

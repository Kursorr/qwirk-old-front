<template>
  <section class="chans">
    <router-link :to="{path:'/landing-page/activity'}" class="chan" tag="section">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <activity-icon />
      </svg>
      <span class="color">Activité</span>
    </router-link>

    <router-link :to="{path:'/landing-page/library'}" class="chan" tag="section">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <library-icon />
      </svg>
      <span class="color">Bibliothèque</span>
    </router-link>

    <router-link :to="{path:'/landing-page/shop'}" class="chan" tag="section">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <shop-icon />
      </svg>
      <span class="color">Boutique</span>
    </router-link>

    <router-link :to="{path:'/landing-page/friends'}" class="chan" tag="section">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <friend-icon />
      </svg>
      <span class="color">Amis</span>
    </router-link>

  </section>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import FriendIcon from '../../Svg/Menu/FriendIcon.vue'
  import ShopIcon from '../../Svg/Menu/ShopIcon.vue'
  import LibraryIcon from '../../Svg/Menu/LibraryIcon.vue'
  import ActivityIcon from '../../Svg/Menu/ActivityIcon.vue'

  @Component({
    components: {
      FriendIcon,
      ShopIcon,
      LibraryIcon,
      ActivityIcon
    }
  })
  export default class Menu extends Vue {}
</script>

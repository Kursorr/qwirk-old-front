<template>
  <div id="landingPage">
    <!--
    <div class="panel left" :class="[transition ? 'transition' : '']"></div>
    <button @click="play()">Play</button>
    <div class="panel right" :class="[transition ? 'transition' : '']"></div>-->

    <icon-base
      icon-name="moon"
      width="309"
      height="155"
      viewBox="0 0 309 155">
      <moon-icon/>
    </icon-base>

    <icon-base
      icon-name="open-chest"
      width="76.875px"
      height="68px"
      viewBox="17.375 -51.75 76.875 68">
      <open-chest-icon/>
    </icon-base>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import IconBase from '../components/IconBase.vue'
  import OpenChestIcon from '../components/Svg/Game/chest/OpenChestIcon.vue'
  import MoonIcon from '../components/Svg/Game/MoonIcon.vue'

  @Component({
    components: {
      IconBase,
      MoonIcon,
      OpenChestIcon
    }
  })
  export default class Success extends Vue {
    public transition: boolean = false;

    play () {
      this.transition = !this.transition;
    }
  }
</script>

<style lang="scss">
  #landingPage {
    display: flex;
    height: 100%;
    width: 100%;
    overflow-x: hidden;

    button {
      position: absolute;
    }

    .panel {
      &.left {
        background: url('https://cdn.discordapp.com/attachments/569872512519897089/609151038309662721/unknown.png') no-repeat;
        background-size: cover;
        width: 70%;
        background-position-x: -136px;
        transition: all 1s ease-out;

        &.transition {
          transform: translateX(-100px);
          transition: all 1s ease-out;
        }
      }

      &.right {
        background: url('https://cdn.discordapp.com/attachments/569872512519897089/609151075513270273/unknown.png') no-repeat;
        background-size: cover;
        width: 74%;
        transition: all 1s ease-out;

        &.transition {
          transform: translateX(100px);
          transition: all 1s ease-out;
        }
      }
    }
  }
</style>

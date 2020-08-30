<template>
  <section class="global">
    <menu-bar
        iconName="Boutique"
        :filters="true"
        :separator="true">
      <shop-icon />
    </menu-bar>

    <div id="image">
      <div class="content">
        <div class="details">
          <div class="text">
            <span class="featured">featured game</span>
            <h1 class="title">Dead Cells</h1>
            <p class="infos">
              Explore an ever changing castle in this rogue-like
              action platformer. Each death progresses towards
              unlocking new spells, weapons, or levels.
            </p>

            <div class="priceLearnMore">
              <span class="price">$24.99</span>
              <button>Learn More</button>
            </div>
          </div>

          <video controls class="video" src="../assets/store/dead-cells-trailer.mp4" ref="video"></video>
        </div>

        <div class="carousel">
          <icon-base
              icon-name="leftArrow"
              width="24"
              height="24"
              viewBox="0 0 24 24">
            <left-arrow/>
          </icon-base>

          <div class="carousel-item"></div>
        </div>
      </div>
    </div>

    <router-view></router-view>
  </section>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  import MenuBar from '../components/Contents/MenuBar.vue'
  import ShopIcon from '../components/Svg/Menu/ShopIcon.vue'
  import IconBase from '../components/Svg/IconBase.vue'
  import LeftArrow from '../components/Svg/LeftArrow.vue'

  @Component({
    components: {
      MenuBar,
      IconBase,
      ShopIcon,
      LeftArrow
    }
  })
  export default class Store extends Vue {}
</script>

<style lang="scss">
  #image {
    background: url('../assets/store/deadcells.jpg') no-repeat;
    background-size: cover;
    height: 60%;
    margin-top: 1px;
    display: flex;
    justify-content: center;
    align-items: center;

    .content {
      width: 80%;
      height: 100%;
      display: flex;
      flex-direction: column;

      .details {
        display: flex;
        height: 90%;
        align-items: center;

        .text {
          width: 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;

          .featured {
            text-transform: uppercase;
            color: #D6D7D8;
            font-size: 12px;
          }

          .title {
            margin: 10px 0;
            color: #FFF;
            font-size: 24px;
          }

          .infos {
            width: 75%;
            color: #FFF;
            margin-bottom: 25px;
            line-height: 25px;
          }

          .priceLearnMore {
            display: flex;
            align-items: center;

            .price {
              color: #FFF;
              margin-right: 20px;
            }

            button {
              background: transparent;
              border: solid #7e7f84 0.5px;
              font-size: 12px;
              padding: 8px 16px;

              &:hover {
                border-color: #FFF;
              }
            }
          }
        }

        .video {
          width: 50%;
          object-position: center;
          object-fit: cover;
        }
      }

      .carousel {
        display: flex;
        align-items: center;
        justify-content: center;

        .carousel-item {
          background-color: mediumpurple;
          height: 44px;
          width: 80px;
          border-radius: 4px;
        }
      }
    }
  }
</style>

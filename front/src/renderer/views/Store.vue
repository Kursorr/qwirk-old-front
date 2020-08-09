<template>
  <section class="global">
    <menu-bar
        iconName="Boutique"
        :filters="true"
        :separator="true">
      <library-icon/>
    </menu-bar>

    <div id="image">
      <div class="content">
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
    </div>

    <router-view></router-view>
  </section>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  import MenuBar from '../components/Contents/MenuBar.vue'
  import LibraryIcon from '../components/Svg/Menu/LibraryIcon.vue'

  @Component({
    components: {
      MenuBar,
      LibraryIcon
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
      display: flex;

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
        height: 270px;
        width: 50%;
        object-position: center;
        object-fit: cover;
      }
    }
  }
</style>

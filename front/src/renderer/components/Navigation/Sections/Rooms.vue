<template>
  <section class="rooms">
    <!-- Tous les MP -->
    <section class="room">
      <h2>Messages Privés</h2>
      <router-link
        @click.native="idChan()" :to="{name:'tchat', params: { convId: 123, type: 'private' }}"
        class="chan set"
        tag="section">
        <section>
          <section class="avatar">
            <avatar :url="null" size="small"></avatar>
            <div class="status"></div>
          </section>
          <span class="color">Quenti77</span>
        </section>
        <button class="close-chan"></button>
      </router-link>
    </section>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import * as Vuex from 'vuex'
import store from '../../../vuex/store'
import Avatar from '../../Contents/components/Avatar.vue'

@Component({
  store,
  components: {
    Avatar
  },
  computed: {
    ...Vuex.mapGetters([
      'user'
    ])
  }
})
export default class Rooms extends Vue {
  public channel: any = {
    convId: 0,
    type: ''
  }
  public user!: any

  public idChan () {
    this.$socket.emit('GET::MESSAGES', this.$route.params.convId)
  }
}
</script>

<style lang="scss" scoped>
  section.rooms {
    flex: 1;

    section.room {
      h2 {
        margin: 15px 0;
        padding: 0 15px;
        font-size: 13px;
        text-transform: uppercase;
        color: #758080;
      }
      span { flex: 1; }

      section.chan {
        > section {
          display: flex;
          align-items: center;
        }

        button.close-chan {
          display: none;
          background: transparent url('../../../assets/close.png') no-repeat;
          background-size: 15px;
          width: 20px;
          height: 20px;
          color: #758080;
          border: none;
          cursor: pointer;
          margin-top: 6px;
        }
      }

      &:hover button.close-chan {
        display: block;
      }
    }
  }

  section.chan {
    display: flex;
    align-items: center;
    padding: 8px 4px;
    font-size: 16px;
    color: #f6f6f7;
    text-align: center;
    border: none;
    cursor: pointer;
    transition: all 200ms ease;
    border-radius: 2px;
    margin-right: 10px;

    > div {
      width: 30px;
      height: 30px;
      opacity: 0.6;
      transition: opacity .05s;
      margin-right: 12px;
    }

    > a {
      height: 100%;
      width: 100%;
      text-align: left;
      padding: 8px 0;
    }

    &.set {
      justify-content: space-between;
      margin-left: 10px;
    }
  }
</style>

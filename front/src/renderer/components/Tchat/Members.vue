<template>
  <section class="members">
    <ul>
      <li v-for="user in users">
        <section class="avatar">
          <avatar :url="user.avatar" size="small"></avatar>
          <div class="status" :class="user.status"></div>
        </section>
        <section class="profil">
          <span class="username">{{ user.pseudo }}</span>
        </section>
      </li>
    </ul>
  </section>
</template>

<script>
  import { Component, Vue } from 'vue-property-decorator/lib/vue-property-decorator'
  import Avatar from '../Contents/components/Avatar.vue'
  import { Store, mapGetters } from 'vuex'

  @Component({
    Store,
    computed: {
      ...mapGetters([
        'currentChannel'
      ])
    },
    components: {
      Avatar
    },
    sockets: {
      getUsersFromChannel(data) {
        this.users = data
      }
    }
  })
  export default class Members extends Vue {
    users = []
  }
</script>

<style lang="scss" scoped>
  section.members {
    width: 240px;
    background-color: #2e3136;
    display: flex;
    justify-content: center;
    overflow: auto;

    ul {
      margin-top: 15px;
      width: 100%;

      li {
        display: flex;
        flex-direction: row;
        padding: 10px 0 10px 10px;
        margin-left: 5px;
        margin-right: 5px;
        border-radius: 4px;

        &:hover {
          background: linear-gradient(90deg, #282b30 85%, #2f3136);
          cursor: pointer;
        }

        section.profil {
          display: flex;
          align-items: center;
        }
      }
    }
  }
</style>

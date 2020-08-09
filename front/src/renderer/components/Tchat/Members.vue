<template>
  <section class="members">
    <div id="userInfo" v-if="userInfo"
         v-click-outside="hideUserInfo"
         :style="positionContainer">
      <div class="avatarPseudo">
        <div class="avatar outside">
          <avatar :url="userInfo.avatar" size="normal"></avatar>
          <div class="status" :class="userInfo.status"></div>
        </div>
        <div class="profil">
          <span class="username">{{ userInfo.pseudo }}</span>
          <span class="tag">#{{ userInfo.tag }}</span>
        </div>
      </div>

      <div id="roles">
        <h1>Rôles</h1>
        some roles here
      </div>

      <div id="sendMsg">
        <input type="text" :placeholder="placeholder">
      </div>
    </div>

    <ul>
      <li v-for="(user, index) in users" @click.stop.prevent="getUserInfo(user, index)">
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

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import Avatar from '../Contents/components/Avatar.vue'
  import { Store, mapGetters, mapActions } from 'vuex'

  const HEIGHT = 54

  @Component({
    Store,
    computed: {
      ...mapGetters([
        'currentChannel',
        'users',
      ]),
      placeholder() {
        return `Envoyer un message à ${this.userInfo.pseudo}`
      },
      positionContainer() {
        let calculatedTop = this.userInfo.index * HEIGHT
        const windowHeight = window.innerHeight

        if ((calculatedTop + 253 + 38) > windowHeight) {
          calculatedTop = windowHeight - 253 - 38
        }

        return {
          transform: `translateY(${calculatedTop}px)`
        }
      }
    },
    methods: {
      ...mapActions([
        'setUsers'
      ])
    },
    components: {
      Avatar
    },
    sockets: {
      getUsersFromChannel(data) {
        this.setUsers(data)
      }
    }
  })
  export default class Members extends Vue {
    userInfo = null

    public getUserInfo (user, index) {
      if (this.userInfo !== null && this.userInfo === user) {
        this.userInfo = null
        return
      }

      this.userInfo = {
        pseudo: user.pseudo,
        avatar: user.avatar,
        tag: user.tag,
        status: user.status,
        index
      }
    }

    public hideUserInfo () {
      this.userInfo = null
    }
  }
</script>

<style lang="scss" scoped>
  section.members {
    width: 240px;
    background-color: #2e3136;
    display: flex;
    justify-content: center;

    ul {
      width: calc(100% + 0px);
      overflow-y: scroll;

      li {
        display: flex;
        flex-direction: row;
        padding: 10px 0 10px 10px;
        margin-left: 5px;
        margin-right: 5px;
        border-radius: 4px;
        position: relative;

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

    div#userInfo {
      z-index: 9999;
      border:solid black 1px;
      position: absolute;
      right: 220px;
      top: 38px;
      width: 250px;
      box-shadow: 0 2px 10px 0 rgba(0,0,0,.2), 0 0 0 1px rgba(32,34,37,.6);
      border-radius: 5px;
      overflow: hidden;

      .avatarPseudo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #202225;

        .avatar.outside {
          margin: 15px 5px;

          .status {
            height: 24px;
            width: 24px;
            top: 58px;
            left: 56px;
            border: solid #202225 4px;
          }
        }

        .profil {
          .username {
            font-weight: 600;
          }

          .tag {
            color: hsla(0,0%,100%,.6);
          }
        }
      }

      #roles {
        background-color: #2f3136;
        color: hsla(0,0%,100%,.8);
        padding: 12px 10px 10px;

        h1 {
          color: #72767d;
          text-transform: uppercase;
          margin-bottom: 8px;
          font-size: 12px;
          font-weight: 700;
        }
      }

      #sendMsg {
        border-top: solid rgba(32,34,37,.3) 1px;
        background-color: #2f3136;
        color: hsla(0,0%,100%,.8);
        padding: 12px 10px 10px;

        input {
          background-color: #36393f;
          border-color: #23262a;
          color: hsla(0,0%,100%,.7);
          border-radius: 3px;
          width: 100%;
          font-size: 14px;
          line-height: 18px;
          padding: 8px 10px;
          resize: none;
        }
      }
    }
  }


</style>

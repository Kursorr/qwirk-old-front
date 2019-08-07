<template>
  <section class="view">
    <section class="table-header">
      <section class="table-header-col name">Nom</section>
      <div class="separator"></div>
      <section class="table-header-col serverStatus">Status</section>
      <div class="separator"></div>
      <section class="table-header-col common">Groupe en commun</section>
      <div class="separator"></div>
    </section>

    <section class="table-content">
      <section class="table-line" v-for="friend in friends">
        <section class="table-line-name">
          <img class="avatar" :src="'http://localhost:4100/avatars/' + friend.avatar">
          <section class="tag-name">
            <span class="pseudo">{{ friend.pseudo }}</span>
            <span class="tag">#{{ friend.tag }}</span>
          </section>
        </section>

        <section class="table-line-status">
          <div class="status"></div>
        </section>

        <section class="table-line-common">
          <a href="#">
            <div class="avatar-group"></div>
          </a>
        </section>

        <section class="table-line-actions">
          <button
            class="action accept"
            v-if="!friend.requestedBy"
            @click="acceptFriend(friend)">
            <icon-base
              icon-name="accept"
              width="24"
              height="24"
              viewBox="0 0 24 24">
              <accept-icon/>
            </icon-base>
          </button>
          <button
            class="action revoke"
            @click="revokeFriend(friend)">
            <icon-base
              icon-name="revoke"
              width="16"
              height="16"
              viewBox="0 0 16 16">
              <revoke-icon/>
            </icon-base>
          </button>
        </section>
      </section>
    </section>
  </section>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import { Store, mapGetters } from 'vuex'

  import IconBase from '../../IconBase.vue'
  import RevokeIcon from '../../Svg/Grids/RevokeIcon.vue'
  import AcceptIcon from '../../Svg/Grids/AcceptIcon.vue'

  @Component({
    components: {
      IconBase,
      AcceptIcon,
      RevokeIcon
    },
    Store,
    computed: {
      ...mapGetters([
        'user'
      ])
    },
    sockets: {
      getFriends (data) {
        this.friends = data.filter(d => d.status === 2)
        this.requestedBy = data.filter(d => d.requestedBy === '')
      },
      acceptedFriend () {
        this.$socket.emit('GET::FRIENDS', this.user.id)
      },
      revokedFriend () {
        this.$socket.emit('GET::FRIENDS', this.user.id)
      }
    },
  })
  export default class FriendGrid extends Vue {
    friends = ''
    requestedBy = ''

    acceptFriend (friend) {
      this.$socket.emit('GET::NEW::FRIEND', {
        user: this.user.id,
        friend: friend.pseudo
      })
    }

    revokeFriend (friend) {
      this.$socket.emit('REVOKE::FRIEND', {
        user: this.user.id,
        friend: friend.pseudo
      })
    }

    mounted () {
      if (this.user) {
        if (this.user.id) {
          this.$socket.emit('GET::FRIENDS', this.user.id)
        }
      }
    }

  }
</script>

<style lang="scss" scoped>
  img.avatar {
    height: 30px;
    width: 30px;
  }

  .name {
    width: 200px;
  }

  .serverStatus {
    width: 140px;
    margin-left: 20px;
  }

  .common {
    width: 200px;
    margin-left: 20px;
  }

  .table-line {
    height: 62px;
    display: flex;
    flex-direction: row;
    padding: 2px 12px 0 12px;
    font-weight: 500;
    font-size: 16px;
    overflow: hidden;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    &:hover {
      background-color: #414449;

      > .table-line-actions {
        visibility: visible;
      }
    }

    .table-line-name {
      color: hsla(0, 0%, 100%, .6);
      display: flex;
      align-items: center;

      .avatar {
        background: url(https://cdn.discordapp.com/icons/85154866468487168/3c688e03576b5d129a527efc237ba24e.webp) no-repeat;
        background-size: 30px;
        /* Need to be removed */
      }

      .tag-name {
        display: flex;
        align-items: center;
        width: 160px;
      }
    }

    .table-line-common {
      display: flex;
      align-items: center;
      margin-left: 162px;

      .avatar-group {
        height: 30px;
        width: 30px;
        background-image: url(https://cdn.discordapp.com/icons/85154866468487168/3c688e03576b5d129a527efc237ba24e.webp);
        border-radius: 50%;
        background-size: 30px 30px;
      }
    }

    .table-line-actions {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      visibility: hidden;

      button.action {
        height: 36px;
        width: 36px;
        background-color: #2f3136;

        &.revoke {
          padding: 0;

          &:hover {
            background-color: #DC4242;
          }
        }

        &.accept {
          padding: 0;

          &:hover {
            background-color: #4F545C;
          }
        }
      }
    }

    .table-line-name,
    .table-line-status {
      display: flex;
      align-items: center;
    }

    .table-line-status {
      margin-left: 80px;
    }
  }

  div.status {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: red;
    border-color: transparent;
  }
</style>


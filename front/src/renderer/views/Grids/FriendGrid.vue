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
          <button class="action video-call"></button>
          <button class="action voice-call"></button>
          <button
            class="action revoke"
            @click="revokeFriend(friend)">
            <icon-base
              icon-name="revoke"
              width="24"
              height="24"
              viewBox="0 0 24 24">
              <remove-icon/>
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
  import IconBase from '../../components/Svg/IconBase.vue'
  import RemoveIcon from '../../components/Svg/Grids/RemoveIcon.vue'

  @Component({
    components: {
      IconBase,
      RemoveIcon
    },
    Store,
    computed: {
      ...mapGetters([
        'user'
      ])
    },
    sockets: {
      getFriends (data) {
        this.friends = data.filter(d => d.status === 1)
      },
      revokedFriend () {
        this.$socket.emit('GET::FRIENDS', this.user.id)
      }
    },
  })
  export default class FriendGrid extends Vue {
    friends = ''

    revokeFriend (friend) {
      this.$socket.emit('REVOKE::FRIEND', {
        user: this.user.id,
        friend: friend.pseudo
      })
    }

    mounted () {
      if (this.user) {
        this.$socket.emit('GET::FRIENDS', this.user.id)
      }
    }
  }
</script>

<template>
  <section id="convers">
    <section class="onechat" v-if="!messages.length">
      <section class="avatar">
        <avatar :url="null" size="small"></avatar>
      </section>
      <section class="text">
        <span class="username">@Bot <span class="hours">Infinity</span></span>
        <p>Voici votre channel fraichement créer. x) !</p>
      </section>
    </section>
    <section class="onechat" v-for="message in messages" v-if="messages.length">
      <section class="avatar">
        <avatar :url="message.user.avatar" size="small"></avatar>
      </section>
      <section class="text">
        <span class="username">{{ message.user.pseudo }} <span class="hours">{{ message.postedAt }}</span></span>
        <p v-html="message.content"></p>
      </section>
    </section>
  </section>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import { Store, mapActions, mapGetters } from 'vuex'

  import Avatar from '../Contents/components/Avatar.vue'
  import { ComponentOptions } from 'vue'

  @Component({
    Store,
    components: {
      Avatar
    },
    sockets: {
      updateMessage (messages) {
        this.clearMessage()
        this.addMessage(messages)
      }
    },
    methods: {
      ...mapActions([
        'addMessage',
        'clearMessage'
      ])
    },
    computed: {
      ...mapGetters([
        'messages'
      ])
    }
  } as ComponentOptions<Conversation> )
  export default class Conversation extends Vue {
  }
</script>

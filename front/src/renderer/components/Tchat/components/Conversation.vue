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
  import * as Vuex from 'vuex'
  import store from '../../../vuex/store'

  import Avatar from '../../Contents/components/Avatar.vue'
  import { ComponentOptions } from 'vue'

  @Component({
    store,
    components: {
      Avatar
    },
    sockets: {
      updateMessage (messages: string) {
        this.addMessage(messages)
      }
    },
    methods: {
      ...Vuex.mapActions([
        'addMessage'
      ])
    },
    computed: {
      ...Vuex.mapGetters([
        'messages'
      ])
    }
  } as ComponentOptions<Conversation> )
  export default class Conversation extends Vue {
  }
</script>

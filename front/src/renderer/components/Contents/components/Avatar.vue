<template>
  <img :src="imagePath" alt="avatar" :class="avatarSize">
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'

  @Component
  export default class Avatar extends Vue {
    @Prop() private url?: string
    @Prop({ default: 'small' }) private size!: string

    get imagePath () {
      if (this.url === null || this.url === undefined) {
        return 'http://i0.wp.com/marioasselin.com/wp-content/plugins/buddypress/bp-core/images/mystery-man.jpg'
      } else if (this.url.indexOf('data:') !== -1) {
        return this.url
      } else {
        return 'http://localhost:4100/avatars/' + this.url
      }
    }

    get avatarSize () {
      return {
        'avatar-small': this.size === 'small',
        'avatar-medium': this.size === 'medium',
        'avatar-normal': this.size === 'normal'
      }
    }
  }
</script>

<style>
  .avatar-small {
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }

  .avatar-medium {
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }

  .avatar-normal {
    border-radius: 50%;
    width: 80px;
    height: 80px;
  }

  .avatar-big {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }
</style>

<template>
  <img :src="imagePath" alt="avatar" class="avatar" :class="avatarSize">
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'

  @Component
  export default class Avatar extends Vue {
    @Prop() url?: string
    @Prop({ default: 'small' }) size!: string

    get imagePath () {
      if (this.url === null || this.url === undefined) {
        return 'http://i0.wp.com/marioasselin.com/wp-content/plugins/buddypress/bp-core/images/mystery-man.jpg'
      } else if (this.url.indexOf('data:') !== -1) {
        return this.url
      } else {
        return 'http://qwirk.test:4100/avatars/' + this.url
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
  .avatar {
    width: 16px;
    height: 16px;
    border-radius: 50%;
  }

  .avatar-small {
    width: 32px;
    height: 32px;
  }

  .avatar-medium {
    width: 50px;
    height: 50px;
  }

  .avatar-normal {
    width: 100px;
    height: 100px;
  }
</style>

<template>
  <img :src="imagePath" alt="avatar" class="avatar" :class="avatarSize">
</template>

<script>
  export default {
    props: ['url', 'size'],
    computed: {
      imagePath () {
        if (this.url === null || this.url === undefined) {
          return 'http://localhost/anonym.png'
        } else if (this.url.indexOf('data:') !== -1) {
          return this.url
        } else {
          return 'http://localhost/' + this.url
        }
      },
      avatarSize () {
        return {
          'avatar-small': this.size === 'small',
          'avatar-normal': this.size === 'normal'
        }
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

  .avatar-normal {
    width: 100px;
    height: 100px;
  }
</style>

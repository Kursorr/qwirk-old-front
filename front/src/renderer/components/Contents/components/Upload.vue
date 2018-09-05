<template>
  <div class="upload">
    <section class="logo-ce">
      <section class="logo-group">
        <avatar :url="userOrImage" size="normal"></avatar>
        <input type="file" class="file-input" accept=".jpg,.jpeg,.png,.gif" @change="onFileChange">
      </section>
    </section>
    <button id="deleteImg" @click.prevent="changeImage(null)">Supprimer</button>
  </div>
</template>

<script>
  import Vuex from 'vuex'
  import store from '@store'

  import Avatar from './Avatar.vue'

  export default {
    store,
    name: 'upload',
    components: {
      Avatar
    },
    data () {
      return {
        image: null
      }
    },
    methods: {
      onFileChange (e) {
        const files = e.target.files || e.dataTransfer.files
        if (!files.length) return
        return this.createImage(files[0])
      },
      createImage (file) {
        let reader = new FileReader()

        reader.onload = (e) => {
          this.changeImage(e.target.result)
        }
        reader.readAsDataURL(file)
      },
      changeImage: function (image) {
        this.image = image
        this.$emit('change', this.image)
      }
    },
    computed: {
      ...Vuex.mapGetters([
        'user'
      ]),
      userOrImage () {
        if (this.image !== null) {
          return this.image
        }
        return null
      }
    },
    mounted () {
      if (this.user) {
        this.image = this.user.avatar
      }
      this.$on('upload-file', () => {
        this.onFileChange()
      })
    }
  }
</script>

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

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import * as Vuex from 'vuex'

  import Avatar from './Avatar.vue'
  import { ComponentOptions } from 'vue'

  @Component({
    components: {
      Avatar
    },
    computed: {
      ...Vuex.mapGetters([
        'user'
      ])
    }
  } as ComponentOptions<Upload>)
  export default class Upload extends Vue {
    private image?: string = null
    private user: any

    get userOrImage () {
      if (this.image !== null) {
        return this.image
      }
      return null
    }

    private createImage (file: Blob) {
      const reader = new FileReader()

      reader.onload = (e: any) => {
        this.changeImage(e.target.result)
      }
      reader.readAsDataURL(file)
    }

    public onFileChange (e: any) {
      const files = e.target.files || e.dataTransfer.files
      if (!files.length) { return }
      return this.createImage(files[0])
    }

    public changeImage (image: string) {
      this.image = image
      this.$emit('change', this.image)
    }

    private mounted () {
      if (this.user) {
        this.image = this.user.avatar
      }
    }
  }
</script>

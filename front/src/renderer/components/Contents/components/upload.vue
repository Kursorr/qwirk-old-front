<template>
  <div class="upload">
    <div v-if="!image">
      <section class="logo-ce">
        <section class="logo-group">
          <section class="bckg"></section>
          <input type="file" class="file-input" accept=".jpg,.jpeg,.png,.gif" @change="onFileChange">
        </section>
      </section>
    </div>
    <div v-else>
      <img :src="image" id="avatarView"/>
      <button @click="removeImage">Modifier</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'upload',
    data () {
      return {
        image: ''
      }
    },
    methods: {
      onFileChange (e) {
        const files = e.target.files || e.dataTransfer.files
        if (!files.length) return
        console.log('files[0]')
        console.log(files[0])
        return this.createImage(files[0])
      },
      createImage (file) {
        let reader = new FileReader()
        const vm = this

        reader.onload = (e) => {
          vm.image = e.target.result
        }

        reader.readAsDataURL(file)
      },
      removeImage: function (e) {
        this.image = ''
      }
    },
    mounted () {
      this.$on('upload-file', () => {
        this.onFileChange()
      })
    }
  }
</script>

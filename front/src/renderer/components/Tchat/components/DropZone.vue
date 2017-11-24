<template>
  <dropzone ref="myVueDropzone" id="myVueDropZone" :options="dropzoneOptions">
  </dropzone>
</template>

<script>
  import Dropzone from 'vue2-dropzone'
  import 'vue2-dropzone/dist/vue2Dropzone.css'

  export default {
    name: 'MainApp',
    components: {
      Dropzone
    },
    data () {
      return {
        dropzoneOptions: {
          url: 'http://notyet.com/post',
          thumbnailWidth: 100,
          maxFilesize: 8
        }
      }
    }
  }
</script>

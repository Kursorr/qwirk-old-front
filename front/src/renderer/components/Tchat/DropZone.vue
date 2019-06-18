<template>
  <dropzone ref="myVueDropzone" id="myVueDropZone" :options="dropzoneOptions">
  </dropzone>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
const Dropzone = require('vue2-dropzone')
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

@Component({
  components: {
    Dropzone
  }
})
export default class DropZone extends Vue {
  public dropzoneOptions: any = {
    url: 'http://notyet.com/post',
    thumbnailWidth: 100,
    maxFilesize: 8
  }
}
</script>

<style lang="scss" scoped>
  .vue-dropzone.dropzone.dz-clickable {
    min-height: 175px;
    overflow-x: auto;
    background-color: #36393e;
    border-bottom: solid black 1px;
    border-left: none;
    border-right: none;
    border-top: none;
  }

  .vue-dropzone .dz-preview .dz-image {
    height: 100px;
    width: 100px;
  }
</style>

<template>
  <canvas class="soundSaturation"></canvas>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class SoundSaturation extends Vue {
    public static soundSaturation(stream) {
      const audioContext = new window.AudioContext()
      let analyseur = audioContext.createAnalyser()
      let source = audioContext.createMediaStreamSource(stream)
      source.connect(analyseur)
      analyseur.fftSize = 256
      const canvas = document.querySelector('.soundSaturation')
      const ctx = canvas.getContext('2d')

      const width = 400
      const height = 150

      let sizeMemoryBuffer = analyseur.frequencyBinCount
      let data = new Uint8Array(sizeMemoryBuffer)

      analyseur.getByteTimeDomainData(data)
      ctx.clearRect(0, 0, width, height)

      function update() {
        requestAnimationFrame(update)
        analyseur.getByteTimeDomainData(data)

        ctx.fillStyle = '#36393E'
        ctx.fillRect(0, 0, width, height)

        let largeurBarre = width / sizeMemoryBuffer
        let hauteurBarre = null
        let x = 0

        ctx.fillStyle = 'rgb(250, 50, 50)'

        for (let i = 0; i < sizeMemoryBuffer; i += 1) {
          hauteurBarre = data[i] - 64

          ctx.fillStyle = "rgb(250, 50, 50)"
          ctx.fillRect(
            x,
            height - hauteurBarre * 1.7 + 100,
            largeurBarre,
            hauteurBarre
          )
          x += largeurBarre + 0.5
        }
      }
      update()
    }
  }
</script>

<style lang="scss">
  canvas.soundSaturation {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 300px;
    height: 45px;
  }
</style>

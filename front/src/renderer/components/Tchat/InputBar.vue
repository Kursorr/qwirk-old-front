<template>
  <form>
    <button id="file" type="button" @click="dropzoneToggle"></button>
    <textarea
      id="tchat"
      rows="1"
      placeholder="Envoyer un message"
      :value="message"
      @keypress.enter="onChange"
    ></textarea>
    <button id="emoji" type="button" @click="emojiToggle">😁</button>
  </form>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Bar extends Vue {
  @Prop() public message?: string

  public dropzoneToggle () {
    this.$emit('toggledz')
  }

  public emojiToggle () {
    this.$emit('togglemoji')
  }

  public onChange (e: any) {
    this.$emit('update', e.target.value)
  }
}
</script>

<style lang="scss">
  section#cpnts {
    width: 83%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    form {
      padding: 15px;
      bottom: 0;
      display: flex;
      position: relative;
      border-top: 1px solid hsla(0, 0%, 100%, .06);

      button#file {
        background: url('../../assets/sendfile.png') no-repeat;
        background-size: 25px;
        opacity: 0.6;
      }

      textarea#tchat {
        color: hsla(0, 0%, 100%, .7);
        background-color: transparent;
        resize: none;
        outline: none;
        border: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        font-weight: 400;
        font-size: 12px;
        letter-spacing: 0;
        max-height: 144px;
        width: 93%;
        min-height: 20px;
        padding-top: 7px;
      }

      button#emoji {
        opacity: .6;
        position: absolute;
        top: 18px;
        right: 0;
        background: none;
        padding: 0;
      }
    }
  }
</style>

<template>
  <div>
    <section v-bind:class="{'active': css.isActive}" class="bar tchat">
      <section class="who">
        <span tabindex="0">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <slot/>
          </svg>
          <span class="pseudo bar">{{ channel }}</span>
        </span>
        <div class="status outside" v-if="privateMessage"></div>
      </section>

      <section class="functionnalities">
        <span tabindex="0" @click="videoCall()">
          <icon-base
            icon-name="Camera"
            class="videoCamera"
            width="24"
            height="24"
            view-box="0 0 24 24"
            v-if="privateMessage"
            v-bind:class="{'disabled': css.disabled}">
            <camera-icon></camera-icon>
          </icon-base>
        </span>

        <span tabindex="0" @click="phoneCall()">
          <icon-base
            icon-name="phone"
            class="phone"
            width="24"
            height="24"
            view-box="0 0 24 24"
            v-if="privateMessage"
            v-bind:class="{'disabled': css.disabled}">
            <phone-icon></phone-icon>
          </icon-base>
        </span>

        <span tabindex="0">
          <icon-base
            icon-name="pin"
            class="pin"
            width="16"
            height="16"
            view-box="0 0 26 26">
            <pin-icon></pin-icon>
          </icon-base>
        </span>

        <span tabindex="0">
          <icon-base
            icon-name="members"
            class="members"
            width="24"
            height="24"
            view-box="0 0 24 24"
            v-if="!privateMessage">
            <members-icon></members-icon>
          </icon-base>
        </span>

        <search-beta></search-beta>

        <div class="divider"></div>

        <span tabindex="0">
          <icon-base
            icon-name="update"
            class="update"
            width="16"
            height="16"
            view-box="0 0 26 26">
            <update-icon></update-icon>
          </icon-base>
        </span>

        <span tabindex="0">
          <icon-base
            icon-name="mention"
            class="mention"
            width="16"
            height="16"
            view-box="0 0 26 26">
            <mention-icon></mention-icon>
          </icon-base>
        </span>

        <span tabindex="0">
          <icon-base
            icon-name="QuestionMark"
            class="questionMark"
            width="16"
            height="16"
            view-box="0 0 24 24">
            <question-icon></question-icon>
          </icon-base>
        </span>
      </section>

      <section class="onCall">
        <div id="videos">
          <video id="emitter"></video>
          <video id="receiver"></video>
        </div>
        <div id="avatarsCall">
          <h1>yolo!</h1>
        </div>
        <div class="optionsCall">
          <div class="screenSharing">
            <img class="sharescreen" src="../../assets/webrtc/confcall/sharescreen.svg" alt="sharescreen">
          </div>
          <div class="camera" @click="phoneCall()">
          <span tabindex="0" v-if="!icon.camera">
            <icon-base
              icon-name="Camera"
              class="videoCamera"
              width="16"
              height="16"
              view-box="0 0 24 24">
            <camera-icon></camera-icon>
          </icon-base>
          </span>
            <div v-else>
              <img src="../../assets/webrtc/confcall/nocam.svg" alt="nocam" class="nocam">
            </div>
          </div>
          <button @click="leaveCall()">quitter l'appel</button>
          <div class="muteOrNot" @click="toggleMic()">
            <div v-if="!icon.audio">
              <icon-base
                icon-name="mute"
                class="mute"
                width="24"
                height="24"
                view-box="0 0 24 24">
                <mute-icon></mute-icon>
              </icon-base>
            </div>
            <div v-else>
              <icon-base
                icon-name="nomute"
                class="nomute"
                width="24"
                height="24"
                view-box="0 0 24 24">
                <nomute-icon></nomute-icon>
              </icon-base>
            </div>
          </div>
        </div>

        <sound-saturation></sound-saturation>

        <textarea name="offer" id="offer" cols="10" rows="1"></textarea>

        <form id="incoming">
          <textarea cols="10" rows="1" id="receiveroffre"></textarea>
          <button @click.prevent="acceptCall()">accept</button>
        </form>
      </section>

    </section>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import SearchBeta from './components/SearchBeta.vue'
  import IconBase from '../IconBase.vue'
  import SoundSaturation from '../Webrtc/SoundSaturation'

  import ArobaseIcon from '../Svg/Bar/ArobaseIcon.vue'
  import CameraIcon from '../Svg/Bar/CameraIcon.vue'
  import PhoneIcon from '../Svg/Bar/PhoneIcon.vue'
  import PinIcon from '../Svg/Bar/PinIcon.vue'
  import UpdateIcon from '../Svg/Bar/UpdateIcon.vue'
  import MentionIcon from '../Svg/Bar/MentionIcon.vue'
  import QuestionIcon from '../Svg/Bar/QuestionIcon.vue'
  import MuteIcon from '../Svg/Bar/MuteIcon.vue'
  import NomuteIcon from '../Svg/Bar/NomuteIcon.vue'
  import DieseIcon from '../Svg/Bar/DieseIcon.vue'
  import MembersIcon from '../Svg/Bar/MembersIcon.vue'

  const SimplePeer = require('simple-peer')

  @Component({
    components: {
      SearchBeta,
      SoundSaturation,
      IconBase,
      ArobaseIcon,
      CameraIcon,
      PhoneIcon,
      PinIcon,
      UpdateIcon,
      MentionIcon,
      QuestionIcon,
      MuteIcon,
      NomuteIcon,
      DieseIcon,
      MembersIcon
    }
  })
  export default class TchatBar extends Vue {
    @Prop() channel: string
    @Prop() privateMessage: boolean

    public css: any = {
      isActive: false,
      disabled: false
    }

    public onCall: boolean = false
    public onVideoCall: boolean = false
    public onPhoneCall: boolean = false

    public icon = {
      camera: false,
      audio: true
    }

    public video: boolean = false
    public mute: boolean = true
    public p = null

    toggleMic() {
      this.mute ? (this.mute = false) : (this.mute = true)

      for (let audioTrack of this.$stream.getAudioTracks()) {
        audioTrack.enabled = this.mute
      }

      this.icon.audio = !this.icon.audio
    }

    toggleCam() {
      this.$stream.getTracks()[1].enabled = !this.$stream.getTracks()[1].enabled
      this.icon.camera = !this.icon.camera
    }

    call(audio, video) {
      this.onCall = true
      this.css.isActive = true
      this.css.disabled = true

      video ? (this.video = true) : (this.video = false)

      navigator.getUserMedia(
        {
          video: this.video,
          audio: {
            echoCancellation: true,
            noiseSuppression: true,
            autoGainControl: true
          }
        },
        stream => {
          this.$stream = stream

          this.p = new SimplePeer({
            initiator: true,
            trickle: false
          })

          this.bindEvents(this.p)

          if (video) {
            let emitter = document.getElementById('emitter')
            emitter.srcObject = stream
            emitter.play()
          }

          SoundSaturation.soundSaturation(stream)
        },
        err => console.log(err)
      )
    }

    videoCall() {
      this.onVideoCall = true
      this.call(true, true)
    }

    phoneCall() {
      this.onPhoneCall = true
      this.call(true, false)
    }

    acceptCall() {
      if (this.p === null) {
        this.p = new SimplePeer({
          initiator: false,
          trickle: false
        })
        this.onCall = true
        this.onVideoCall = true
        this.onPhoneCall = true
        this.bindEvents(this.p)
      }

      this.p.signal(JSON.parse(document.getElementById('receiveroffre').value))
    }

    leaveCall() {
      this.css.disabled = false
      this.onVideoCall = false
      this.onPhoneCall = false
      let emitter = document.getElementById('emitter')
      let receiver = document.getElementById('receiver')

      if (emitter) emitter.src = ''
      if (receiver) receiver.src = ''

      // get video / audio track and close it
      this.$stream.getTracks().forEach(track => {
        console.log(track)
        track.stop()
      })

      this.onCall = false
      this.css.isActive = false
    }

    bindEvents(p) {
      p.on('connect', () => {
        console.log('connecteddddd !!! :)')
      })

      p.on('error', err => {
        console.log(err)
      })

      p.on('signal', data => {
        document.getElementById('offer').textContent = JSON.stringify(data)
      })

      p.on('stream', stream => {
        let receiver = document.getElementById('receiver')
        receiver.srcObject = stream
        receiver.play()
      })

      p.on('track', (track, stream) => {
        SoundSaturation.soundSaturation(stream)
        console.log(track)
        console.log(stream)
      })
    }
  }
</script>

<style lang="scss" scoped>
  section.bar {
    &.tchat {
      justify-content: space-between;
    }
  }

  .topMenu {
    background-color: #36393f;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .topMenu.active {
    background-color: #202225;
  }

  .who {
    display: flex;
    align-items: center;
    margin-left: 20px;
    
    > span {
      display: flex;
    }

    span.pseudo.bar {
      display: flex;
      align-items: center;
      margin-left: 5px;
    }
  }

  .at {
    color: #8a8e94;
    margin-right: 3px;
    position: relative;
    top: 2px;
  }

  .pseudo {
    color: #FFF;
  }

  .status {
    background-color: #f04747;
    height: 10px;
    width: 10px;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    border-radius: 50%;
    margin-left: 5px;

    &.outside {
      border-color: transparent;
    }
  }

  .functionnalities {
    display: flex;
    align-items: center;
  }

  .videoCamera,
  .phone,
  .pin,
  .mention,
  .questionMark,
  .sharescreen,
  .mute,
  .nomute,
  .nocam,
  .members {
    height: 24px;
    width: 24px;
    opacity: 0.6;
    color: #fff;
    cursor: pointer;
    margin-right: 10px;
    margin-top: 5px;
    &:hover {
      opacity: 0.8;
    }
  }

  .update {
    height: 24px;
    width: 24px;
    opacity: 0.6;
    cursor: pointer;
    margin: 5px 10px 0 10px;
  }

  div.divider {
    background: hsla(0, 0%, 84.7%, 0.1);
    height: 22px;
    margin: 0 4px;
    width: 1px;
  }

  .onCall {
    display: flex;
    background-color: #202225;
    justify-content: center;
    height: 250px;
    position: absolute;
    z-index: 9999;
    top: 48px;
    width: 100%;
  }

  .onCall div#videos > video#receiver {
    width: 100%;
    height: 312px;
  }

  .onCall div#videos > video#emitter {
    position: absolute;
    z-index: 1;
    right: 0;
    bottom: 0;
    height: 140px;
  }

  .optionsCall {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 25px;
    padding: 3px 0;
    background-color: rgba(0, 0, 0, 0.8);
    border-color: rgba(0, 0, 0, 0.9);
    border-radius: 4px;
    z-index: 1;
  }

  .optionsCall > div.screenSharing {
    margin-left: 10px;
    margin-top: 5px;
  }

  .optionsCall > button {
    background-color: #d84040;
    text-transform: uppercase;
    margin: 0 12px;
    cursor: pointer;
    color: #fff;
    border: none;
    border-radius: 4px;
    height: 32px;
    line-height: 11px;
    font-size: 14px;
  }

  .optionsCall > div.camera > span > svg.videoCamera,
  .optionsCall > div.camera > div > img.nocam {
    margin-right: 0;
  }

  .videoCamera.disabled,
  .phone.disabled {
    display: none;
  }
</style>

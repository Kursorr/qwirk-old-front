<template>
  <section class="modal choose" @click="closeModal($event)">
    <transition name="fade">
      <server-params v-if="modal.serverParams"
                    @close="setModal('serverParams', false)"
                    @finish="$emit('close')"></server-params>
    </transition>
    <section class="set" id="actions">
      <section id="choice" v-bind:class="{createServerActive, disactive}">
        <header>oh, un autre serveur hein ?</header>
        <section>
          <section class="action" id="createServer">
            <div class="actionHeader">
              Créer
            </div>
            <div class="actionBody">
              Créez un nouveau serveur et invitez vos amis. C'est gratuit !
            </div>
            <div class="actionIcon"></div>
            <button class="button connect" @click="setModal('serverParams', true)">Create a server</button>
          </section>
          <section class="action" id="joinServer">
            <div class="actionHeader">
              Rejoindre
            </div>
            <div class="actionBody">
              Entrez une invitation et rejoignez le serveur de votre ami.
            </div>
            <div class="actionIcon"></div>
            <button @click="joinServerView()" class="button success">Join a server</button>
          </section>
          <div class="or">or</div>
        </section>
      </section>

      <section id="linkToJoinServer" v-bind:class="{joinServerActive}">
        <header class="joinServer">Rejoindre un serveur !</header>
        <p>
          Entrez une invitation ci-dessous pour rejoindre un serveur existant. L'invitation ressemble à celles-ci :
        </p>
        <p class="invitationLinkToJoinServer">https://qwirk.gg/qJq5C</p>
        <p class="invitationLinkToJoinServer">https://qwirk.gg/discord-developersqJq5C</p>
        <input type="text" class="invitationInput">
        <p class="enterAnInvitation">Entrez une invitation</p>
        <section class="buttons">
          <button class="cancel" @click="back()">Retour</button>
          <button class="success">Rejoindre</button>
        </section>
      </section>
    </section>
  </section>
</template>

<script lang="ts">
  import { Component, Emit, Vue } from 'vue-property-decorator'

  import ServerParams from './ServerParams.vue'

  @Component({
    components: {
      ServerParams
    }
  })
  export default class NewOrJoinServer extends Vue {
    createServerActive: boolean = true
    joinServerActive: boolean = false
    disactive: boolean = false

    modal: any = {
      serverParams: false
    }

    closeModal (e) {
      if (e.target.classList.contains('modal')) {
        this.$emit('close')
      }
    }

    setModal (modalName: string, value: boolean) {
      this.modal[modalName] = value
    }

    joinServerView () {
      this.createServerActive = false
      this.joinServerActive = true
      this.disactive = true
    }

    back () {
      this.createServerActive = true
      this.joinServerActive = false
      this.disactive = false
    }
  }
</script>

<style lang="scss">
  section.modal.choose {
    border: solid black 1px;

    section.set#actions {
      background-color: #FFF;
      background-image: url('../../assets/backgrounds/disc.png');
      background-position: 0 100%,100% 100%;
      background-repeat: no-repeat;
      background-size: 155px auto,75px auto;
      overflow: hidden;
      box-sizing: border-box;
      height: 420px;
      padding: 30px 24px;
      width: 520px;
      position: relative;
      display: flex;
      flex-direction: column;

      #choice {
        position: absolute;
      }

      #choice.disactive {
        transition: 500ms;
        left: -520px;
      }

      #choice.createServerActive {
        left: 20px;
        transition: 500ms;
      }

      #linkToJoinServer {
        position: absolute;
        right: -520px;
        width: 495px;
        transition: 500ms;
      }

      #linkToJoinServer.joinServerActive {
        transition: 500ms;
        right: 0;
        padding-right: 34px;
      }

      #createServer.createServerActive {
        transition: 500ms;
        left: -520px;
      }

        header {
          font-size: 18px;
          margin-bottom: 40px;
          margin-top: 6px;
          text-align: center;
          color: #7298DA;
          font-weight: 700;
          text-transform: uppercase;
        }

        section.action {
          background: hsla(0,0%,100%,.75);
          border: 1px solid rgba(0,0,0,.1);
          border-radius: 3px;
          box-shadow: 0 2px 4px rgba(0,0,0,.08);
          box-sizing: border-box;
          cursor: pointer;
          display: inline-block;
          overflow: hidden;
          padding: 10px;
          text-align: center;
          width: 228px;
        }

        section#createServer, section#joinServer {
          div.actionHeader {
            color: #7289da;
            font-size: 18px;
            font-weight: 500;
            margin-top: 20px;
            text-transform: uppercase;
          }

          div.actionBody {
            color: #99aab5;
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            margin-top: 16px;
            padding: 0 15px;
          }

          div.actionIcon {
            background: url(../../assets/backgrounds/createServer.png) 50% no-repeat;
            background-size: 112px 78px;
            height: 78px;
            margin: 26px 0;
          }
        }

        section#joinServer {
          margin-left: 16px;

          div.actionIcon {
            background: url(../../assets/backgrounds/joinServer.png) 50% no-repeat;
            background-size: 178.5px 78px;
          }
        }

        .or {
          background-image: url(../../assets/backgrounds/or.svg);
          background-position: 50%,50%;
          background-repeat: no-repeat;
          background-size: 52px,52px;
          color: #99aab5;
          font-size: 22px;
          font-weight: 500;
          height: 100%;
          left: 0;
          line-height: 368px;
          padding-top: 8px;
          pointer-events: none;
          position: absolute;
          text-align: center;
          top: 0;
          width: 100%;
        }

        #linkToJoinServer {
          header {
            color: #43b581;
            margin-bottom: 20px;
          }

          p {
            color: #99aab5;
            font-size: 18px;
            padding: 10px 0;
            text-align: center;
            font-weight: 500;
            line-height: 1.2;
          }

          p.invitationLinkToJoinServer {
            color: #7289da;
            font-size: 14px;
            padding: 0;
            margin-bottom: 4px;
          }

          .invitationInput {
            background: transparent;
            border-radius: 0;
            border-bottom: 2px solid;
            font-size: 16px;
            font-weight: 400;
            width: 100%;
            height: 40px;
            padding: 10px;
            box-sizing: border-box;
            transition: background-color .15s ease,border .15s ease;
            margin-top: 40px;
            border-bottom-color: #f0f0f0;
          }

          .invitationInput:hover {
            border-color: #b9bbbe;
          }

          .invitationInput:focus {
            border-color: #7289da;
          }

          .enterAnInvitation {
            color: #99aab5;
            font-size: 11px;
            font-weight: 400;
            margin-top: 4px;
            text-transform: none;
            text-align: left;
            padding: 0;
          }

          .buttons {
            justify-content: space-between;
            background-color: #f6f6f7;
            margin-top: 70px;
            width: 521px;
            margin-left: -26px;
            padding: 0 40px;
            height: 74px;

            .cancel {
              background: transparent;
              color: #99aab5;
              border-bottom: 2px solid transparent;
              font-size: 12px;
              padding: 0;
              text-transform: uppercase;
            }

            .cancel:before {
              background: url("../../assets/arrow.svg") no-repeat 0;
              background-size: 18px,12px;
              content: " ";
              margin-right: 10px;
              padding-right: 18px;
            }

            .success {
              font-size: 12px;
            }
          }
        }
      }
    }
</style>

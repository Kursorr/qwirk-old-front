<template>
  <section class="modal choose" @click="closeModal($event)">
    <transition name="fade">
      <server-params v-if="modal.serverParams"
                    @close="setModal('serverParams', false)"
                    @finish="$emit('close')"></server-params>
    </transition>
    <section class="set" id="actions">
      <header>oh, un autre serveur hein ?</header>
      <section id="choice">
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
          <button class="button success">Join a server</button>
        </section>
        <div class="or">or</div>
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
    private modal: any = {
      serverParams: false
    }

    public closeModal (e) {
      if (e.target.classList.contains('modal')) {
        this.$emit('close')
      }
    }

    public setModal (modalName: string, value: boolean) {
      this.modal[modalName] = value
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
      box-sizing: border-box;
      height: 420px;
      padding: 30px 24px;
      width: 520px;
      position: relative;
      display: flex;
      flex-direction: column;

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
          padding-top: 26px;
          pointer-events: none;
          position: absolute;
          text-align: center;
          top: 0;
          width: 100%;
        }
      }
    }
</style>

<template>
  <section class="modal" @click="closeModal($event)">
    <section class="set">
      <section class="content">
        <section class="auth-logo"></section>
        <section class="panel">
          <h2>Créer un compte</h2>
          <!-- <button @click="test()">{{ $t("message.hello") }}</button> -->
          <form autocomplete="off">
            <div class="form">
              <input type="text" name="registerName" placeholder="Pseudo"
                     v-model="register.pseudo">
            </div>
            <div class="form">
              <input type="email" name="registerEmail" placeholder="Email"
                     v-model="register.email">
            </div>
            <div class="form">
              <input type="password" name="registerPassword" placeholder="Mot de passe"
                     v-model="register.password">
            </div>
            <div class="form">
              <input type="password" name="registerVerifPassword" placeholder="Confirmer le mot de passe"
                     v-model="register.confirm">
            </div>

            <upload @change="uploadChange"></upload>

            <button type="submit" @click.prevent="registration()" class="connect">Continuer</button>
            <p class="authSwitch">Vous avez déjà un compte ? <router-link to="/auth">Se connecter</router-link></p>
            <div class="message" v-if="register.error">
              {{ register.error }}
            </div>
          </form>
        </section>
      </section>
    </section>
  </section>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import * as Vuex from 'vuex'
  import store from '../vuex/store'
  import Upload from '../components/Contents/components/Upload.vue'
  import { ComponentOptions } from 'vue'

  @Component({
    store,
    components: {
      Upload
    },
    computed: {
      ...Vuex.mapGetters([
        'user'
      ])
    },
    sockets: {
      registration (result: any) {
        if (result.success) {
          // @ts-ignore
          this.register.error = result.message
        } else {
          // @ts-ignore
          this.register.error = result.message
          setTimeout(() => {
            // @ts-ignore
            this.register.error = null
          }, 2000)
        }
      }
    }
  } as ComponentOptions<Register> )
  export default class Register extends Vue {
    private register: any = {
      pseudo: '',
      email: '',
      password: '',
      confirm: '',
      avatar: '',
      error: null
    }

    public closeModal(e: any) {
      if (e.target.classList.contains('modal')) {
        this.$emit('close')
      }
    }

    public uploadChange(newImage: any) {
      this.register.avatar = newImage
    }

    public registration() {
      this.$socket.emit('register', this.register)
    }

    public test() {
      this.$i18n.locale = 'en'
    }
  }
</script>

<style lang="scss" scoped>
  section.modal {
    background-image: url('../assets/backgrounds/app/d3.jpg');
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 9999;

    section.set {
      display: flex;
      flex-direction: row;
      width: 630px;
      height: 530px;
      background-color: transparent;

      section.content {
        display: flex;
        background-color: rgba(46, 49, 54, 0.7);

        .auth-logo {
          width: 230px;
          background-color: #FFF;
        }

        section.panel {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 400px;

          h2 {
            margin-top: 25px;
            margin-bottom: 25px;
            color: #FFF;
            text-transform: uppercase;
            font-size: 18px;
          }

          form {
            display: flex;
            flex: 2;
            flex-direction: column;
            width: 70%;

            a {
              color: #888;
              margin-bottom: 12px;

              &:hover {
                color: #FFF;
              }
            }

            div.form {
              background: #F0EEF0;
              -webkit-border-radius: 0.3em;
              border-radius: 0.3em;
              margin-bottom: 12px;

              input {
                border-radius: 0.3em;
                height: 40px;
                width: 100%;
              }
            }

            div.special {
              height: 50px;
              width: 175px;

              label.file-select > div.select-button {
                padding: 1rem;
                color: #000;
                border-radius: .3rem;
                font-weight: bold;
                display: flex;
                flex-direction: row;
                cursor: pointer;
              }

              label.file-select > input[type="file"] {
                display: none;
              }

              label.file-select > div.select-button > span {
                margin-left: 15px;
              }
            }

            .authSwitch {
              color: #888;
              margin-top: 12px;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
</style>

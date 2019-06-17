<template>
  <section class="modal" @click="closeModal($event)">
    <section class="set">
      <section class="content">
        <section class="auth-logo"></section>
        <section class="panel">
          <h2>Bon retour parmi nous !</h2>
          <!--<icon-base
            icon-name="moon"
            width="309"
            height="155"
            viewBox="0 0 309 155">
            <moon-icon/>
          </icon-base>-->
          <form autocomplete="off">
            <div class="form">
              <input type="email" name="loginEmail" placeholder="Email" v-model="login.email">
            </div>
            <div class="form">
              <input type="password" name="loginPassword" placeholder="Mot de passe" v-model="login.password">
            </div>

            <a href="#">Avez vous oublié votre mot de passe?</a>

            <button type="submit" @click.prevent="connect()" class="connect">
              <router-link to="/landing-page">Se connecter</router-link>
            </button> <!-- tag -->
            <p class="authSwitch">Besoin d'un compte ? <router-link to="/register">S'inscrire</router-link></p>
            <div class="message" v-if="login.error">
              {{ login.error }}
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
import { ComponentOptions } from 'vue'

import IconBase from '../components/IconBase.vue'
import Moon from '../components/Svg/MoonIcon.vue'
declare const Buffer: any

@Component({
  components: {
    IconBase,
    Moon
  },
  methods: {
    ...Vuex.mapActions([
      'authenticateUser'
    ])
  },
  sockets: {
    connection (result: any) {
      if (result.success) {
        this.authenticateUser(result.user)
      } else {
        this.login.error = result.message
        setTimeout(() => {
          this.login.error = null
        }, 2000)
      }
    }
  },
  computed: {
    ...Vuex.mapGetters([
      'user'
    ])
  }
} as ComponentOptions<Auth> )
export default class Auth extends Vue {
  public login: any = {
    email: 'kiki@kiki.dur',
    password: 'root',
    error: null
  }

  public closeModal (e: any) {
    if (e.target.classList.contains('modal')) {
      this.$emit('close')
    }
  }

  public connect () {
    this.$socket.emit('login', this.login)
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
      background-color: transparent;
      height: 400px;
      width: 630px;

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

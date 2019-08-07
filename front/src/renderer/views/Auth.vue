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
import { mapGetters, mapActions } from 'vuex'
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
    ...mapActions([
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
    ...mapGetters([
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
  .modal {
    background-image: url('../assets/backgrounds/app/d3.jpg');

    .set {
      height: 400px;
      width: 630px;

      section.content {
        display: flex;
        background-color: rgba(46, 49, 54, 0.7);

        .auth-logo {
          width: 230px;
          background-color: #FFF;
        }
      }
    }
  }
</style>

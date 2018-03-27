<template>
  <section class="modal auth" @click="closeModal($event)">
    <section class="set auth">
      <section class="content auth">
        <section class="auth-logo"></section>
        <section class="panel">
          <h2>Bon retour parmi nous !</h2>
          <form autocomplete="off">
            <div class="form">
              <input type="email" name="loginEmail" placeholder="Email" v-model="login.email">
            </div>
            <div class="form">
              <input type="password" name="loginPassword" placeholder="Mot de passe" v-model="login.password">
            </div>

            <a href="#">Avez vous oublié votre mot de passe?</a>

            <button type="submit" @click.prevent="connect()"
                    class="connect"><router-link to="/">Se connecter</router-link></button>
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

<script>
  import Vuex from 'vuex'
  import store from '../../vuex/store'

  export default {
    store,
    name: 'Auth',
    data () {
      return {
        login: {
          email: 'kiki@kiki.dur',
          password: 'root',
          error: null
        }
      }
    },
    sockets: {
      connection (result) {
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
    methods: {
      ...Vuex.mapActions([
        'authenticateUser'
      ]),
      closeModal (e) {
        if (e.target.classList.contains('modal')) {
          this.$emit('close')
        }
      },
      connect () {
        this.$socket.emit('login', this.login)
      }
    },
    computed: {
      ...Vuex.mapGetters([
        'user'
      ])
    }
  }
</script>

<template>
  <section class="modal auth" @click="closeModal($event)">
    <section class="set auth register">
      <section class="content auth">
        <section class="auth-logo"></section>
        <section class="panel register">
          <h2>Créer un compte</h2>
          <!-- @click="test()">{{ $t("message.hello") }}-->
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

            <button type="submit" @click.prevent="registration()" class="connect">S'inscrire</button>
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

<script>
  import Vuex from 'vuex'
  import store from '../../vuex/store'
  import Upload from '../Contents/components/Upload.vue'

  export default {
    store,
    name: 'Register',
    components: {
      Upload
    },
    data () {
      return {
        register: {
          pseudo: '',
          email: '',
          password: '',
          confirm: '',
          avatar: '',
          error: null
        }
      }
    },
    sockets: {
      registration (result) {
        if (result.success) {
          this.register.error = result.message
        } else {
          this.register.error = result.message
          setTimeout(() => {
            this.register.error = null
          }, 2000)
        }
      }
    },
    methods: {
      closeModal (e) {
        if (e.target.classList.contains('modal')) {
          this.$emit('close')
        }
      },
      uploadChange (newImage) {
        this.register.avatar = newImage
      },
      registration () {
        this.$socket.emit('register', this.register)
      },
      test () {
        this.$i18n.locale = 'en'
      }
    },
    computed: {
      ...Vuex.mapGetters([
        'user'
      ])
    }
  }
</script>

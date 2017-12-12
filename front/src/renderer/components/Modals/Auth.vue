<template>
  <section class="modal auth" @click="closeModal($event)">
    <section class="set auth">
      <section class="content auth">
        <section class="panel">
          <h2>S'inscrire</h2>
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
                     v-model="register.confirm"
              >
            </div>

            <upload v-model="register.file"></upload>

            <button type="submit" @click.prevent="registration()" class="connect">S'inscrire</button>
            <div class="message" v-if="register.error">
              {{ register.error }}
            </div>
          </form>
        </section>

        <hr>

        <section class="panel">
          <h2>Se connecter</h2>
          <form autocomplete="off">
            <div class="form">
              <input type="email" name="loginEmail" placeholder="Email" v-model="login.email">
            </div>
            <div class="form">
              <input type="password" name="loginPassword" placeholder="Mot de passe" v-model="login.password">
            </div>

            <a href="#">Avez vous oublié votre mot de passe?</a>

            <button type="submit" @click.prevent="connect()" class="connect">Se connecter</button>
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
  import Upload from '../Contents/components/Upload.vue'

  export default {
    name: 'auth',
    components: { Upload },
    data () {
      return {
        register: {
          pseudo: '',
          email: '',
          password: '',
          confirm: '',
          file: '',
          error: null
        },
        login: {
          email: 'ravaniss@local.dev',
          password: 'root',
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
          }, 3000)
        }
      },
      connection (result) {
        if (result.success) {
          this.login.error = result.message
        } else {
          this.login.error = result.message
          setTimeout(() => {
            this.login.error = null
          }, 3000)
        }
      }
    },
    methods: {
      closeModal (e) {
        if (e.target.classList.contains('modal')) {
          this.$emit('close')
        }
      },
      registration () {
        const result = this.$emit('upload-file')
        this.register.file = result.$children[0].image
        this.$socket.emit('register', this.register)
      },
      connect () {
        this.$socket.emit('login', this.login)
      }
    }
  }
</script>

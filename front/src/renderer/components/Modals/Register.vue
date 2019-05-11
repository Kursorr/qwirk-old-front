<template>
  <section class="modal auth" @click="closeModal($event)">
    <section class="set auth register">
      <section class="content auth">
        <section class="auth-logo"></section>
        <section class="panel register">
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
  import store from '../../vuex/store'
  import Upload from '../Contents/components/Upload.vue'
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

    public closeModal(e) {
      if (e.target.classList.contains('modal')) {
        this.$emit('close')
      }
    }

    public uploadChange(newImage) {
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

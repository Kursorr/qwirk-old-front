<template>
  <section class="modal" @click="closeModal($event)">
    <section class="set">
      <section class="content">
        <section class="auth-logo">
          <div class="logo"></div>
        </section>
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
  import { Store, mapGetters } from 'vuex'
  import Upload from '../components/Contents/components/Upload.vue'
  import { ComponentOptions } from 'vue'

  @Component({
    Store,
    components: {
      Upload
    },
    computed: {
      ...mapGetters([
        'user'
      ])
    },
    sockets: {
      registration (result: any) {
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
  .logo {
    background-image: url('../assets/logos/Qwirk.png');
    height: 140px;
    width: 140px;
    background-size: 140px 140px;
    background-repeat: no-repeat;
  }

  .modal {
    background-image: url('../assets/backgrounds/app/d3.jpg');

    .set {
      width: 630px;
      height: 530px;

      section.content {
        display: flex;
        background-color: rgba(46, 49, 54, 0.7);
      }
    }
  }
</style>

<template>
  <section class="modal" @click="closeModal($event)">
    <section class="set">
      <section class="menu">
        <h1 class="title">Paramètres Utilisateur</h1>
        <button class="tab" :class="{'is-active': tab === 'account'}"
                @click="setTab('account')">Mon Compte</button>
        <button class="tab" :class="{'is-active': tab === 'confidSecurity'}"
                @click="setTab('confidSecurity')">Confidentialité & Sécu..</button>
        <div class="separator"></div>
        <button class="tab" id="nitro" :class="{'is-active': tab === 'nitro'}"
                @click="setTab('nitro')">Discord Nitro</button>
        <button class="tab" :class="{'is-active': tab === 'hypeSquad'}"
                @click="setTab('hypeSquad')">HypeSquad</button>
        <div class="separator"></div>
        <h1 class="title sep">Paramètres de l'app</h1>
        <button class="tab" :class="{'is-active': tab === 'voiceVideo'}"
                @click="setTab('voiceVideo')">Voix & Vidéo</button>
        <button class="tab" :class="{'is-active': tab === 'notifications'}"
                @click="setTab('notifications')">Notifications</button>
        <button class="tab" :class="{'is-active': tab === 'textImage'}"
                @click="setTab('textImage')">Texte & Images</button>
        <button class="tab" :class="{'is-active': tab === 'displaylook'}"
                @click="setTab('displaylook')">Apparence</button>
        <button class="tab" :class="{'is-active': tab === 'language'}"
                @click="setTab('language')">Langue</button>

        <button class="tab" :class="{'is-active': tab === 'disconnect'}"
                @click="setTab('disconnect')">Déconnexion</button>
        <!--<button class="tab" :class="{'is-active': tab === 'disconnect'}"
                @click="setTab('disconnect')">{{ security }}</button>-->
      </section>

      <section class="content">
        <!-- Account View -->
        <section id="account" class="settings" v-if="tab === 'account'">
          <h2 class="titleSection">Mon Compte</h2>

          <!-- User Informations -->
          <section class="account-profil noEdit" v-show="!edit">
            <section class="logo-group">
              <avatar :url="user.avatar" size="big"></avatar>
            </section>
            <section id="user-informations">
              <h3 class="information label">Nom d'utilisateur</h3>
              <span class="information">{{ user.pseudo }}<span class="tag">#{{ tag }}</span></span>
              <h3 class="information label marg">Email</h3>
              <span class="information">{{ user.email }}</span>
            </section>
            <section class="buttons">
              <button class="connect" @click="edit = true">Éditer</button>
            </section>
          </section>

          <!-- Edit Mode -->
          <section class="account-profil" v-show="edit">
            <section id="entireForm">
              <upload @change="uploadChange"></upload>
              <form autocomplete="off">
                <label for="pseudo" class="information">Nom d'Utilisateur
                  <input type="text" name="pseudo" id="pseudo" v-model="profile.pseudo">
                </label>
                <label for="email" class="information">Email
                  <input type="email" name="email" id="email" v-model="profile.email">
                </label>
                <label for="password" class="information">Mot de passe actuel
                  <input type="password" name="password" id="password" v-model="profile.password">
                </label>
                <label for="passwordChange" class="information" v-if="passChange === true">Nouveau mot de passe
                  <input type="password" name="newPassword" id="passwordChange" v-model="profile.newPassword">
                </label>
                <a class="specialA" href="#" v-else="passChange === false" @click="passChange = true">Changer le mot de passe ?</a>

                <div class="message" v-if="profile.error">
                  {{ profile.error }}
                </div>
              </form>
            </section>
            <hr>
            <section class="buttons">
              <a class="specialA" href="#" @click="edit = false, passChange = false">Annuler</a>
              <button type="submit" class="success" @click.prevent="editUserProfile()">Sauvegarder</button>
            </section>
          </section>
        </section>

        <section class="settings" id="security" v-if="tab === 'confidSecurity'">
          <security v-model="security"></security>
        </section>

        <section class="settings" id="confCall" v-if="tab === 'voiceVideo'">
          <conf-call></conf-call>
        </section>

        <section class="settings" id="notifications" v-if="tab === 'notifications'">
          <notifications></notifications>
        </section>

        <section class="settings" id="textImage" v-if="tab === 'textImage'">
          <options-text-image></options-text-image>
        </section>

        <section class="settings" id="displaylook" v-if="tab === 'displaylook'">
          <appearance></appearance>
        </section>

        <section class="settings" id="language" v-if="tab === 'language'">
          <languages></languages>
        </section>

        <section class="buttons">
          <button class="success" @click="finish()">Terminer</button>
          <button class="danger" @click="disconnect()">Se déconnecter</button>
        </section>
      </section>
    </section>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Store, mapGetters, mapActions } from 'vuex'
import { IUser } from '@/types/user.types'

import Avatar from '../Contents/components/Avatar.vue'
import Upload from '../Contents/components/Upload.vue'
import Security from './components/User/Security.vue'
import ConfCall from './components/User/ConfCall.vue'
import Notifications from './components/User/Notifications.vue'
import OptionsTextImage from './components/User/OptionsTextImage.vue'
import Appearance from './components/User/Appearance.vue'
import Languages from './components/User/Languages.vue'
import { ComponentOptions } from 'vue'

@Component({
  Store,
  components: {
    Avatar,
    Upload,
    Security,
    ConfCall,
    Notifications,
    OptionsTextImage,
    Appearance,
    Languages
  },
  methods: {
    ...mapActions([
      'updateUser'
    ])
  },
  computed: {
    ...mapGetters([
      'user'
    ]),
  },
  sockets: {
    profile (result: any) {
      if (result.success === true) {
        this.edit = false
        this.passChange = false
        if (result.preparedUser.avatar === undefined) {
          this.profile.avatar = this.user.avatar
        } else {
          this.profile.avatar = result.preparedUser.avatar
        }
        this.updateUser(this.profile)
      } else {
        this.profile.error = result.message
        setTimeout(() => {
          this.profile.error = null
        }, 3000)
      }
    }
  }
} as ComponentOptions<UserParams>)
export default class UserParams extends Vue {
  get tag () {
    if (this.user) {
      return this.user.tag
    }
  }

  public passChange: boolean = false
  public edit: boolean = false
  public security: any = {
    analyse: 'extreme',
    allowPrivateMsg: true
  }
  private tab: string = 'account'
  private profile: any = {
    pseudo: '',
    email: '',
    password: '',
    newPassword: '',
    avatar: null,
    tag: 0,
    error: null
  }
  private user?: IUser

  public authenticateUser (user: any) {
    this.$store.dispatch('authenticateUser', user)
  }

  public disconnect () {
    this.authenticateUser(null)
    this.finish()
  }

  public editUserProfile () {
    this.profile.tag = this.tag
    this.$socket.emit('profile', this.profile)
    this.profile.newPassword = ''
  }

  public closeModal (e: any) {
    if (e.target.classList.contains('modal')) {
      this.$emit('close')
    }
  }

  public finish () {
    this.$emit('close')
  }

  public setTab (tabName: any) {
    this.tab = tabName
  }

  public uploadChange (newImage: any) {
    this.profile.avatar = newImage
  }

  private mounted () {
    this.profile.id = this.user.id
    this.profile.pseudo = this.user.pseudo
    this.profile.email = this.user.email
    this.profile.avatar = this.user.avatar
    this.profile.password = 'root'
  }
}
</script>

<style lang="scss" scoped>
  .set {
    width: 800px;
    height: 650px;

    .tab#nitro {
      color: rgb(114, 137, 218);
    }

    .tab.is-active#nitro {
      color: #FFF;
      background: #7289da;
      border-radius: 4px;
    }

    .content {
      flex: 1;
      background-color: #2E3136;
    }
  }

  /* My Account */
  #account {
    .account-profil {
      background: rgba(32, 34, 37, .3);
      border: solid #202225 1px;
      margin-top: 20px;
      margin-bottom: 20px;
      padding: 10px;

      #entireForm {
        display: flex;

        .logo-ce {
          margin: 0 20px 0 0;
        }

        form, form > label {
          display: flex;
          flex-direction: column;
          width: 100%;
          margin-top: 5px;

          input {
            color: #f6f6f7;
            background-color: rgba(0, 0, 0, .1);
            width: 100%;
            border: 1px solid rgba(0, 0, 0, .3);
            border-radius: 3px;
            padding: 10px;
            height: 30px;
            margin-top: 10px;
            margin-bottom: 10px;
          }
        }
      }

      .buttons {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        a {
          margin-right: 30px;
        }
      }
    }

    .account-profil.noEdit {
      display: flex;

      #user-informations {
        margin-top: 5px;
        margin-left: 15px;
        margin-right: 120px;

        .information.label.marg {
          margin-top: 10px;
        }

        .information {
          text-transform: inherit;
          font-size: 14px;
        }
      }
    }
  }

  .specialA:hover {
    text-decoration: underline;
  }
</style>

<template>
  <section class="modal" @click="closeModal($event)">
    <section class="set">
      <section class="menu">
        <h1 class="title">Paramètres Utilisateur</h1>
        <button class="tab" :class="{'is-active': tab === 'account'}"
                @click="setTab('account')">Mon Compte</button>
        <button class="tab" :class="{'is-active': tab === 'confidSecurity'}"
                @click="setTab('confidSecurity')">Vie Privée & Sécurité</button>

        <h1 class="title">Paramètres de l'appli...</h1>
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
      </section>

      <section class="content">
        <!-- Account View -->
        <section id="account" class="settings" v-if="tab === 'account'">
          <h2 class="titleSection">Mon Compte</h2>

          <!-- User Informations -->
          <section class="account-profil noEdit" v-show="!edit">
            <section class="logo-group">
            </section>
            <section id="user-informations">
              <h3 class="information label">Nom d'utilisateur</h3>
              <span class="information">{{ user.pseudo }}<span class="tag">#{{ tag }}</span></span>
              <h3 class="information label marg">Email</h3>
              <span class="information">uneAdresseEmail@gmail.com</span>
            </section>
            <section class="buttons">
              <button class="connect" @click="edit = true">Éditer</button>
            </section>
          </section>

          <!-- Edit Mode -->
          <section class="account-profil" v-show="edit">
            <section id="entireForm">
              <form autocomplete="off">
                <upload v-model="profile.file"></upload>

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

        <!-- Security View -->
        <section class="settings" id="security" v-if="tab === 'confidSecurity'">
          <h2 class="titleSection">Confidentialité & Sécurité</h2>
          <section class="somethinghere" id="privateMsgDanger">
            <h2 class="information">Message privé sans danger</h2>
            <p class="section-description">Analyser et supprimer automatiquement les messages privés reçus renfermant un contenu explicite.</p>
            <div>
              <input id="moyen" name="security" type="radio">
              <section class="checkbox green">
                <div>
                  <label class="fake-checkbox" for="moyen"></label>
                </div>
                <div>
                  <h3 class="sec-title medium">
                    Protégez-moi
                  </h3>
                  <p class="section-description">
                    Analyser les messages privés de tout le monde.
                  </p>
                </div>
              </section>
            </div>
            <div>
              <input id="fort" name="security" type="radio">
              <section class="checkbox orange">
                <div>
                  <label class="fake-checkbox" for="fort"></label>
                </div>
                <div>
                  <h3 class="sec-title hard">
                    Mes amis sont sympas
                  </h3>
                  <p class="section-description">
                    Analyser les messages privés de tout le monde hormis les amis.
                  </p>
                </div>
              </section>
            </div>
            <div>
              <input id="extreme" name="security" type="radio">
              <section class="checkbox red">
                <div>
                  <label class="fake-checkbox" for="extreme"></label>
                </div>
                <div>
                  <h3 class="sec-title extreme">
                    Je vis dangereusement
                  </h3>
                  <p class="section-description">
                    Désactiver cette option. Ne rien analyser. Allons tout droit vers le côté obscur.
                  </p>
                </div>
              </section>
            </div>
          </section>
          <section class="somethinghere" id="paramsConfidentialityServer">
            <h2 class="information">Paramètres confidentialité serveur par défaut</h2>
            <ul>
              <li class="param-content">
                <section class="param">
                  <p>Autoriser les messages privés provenant de membres de groupes/channels</p>
                  <div class="checkbox-grey">
                    <input type="checkbox" value="1" class="checkboxNone" id="allowPrivateMsg"
                           name="allowPrivateMsg"><label for="allowPrivateMsg" class="labelCircle"></label>
                    <div class="checkboxDiv"></div>
                  </div>
                </section>
                <p class="section-description">
                  Ce paramètre s'applique lorsque vous rejoignez un nouveau serveur. Il ne s'applique pas à ceux que vous avez joint auparavant.
                </p>
              </li>
            </ul>
          </section>
          <section class="somethinghere" id="canIAddU">
            <h2 class="information">Qui peut vous ajouter en ami</h2>
            <ul>
              <li class="param-content">
                <section class="param">
                  <p>Tout le monde</p>
                  <div class="checkbox-grey">
                    <input type="checkbox" value="1" class="checkboxNone" id="everyone"
                           name="everyone"><label for="everyone" class="labelCircle"></label>
                    <div class="checkboxDiv"></div>
                  </div>
                </section>
              </li>
              <li class="param-content">
                <section class="param">
                  <p>Les amis de vos amis</p>
                  <div class="checkbox-grey">
                    <input type="checkbox" value="1" class="checkboxNone" id="ftof"
                           name="ftof"><label for="ftof" class="labelCircle"></label>
                    <div class="checkboxDiv"></div>
                  </div>
                </section>
              </li>
              <li class="param-content">
                <section class="param">
                  <p>Membre du serveur</p>
                  <div class="checkbox-grey">
                    <input type="checkbox" value="1" class="checkboxNone" id="groupChanMember"
                           name="groupChanMember"><label for="groupChanMember" class="labelCircle"></label>
                    <div class="checkboxDiv"></div>
                  </div>
                </section>
              </li>
            </ul>
          </section>
        </section>

        <!-- ConfCall View -->
        <section class="settings" id="confCall" v-if="tab === 'voiceVideo'">
          <h2 class="titleSection">Paramètres vocaux</h2>
          <section class="somethinghere" id="inOut">
            <section class="periph" style="margin-right: 40px;">
              <section class="opt">
                <label for="entryPeriph" class="information">Périphérique d'entrée</label>
                <select name="entryPeriph" id="entryPeriph">
                  <option value="default">Par défaut</option>
                </select>
              </section>
              <h2 class="information" style="margin-top:20px;">Volume d'entrée</h2>
              <div class="slider">
                <input type="number" class="input-slider" value="50" readonly="">
                <div class="track"></div>
                <div class="barr">
                  <div class="barFill" style="width: 50%;"></div>
                </div>
                <div class="track">
                  <div class="grabber" style="left: 50%;">
                    <span class="bubble elevation">50%</span>
                  </div>
                </div>
              </div>
            </section>
            <section class="periph">
              <section class="opt">
                <label for="entryPeriph" class="information">Périphérique de sortie</label>
                <select name="outPeriph" id="outPeriph">
                  <option value="default">Par défaut</option>
                </select>
              </section>
              <h2 class="information" style="margin-top: 20px;">Volume de sortie</h2>
              <div class="slider">
                <input type="number" class="input-slider" value="50" readonly="">
                <div class="track"></div>
                <div class="barr">
                  <div class="barFill" style="width: 50%;"></div>
                </div>
                <div class="track">
                  <div class="grabber" style="left: 50%;">
                    <span class="bubble elevation">50%</span>
                  </div>
                </div>
              </div>
            </section>
          </section>

          <hr>

          <section class="somethinghere" id="activMicro">
            <h2 class="information">Activation du micro</h2>
            <div>
              <input checked id="no-analyze" name="security" type="radio">
              <section class="checkbox blue">
                <div>
                  <label class="fake-checkbox" for="no-analyze"></label>
                </div>
                <div>
                  <h3 class="sec-title">
                    Détection de la voix
                  </h3>
                </div>
              </section>
            </div>
            <div>
              <input checked id="analyze" name="security" type="radio">
              <section class="checkbox blue">
                <div>
                  <label class="fake-checkbox" for="analyze"></label>
                </div>
                <div>
                  <h3 class="sec-title">
                    Appuyer-pour-parler
                  </h3>
                </div>
              </section>
            </div>
          </section>
          <section class="somethinghere" id="vocSensibility">
            <h2 class="information">Sensibilité de la détection vocale</h2>
            <div class="slider">
              <input type="number" class="input-slider" value="50" readonly="">
              <div class="track"></div>
              <div class="barr">
                <div class="barFill" style="width: 50%;"></div>
              </div>
              <div class="track">
                <div class="grabber" style="left: 50%;">
                  <span class="bubble elevation">50%</span>
                </div>
              </div>
            </div>
          </section>

          <hr>

          <section class="somethinghere" id="vidParams">
            <h2 class="titleSection">Paramètres vidéo</h2>
            <section class="somethinghere" id="vid">
              <section id="cam">
                <section class="opt">
                  <label for="entryCam" class="information">Caméra</label>
                  <select name="entryCam" id="entryCam">
                    <option value="default">Par défaut</option>
                  </select>
                </section>
              </section>
              <section id="previsualisation">
                <h2 class="information">Aperçu</h2>
                <div id="tryCam">
                  <button class="connect">Test vidéo</button>
                </div>
              </section>
            </section>
          </section>
        </section>

        <!-- Notifications View -->
        <section class="settings" id="notifications" v-if="tab === 'notifications'">
          <h2 class="titleSection">Notifications</h2>
          <section class="somethinghere" id="notif">
            <ul>
              <li class="param-content">
                <section class="param">
                  <p>Activer les notifications sur le bureau</p>
                  <div class="checkbox-grey">
                    <input type="checkbox" value="1" class="checkboxNone" id="desktopNotif"
                           name="desktopNotif"><label for="desktopNotif" class="labelCircle"></label>
                    <div class="checkboxDiv"></div>
                  </div>
                </section>
              </li>
            </ul>
          </section>
        </section>

        <!-- Text & Images View -->
        <section class="settings" id="textImage" v-if="tab === 'textImage'">
          <h2 class="titleSection">Texte & images</h2>

          <section class="somethinghere" id="showStuffs">
            <h2 class="information">Affiche les images, vidéos et lolcats</h2>
            <ul>
              <li class="param-content">
                <section class="param">
                  <p>Lorsqu'ils sont envoyés comme liens dans le salon</p>
                  <div class="checkbox-grey">
                    <input type="checkbox" value="1" class="checkboxNone" id="room"
                           name="room"><label for="room" class="labelCircle"></label>
                    <div class="checkboxDiv"></div>
                  </div>
                </section>
              </li>
              <li class="param-content">
                <section class="param">
                  <p>Lorsqu'ils sont envoyés directement dans Qwirk</p>
                  <div class="checkbox-grey">
                    <input type="checkbox" value="1" class="checkboxNone" id="qwirkSend"
                           name="qwirkSend"><label for="qwirkSend" class="labelCircle"></label>
                    <div class="checkboxDiv"></div>
                  </div>
                </section>
                <p class="section-description">
                  Les images plus lourdes que 10MB ne seront pas prévisualisées.
                </p>
              </li>
            </ul>
          </section>

          <section class="somethinghere" id="linkPreview">
            <h2 class="information">Prévisualisation de lien</h2>
            <ul>
              <li class="param-content">
                <section class="param">
                  <p>Afficher des informations sur le site web envoyé dans le salon</p>
                  <div class="checkbox-grey">
                    <input type="checkbox" value="1" class="checkboxNone" id="showInfoWebsite"
                           name="showInfoWebsite"><label for="showInfoWebsite" class="labelCircle"></label>
                    <div class="checkboxDiv"></div>
                  </div>
                </section>
              </li>
            </ul>
          </section>

          <section class="somethinghere" id="emojiscvrt">
            <h2 class="information">émojis</h2>
            <ul>
              <li class="param-content">
                <section class="param">
                  <p>Montrer les réactions émoji sur les messages</p>
                  <div class="checkbox-grey">
                    <input type="checkbox" value="1" class="checkboxNone" id="displayEmo"
                           name="displayEmo"><label for="displayEmo" class="labelCircle"></label>
                    <div class="checkboxDiv"></div>
                  </div>
                </section>
              </li>
              <li class="param-content">
                <section class="param">
                  <p>Convertir automatiquement les émoticônes dans vos messages emoji</p>
                  <div class="checkbox-grey">
                    <input type="checkbox" value="1" class="checkboxNone" id="convertEmoOnTchat"
                           name="convertEmoOnTchat"><label for="convertEmoOnTchat" class="labelCircle"></label>
                    <div class="checkboxDiv"></div>
                  </div>
                </section>
                <p class="section-description">
                  Par exemple, quand vous tapez :-) Qwirk le convertira en <img src="../../../renderer/assets/emoji.png" alt="emoji" id="emojiExample">
                </p>
              </li>
            </ul>
          </section>
        </section>

        <!-- Appearance View -->
        <section class="settings" id="displaylook" v-if="tab === 'displaylook'">
          <h2 class="titleSection">Apparence</h2>
          <section class="somethinghere" id="theme">
            <h2 class="information">Thème</h2>
            <section id="preview">
              <section id="innerSpec">
                <section id="convers">
                  <section class="onechat">
                    <section class="avatar">
                      <img src="http://i0.wp.com/marioasselin.com/wp-content/plugins/buddypress/bp-core/images/mystery-man.jpg" alt="avatar-account">
                    </section>
                    <section class="text">
                      <span class="username">Ravaniss <span class="hours">Aujourd'hui à 19:07</span></span>
                      <p>Regardez-moi je suis un beau papillon</p>
                    </section>
                  </section>
                  <section class="onechat">
                    <section class="avatar">
                      <img src="http://i0.wp.com/marioasselin.com/wp-content/plugins/buddypress/bp-core/images/mystery-man.jpg" alt="avatar-account">
                    </section>
                    <section class="text">
                      <span class="username">Ravaniss <span class="hours">Aujourd'hui à 19:07</span></span>
                      <p>Battant des ailes au clair de lune</p>
                    </section>
                  </section>
                  <section class="onechat">
                    <section class="avatar">
                      <img src="http://i0.wp.com/marioasselin.com/wp-content/plugins/buddypress/bp-core/images/mystery-man.jpg" alt="avatar-account">
                    </section>
                    <section class="text">
                      <span class="username">Ravaniss <span class="hours">Aujourd'hui à 19:07</span></span>
                      <p>En attendant le jour ou</p>
                    </section>
                  </section>
                  <section class="onechat">
                    <section class="avatar">
                      <img src="http://i0.wp.com/marioasselin.com/wp-content/plugins/buddypress/bp-core/images/mystery-man.jpg" alt="avatar-account">
                    </section>
                    <section class="text">
                      <span class="username">Ravaniss <span class="hours">Aujourd'hui à 19:08</span></span>
                      <p>Le mode compact serait activé</p>
                    </section>
                  </section>
                  <section class="onechat">
                    <section class="avatar">
                      <img src="http://i0.wp.com/marioasselin.com/wp-content/plugins/buddypress/bp-core/images/mystery-man.jpg" alt="avatar-account">
                    </section>
                    <section class="text">
                      <span class="username">Ravaniss <span class="hours">Aujourd'hui à 19:08</span></span>
                      <p>Oh voilà !</p>
                    </section>
                  </section>
                </section>
              </section>
            </section>
            <form>
              <div>
                <input id="clear" name="security" type="radio">
                <section class="checkbox blue">
                  <div>
                    <label class="fake-checkbox" for="clear"></label>
                  </div>
                  <div>
                    <h3 class="sec-title">
                      Clair
                    </h3>
                  </div>
                </section>
              </div>
              <div>
                <input checked id="dark" name="security" type="radio">
                <section class="checkbox blue">
                  <div>
                    <label class="fake-checkbox" for="dark"></label>
                  </div>
                  <div>
                    <h3 class="sec-title">
                      Sombre
                    </h3>
                  </div>
                </section>
              </div>
            </form>
          </section>
          <section class="somethinghere" id="Msgtheme">
            <h2 class="information">Affichage des messages</h2>
            <form action="">
              <div>
                <input checked id="confortable" name="security" type="radio">
                <section class="checkbox blue">
                  <div>
                    <label class="fake-checkbox" for="confortable"></label>
                  </div>
                  <div>
                    <h3 class="sec-title">
                      Confortable : Moderne, beau et agréable à voir
                    </h3>
                  </div>
                </section>
              </div>
              <div>
                <input id="irc" name="security" type="radio">
                <section class="checkbox blue">
                  <div>
                    <label class="fake-checkbox" for="irc"></label>
                  </div>
                  <div>
                    <h3 class="sec-title">
                      Compact : Affiche plus de messages en même temps à l'écran. #IRC
                    </h3>
                  </div>
                </section>
              </div>
            </form>
          </section>
        </section>

        <!-- Languages View -->
        <section class="settings" id="language" v-if="tab === 'language'">
          <h2 class="titleSection">Langue</h2>
          <section class="somethinghere">
            <h2 class="information">Sélectionnez une langue</h2>
            <section id="languageList">
              <ul>
                <li class="param-content">
                  <section class="langueAndCheck">
                    <label for="french">Français
                      <div class="checkbox-green">
                        <input type="checkbox" value="1" class="checkboxNone" id="french"
                               name="french"><label for="french" class="labelCircle"></label>
                        <div class="checkboxDiv"></div>
                      </div>
                    </label>
                  </section>
                  <section class="drapAndLogo">
                    <span class="section-description">Français</span>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAAvCAYAAABe1bwWAAAA0klEQVR42u3bPQrCQBRFYUuzsSSNdoIbyMrSJEJ+dpWAWoogmPGOEBh5Y6U25gycBbyvvrMKX7avc9WpQU3KfdLlevtZ513xjSY1qE7ls0MIslaVOe7fYWyVSkKYUjlgnpUzSqocMC+lHqYBxtR6mCMwpsHDOGBMd2DeBAwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAsEIYNXryTh2mBMbXsfONlLMNtZTiZT1QNTHFQSeyzxUb1alwQzKh6tQ0tHq2SfJj8Q3YaAAAAAElFTkSuQmCC" alt="french-drap" style="width:27px; height:18px;">
                  </section>
                </li>
              </ul>
            </section>
          </section>
        </section>
        <section class="buttons">
          <button class="success" @click="finish()">Terminer</button>
          <button class="danger" @click="disconnect()">Se déconnecter</button>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
  import Vuex from 'vuex'

  import Upload from '../Contents/components/Upload.vue'

  export default {
    components: { Upload },
    data () {
      return {
        tab: 'account',
        passChange: false,
        edit: false,
        profile: {
          pseudo: 'Ravaniss',
          email: 'ravaniss@local.dev',
          password: 'root',
          newPassword: '',
          file: '',
          tag: 0,
          error: null
        }
      }
    },
    sockets: {
      profile (result) {
        if (result.success === true) {
          this.edit = false
          this.passChange = false
        } else {
          this.profile.error = result.message
          setTimeout(() => {
            this.profile.error = null
          }, 3000)
        }
      }
    },
    methods: {
      ...Vuex.mapActions([
        'authenticateUser'
      ]),
      disconnect () {
        this.authenticateUser(null)
        this.finish()
      },
      editUserProfile () {
        const result = this.$emit('upload-file')
        this.profile.file = result.$children[0].image
        this.profile.tag = this.tag
        this.$socket.emit('profile', this.profile)
      },
      closeModal (e) {
        if (e.target.classList.contains('modal')) {
          this.$emit('close')
        }
      },
      finish () {
        this.$emit('close')
      },
      setTab (tabName) {
        this.tab = tabName
      }
    },
    computed: {
      ...Vuex.mapGetters([
        'user'
      ]),
      tag: function () {
        if (this.user) {
          return this.user.tag
        }
      }
    }
  }
</script>

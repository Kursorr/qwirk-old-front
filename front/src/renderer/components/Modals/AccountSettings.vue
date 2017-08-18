<template>
  <section class="modal" @click="closeModal($event)">
    <section class="set">
      <section class="menu">
        <h1 class="title">Paramètres Utilisateur</h1>
        <button class="tab" :class="{'is-active': tab === 'account'}"
                @click="setTab('account')">Mon Compte</button>
        <button class="tab" :class="{'is-active': tab === 'confidSecurity'}"
                @click="setTab('confidSecurity')">Vie Privée & Sécurité</button>
        <button class="tab" :class="{'is-active': tab === 'connect'}"
                @click="setTab('connect')">Connexions</button>

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
        <section id="account" class="settings" v-if="tab === 'account'">
          <h2 class="titleSection">Mon Compte</h2>

          <!-- No Edit Mode -->
          <section class="account-profil noEdit" v-show="!edit">
            <section class="logo-group">
            </section>
            <section id="user-informations">
              <h3 class="information label">Nom d'utilisateur</h3>
              <span class="information">Ravaniss<span class="tag">#2187</span></span>
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
              <section class="logo-ce">
                <section class="logo-group">
                  <section class="bckg"></section>
                  <section class="upload-file">Changer l'icône</section>
                  <input type="file" class="file-input" accept=".jpg,.jpeg,.png,.gif">
                </section>
              </section>
              <form action="" method="POST">
                <label for="pseudo" class="information">Nom d'Utilisateur
                  <input type="text" name="pseudo" id="pseudo">
                </label>
                <label for="email" class="information">Email
                  <input type="email" name="email" id="email">
                </label>
                <label for="password" class="information">Mot de passe actuel
                  <input type="password" name="password" id="password">
                </label>
                <label for="passwordChange" class="information" v-if="passChange === true">Nouveau mot de passe
                  <input type="password" name="passwordChange" id="passwordChange">
                </label>
                <a class="specialA" href="#" v-else="passChange === false" @click="passChange = true">Changer le mot de passe ?</a>
              </form>
            </section>
            <hr>
            <section class="buttons">
              <a class="specialA" href="#" @click="edit = false, passChange = false">Annuler</a>
              <button type="submit" class="success">Sauvegarder</button>
            </section>
          </section>
        </section>

        <section class="settings security" v-if="tab === 'confidSecurity'">
          come in
        </section>

        <section class="settings connect" v-if="tab === 'connect'">
          come in
        </section>

        <section class="settings voiceVideo" v-if="tab === 'voiceVideo'">
          come in
        </section>

        <section class="settings notifications" v-if="tab === 'notifications'">
          come in
        </section>

        <section class="settings textImage" v-if="tab === 'textImage'">
          come in
        </section>

        <section class="settings displaylook" v-if="tab === 'displaylook'">
          come in
        </section>

        <section class="settings language" v-if="tab === 'language'">
          come in
        </section>
        <section class="buttons">
          <button class="success" @click="finish()">Terminer</button>
          <button class="danger" @click="authenticateUser(null)">Se déconnecter</button>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        tab: 'account',
        passChange: false,
        edit: false
      }
    },
    methods: {
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
      },
      avatarChange () {
        this.$nextTick(() => {
          const inputId = 'file'
          document.getElementById(inputId).click()
        })
      },
      update () {
        this.updateUser(this.userForm)
        this.userForm.actualPassword = ''
        this.userForm.newPassword = ''
      }
    },
    mounted () {
      this.userForm.id = this.user.id
      this.userForm.username = this.user.name
      this.userForm.email = this.user.email
    }
  }
</script>

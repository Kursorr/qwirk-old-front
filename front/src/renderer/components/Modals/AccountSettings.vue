<template>
  <section class="modal" @click="closeModal($event)">
    <section class="set">
      <section class="menu">
        <h1 class="title">Paramètres Utilisateur</h1>
        <button class="tab" :class="{'is-active': tab === 'account'}"
                @click="setTab('account')">Compte</button>
        <button class="tab" :class="{'is-active': tab === 'voice'}"
                @click="setTab('voice')">Son et voix</button>
        <button class="tab" :class="{'is-active': tab === 'other'}"
                @click="setTab('other')">Autres</button>
      </section>

      <section class="content">
        <section class="settings" v-if="tab === 'account'">
          <form action="/editUser/:id" method="POST">
            <label for="username">Votre pseudo :</label>
            <input type="text" name="username" id="username">

            <label for="email">Votre adresse mail :</label>
            <input type="email" name="email" id="email">

            <label for="actualPassword">Mot de passe actuel :</label>
            <input type="password" name="actualPassword" id="actualPassword">

            <label for="newPassword">Votre nouveau mot de passe :</label>
            <input type="password" name="newPassword" id="newPassword">

            <input id="file" type="file" accept="image/*" style="display:none">

            <label>Votre avatar</label>
            <img alt="Avatar in setting"
                 src="http://i0.wp.com/marioasselin.com/wp-content/plugins/buddypress/bp-core/images/mystery-man.jpg" @click="avatarChange()">

            <button type="submit" @click.prevent="update()">Enregistrer les informations</button>
          </form>
        </section>
        <section class="settings voice" v-if="tab === 'voice'">
          Voice settings
        </section>
        <section class="settings other" v-if="tab === 'other'">
          Other settings
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
        tab: 'account'
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

<template>
  <section class="modal" id="create-group" @click="closeModal($event)">
    <section class="set">
      <section class="menu">
        <h1 class="title">Paramètres du groupe</h1>
        <button class="tab" :class="{'is-active': tab === 'global-view'}"
                @click="setTab('global-view')">Vue d'ensemble</button>
        <button class="tab" :class="{'is-active': tab === 'moderation'}"
                @click="setTab('moderation')">Moderation</button>
        <button class="tab" :class="{'is-active': tab === 'roles'}"
                @click="setTab('roles')">Rôles</button>

        <h1 class="subtitle">Gestion des utilisateurs</h1>
        <button class="tab" :class="{'is-active': tab === 'invitation'}"
                @click="setTab('invitation')">Invitations</button>
        <button class="tab" :class="{'is-active': tab === 'members'}"
                @click="setTab('members')">Membres</button>
        <button class="tab" :class="{'is-active': tab === 'bans'}"
                @click="setTab('bans')">Bans</button>
      </section>

      <section class="content">
        <section id="general" class="settings" v-if="tab === 'global-view'">
          <section class="principal">
            <form class="form" method="POST">
              <label for="group_name">Nom du groupe</label>
              <input type="text" name="group_name">
            </form>
            <section class="avatar"></section>
          </section>
        </section>

        <section id="moderation" v-if="tab === 'moderation'">
          <section class="verification_members">
            <section class="text">
              <h1>Moderation</h1>
              <h2>Niveau de vérification</h2>
              <p>Les membres du serveur doivent répondre aux critères suivants avant de pouvoir envoyer des messages dans les salons de discussion ou initier une conversation privée. Ces exigences ne s'appliquent pas aux membres ayant un rôle assigné. Nous recommandons de définir un niveau de vérification pour un Qwirk public.</p>
            </section>
            <section class="group_modo">
              <label class="label_checkbox">
                <input type="checkbox" class="input_checkbox">
              </label>
              <section class="checkmark">
                <h2>Aucun</h2>
                <p>Aucune restriction</p>
              </section>
            </section>
          </section>
        </section>

        <section id="invit" class="settings" v-if="tab === 'invitation'">
          <section class="listing">
            <table>
              <thead>
              <tr>
                <th>Name</th>
                <th>Annuler l'invitation</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Suini</td>
                <td><button class="cancel">Annuler</button></td>
              </tr>
              </tbody>
            </table>
          </section>
        </section>

        <section id="member" class="settings" v-if="tab === 'members'">
          <section class="member">
            <section class="filter">
              <span>1 membre</span>
              <section class="seek">
                <input type="text" placeholder="Rechercher un membre">
                <select>
                  <option value="">@everyone</option>
                </select>
              </section>
            </section>
            <section class="members">
              <section class="one_member">
                <section class="avbtn">
                  <section class="avatar"></section>
                  <button type="button" class="adds">+</button>
                </section>
                <section class="profil">
                  <span class="pseudo">Ravaniss</span>
                </section>
              </section>
            </section>
          </section>
        </section>

        <section id="role" class="settings" v-if="tab === 'roles'">
          <section class="role-content">
            <section class="role-list">
              <section class="add">
                <h1>Rôles</h1>
                <button type="button" class="adds">+</button>
              </section>
              <ul>
                <li>@everyone</li>
              </ul>
            </section>
            <section class="new-role">
              <h1>Nom du rôle</h1>
              <input type="text" name="role_name" />
              <section class="checkbox">
                <h1>Permissions Générales</h1>
                <ul>
                  <li>
                    <label><input name="administrator" type="checkbox" />Administrateur</label>
                  </li>
                  <li>
                    <label><input name="group_managment" type="checkbox" />Gérer le groupe</label>
                  </li>
                  <li>
                    <label><input name="role_managment" type="checkbox" />Gérer les rôles</label>
                  </li>
                  <li>
                    <label><input name="kick_members_managment" type="checkbox" />Expulser les membres</label>
                  </li>
                  <li>
                    <label><input name="ban_members_managment" type="checkbox" />Bannir les membres</label>
                  </li>
                  <li>
                    <label><input name="create_invit_managment" type="checkbox" />Créer une invitation</label>
                  </li>
                  <li>
                    <label><input name="pseudo_change_managment" type="checkbox" />Administrateur</label>
                  </li>
                </ul>
                <h1>Permissions Vocales</h1>
                <ul>
                  <li>
                    <label><input name="speak_voc_managment" type="checkbox" />Parler</label>
                  </li>
                  <li>
                    <label><input name="mute_voc_managment" type="checkbox" />Rendre muets</label>
                  </li>
                  <li>
                    <label><input name="sourd_voc_managment" type="checkbox" />Rendre sourds</label>
                  </li>
                  <li>
                    <label><input name="move_members_voc_managment" type="checkbox" />Déplacer les membres</label>
                  </li>
                </ul>
              </section>
              <button type="submit" class="cancel">Supprimer le rôle</button>
            </section>
          </section>
        </section>

        <section id="ban" class="settings" v-if="tab === 'bans'">
          <section class="listing">
            <table>
              <thead>
              <tr>
                <th>Name</th>
                <th>Raison</th>
                <th>Déban</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Helixar()</td>
                <td>Insultes...</td>
                <td><button class="cancel">Déban</button></td>
              </tr>
              </tbody>
            </table>
          </section>

        </section>
        <section class="buttons">
          <button class="success" @click="finish()">Terminer</button>
          <button class="danger" @click="cancel()">Annuler</button>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        tab: 'global-view'
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
      }
    }
  }
</script>

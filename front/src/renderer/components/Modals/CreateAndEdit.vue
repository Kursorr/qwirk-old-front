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
        <button class="tab" :class="{'is-active': tab === 'members'}"
                @click="setTab('members')">Membres</button>
        <button class="tab" :class="{'is-active': tab === 'invitation'}"
                @click="setTab('invitation')">Invites</button>
        <button class="tab" :class="{'is-active': tab === 'bans'}"
                @click="setTab('bans')">Bans</button>
      </section>

      <section class="content">
        <section id="general" class="settings" v-if="tab === 'global-view'">
          <h2 class="title">Vue d'ensemble du serveur</h2>
          <section class="principal">
            <form class="form" method="POST">
              <section class="logo">
                <section>
                  <section class="logo-group">
                    <section class="bckg"></section>
                    <section class="upload-file">Changer l'icône</section>
                    <input type="file" class="file-input" accept=".jpg,.jpeg,.png,.gif">
                  </section>
                </section>
                <section class="upload">
                  <p class="section-description">We recommend an image of at least 512x512 for your server.</p>
                  <button>
                    <div>
                      Upload Image
                      <input type="file" class="file-input" accept=".jpg,.jpeg,.png,.gif">
                    </div>
                  </button>
                </section>

                <section class="name">
                  <label for="group_name" class="information">Nom du groupe</label>
                  <input type="text" name="group_name" id="group_name" v-model="form.groupName">
                </section>
              </section>

              <hr>

              <section class="afk">
                <section class="options">
                  <section class="opt first">
                    <label for="salonAfk" class="information">Salon AFK</label>
                    <select name="salonAfk" id="salonAfk">
                      <option value="none">Aucun salon AFK</option>
                      <option value="general">General</option>
                    </select>
                  </section>
                  <section class="opt second">
                    <label for="delay" class="information">Délai avant inactivité</label>
                    <select name="delay" id="delay">
                      <option value="1min">1 minute</option>
                      <option value="5mins">5 minutes</option>
                      <option value="15mins">15 minutes</option>
                      <option value="30mins">30 minutes</option>
                      <option value="1h">1 hour</option>
                    </select>
                  </section>
                </section>
                <p class="section-description">Déplace automatiquement les membres dans ce salon après une certaine période d'inactivité et les rend muets.</p>
              </section>
            </form>
          </section>
        </section>

        <section id="moderation" class="settings" v-if="tab === 'moderation'">
          <h2>Moderation</h2>
          <section id="verification-members">
            <section class="text">
              <h2 class="information">Niveau de vérification</h2>
              <p
                class="section-description">Les membres du serveur doivent répondre aux critères suivants avant de pouvoir envoyer des messages
                dans les salons de discussion ou initier une conversation privée. Ces exigences ne s'appliquent pas aux membres ayant un rôle assigné. Nous recommandons de définir un niveau de vérification pour un Qwirk public.</p>
            </section>
            <div>
              <input checked id="faible" name="security" type="radio">
              <section class="checkbox blue">
                <div>
                  <label class="fake-checkbox" for="faible"></label>
                </div>
                <div>
                  <h3 class="sec-title weak">
                    Faible
                  </h3>
                  <p class="section-description">
                    Création d'un compte
                  </p>
                </div>
              </section>
            </div>
            <div>
              <input id="moyen" name="security" type="radio">
              <section class="checkbox green">
                <div>
                  <label class="fake-checkbox" for="moyen"></label>
                </div>
                <div>
                  <h3 class="sec-title medium">
                    Moyen
                  </h3>
                  <p class="section-description">
                    Doit aussi être inscrit sur Qwirk depuis plus de 5 minutes.
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
                    (╯°□°）╯︵ ┻━┻
                  </h3>
                  <p class="section-description">
                    Doit aussi être un membre de ce serveur depuis plus de 10 minutes.
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
                    ┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻
                  </h3>
                  <p class="section-description">
                    Doit aussi être un membre de ce serveur depuis plus de 30 minutes.
                  </p>
                </div>
              </section>
            </div>
          </section>
          <hr>
          <section id="content-filter">
            <h2 class="information">Filtre de contenu explicite</h2>

            <p class="section-description">Analyse et supprime automatiquement les messages contenant des contenus explicites envoyés sur ce serveur. Merci de choisir le niveau de filtre à appliquer aux membres de votre serveur.
            </p>

            <div>
              <input checked id="no-analyze" name="security" type="radio">
              <section class="checkbox blue">
                <div>
                  <label class="fake-checkbox" for="no-analyze"></label>
                </div>
                <div>
                  <h3 class="sec-title">
                    Ne pas analyser de messages.
                  </h3>
                  <p class="section-description">
                    Aucune fête n'égale les goûters de mamie.
                  </p>
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
                    Analyse les messages des membres sans rôle.
                  </h3>
                  <p class="section-description">
                    Option recommandée pour les serveurs qui utilisent des rôles pour les membres de confiance.
                  </p>
                </div>
              </section>
            </div>
            <div>
              <input checked id="full-analyze" name="security" type="radio">
              <section class="checkbox blue">
                <div>
                  <label class="fake-checkbox" for="full-analyze"></label>
                </div>
                <div>
                  <h3 class="sec-title">
                    Analyse les messages envoyés par tout les membres.
                  </h3>
                  <p class="section-description">
                    Option recommandée lorsque vous voulez un nettoyage brillant.
                  </p>
                </div>
              </section>
            </div>
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
              <section id="general-permission">
                <h1>Permissions Générales</h1>
                <ul>
                  <li>
                    <label><input name="administrator" type="checkbox" v-model="form.perm.admin" />
                      Administrateur
                    </label>
                  </li>
                  <li>
                    <label><input name="group_managment" type="checkbox" v-model="form.perm.manageGroup" />
                      Gérer le
                      groupe</label>
                  </li>
                  <li>
                    <label><input name="role_managment" type="checkbox" v-model="form.perm.manageRole" />
                      Gérer les rôles
                    </label>
                  </li>
                  <li>
                    <label><input name="kick_members_managment" type="checkbox" v-model="form.perm.kick" />
                      Expulser les membres
                    </label>
                  </li>
                  <li>
                    <label><input name="ban_members_managment" type="checkbox" v-model="form.perm.ban" />
                      Bannir les membres
                    </label>
                  </li>
                  <li>
                    <label><input name="create_invit_managment" type="checkbox" v-model="form.perm.createInvite" />
                      Créer une invitation
                    </label>
                  </li>
                  <li>
                    <label><input name="pseudo_change_managment" type="checkbox" v-model="form.perm.changeName" />
                      Changer de pseudo
                    </label>
                    <p class="section-description">Les membres ayant cette permission peuvent changer leur propre
                      pseudo.</p>
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

        <section id="invit" class="settings" v-if="tab === 'invitation'">
          <h2>Invites</h2>
          <p class="section-description">Vous trouverez ici tout les liens d'invitation actif. Vous pouvez en
            révoquer ou en créer une nouvelle.</p>
            <section class="listing">
              <table>
                <tr>
                  <th>Inviter</th>
                  <th>Code d'invitation</th>
                  <th class="text-right">Utilisations</th>
                  <th class="text-right">Expire</th>
                </tr>
                <tr class="remove-invitation">
                  <td>Suini</td>
                  <td>BySDkq57</td>
                  <td class="text-right">3</td>
                  <td class="text-right">23:01:45</td>
                </tr>
              </table>
            </section>
        </section>

        <section id="ban" class="settings" v-if="tab === 'bans'">
          <h2>1 banni</h2>
          <p class="section-description">
            Les interdictions par défaut sont par compte et IP.
            Un utilisateur peut contourner une interdiction de propriété intellectuelle en utilisant un proxy.
            Le contournement des interdictions peut être très difficile en permettant la vérification du téléphone</p>
          <section class="listing">
            <section class="ban-member">
              <section class="avatar">
                <img src="http://i0.wp.com/marioasselin.com/wp-content/plugins/buddypress/bp-core/images/mystery-man.jpg" alt="avatar">
              </section>
              <span>Grafikart</span>
              <span> #2497</span>
            </section>
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
        tab: 'global-view',
        form: {
          groupName: '',
          perm: {
            admin: false,
            manageGroup: false,
            manageRole: false,
            kick: false,
            ban: false,
            createInvite: false,
            changeName: false
          }
        }
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
      cancel () {
        this.$emit('close')
      },
      setTab (tabName) {
        this.tab = tabName
      }
    }
  }
</script>

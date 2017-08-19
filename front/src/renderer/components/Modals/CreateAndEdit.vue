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
          <h2 class="titleSection">Vue d'ensemble du serveur</h2>
          <section class="principal">
            <form class="form" method="POST">
              <section class="logo">
                <section class="logo-ce">
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
                  <section class="opt w">
                    <label for="salonAfk" class="information">Salon AFK</label>
                    <select name="salonAfk" id="salonAfk">
                      <option value="none">Aucun salon AFK</option>
                      <option value="general">General</option>
                    </select>
                  </section>
                  <section class="opt w">
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
          <h2 class="titleSection">Moderation</h2>
          <section id="verification-members">
            <section class="text">
              <h2 class="information">Niveau de vérification</h2>
              <p
                class="section-description">Les membres du serveur doivent répondre aux critères suivants avant de pouvoir envoyer des messages
                dans les salons de discussion ou initier une conversation privée. Ces exigences ne s'appliquent pas aux membres ayant un rôle assigné. Nous recommandons de définir un niveau de vérification pour un Qwirk public.</p>
            </section>
            <form action="">
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
            </form>
          </section>
          <hr>
          <section id="content-filter">
            <h2 class="information">Filtre de contenu explicite</h2>

            <p class="section-description">Analyse et supprime automatiquement les messages contenant des contenus explicites envoyés sur ce serveur. Merci de choisir le niveau de filtre à appliquer aux membres de votre serveur.
            </p>

            <form action="">
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
            </form>
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
              <h2>Nom du rôle</h2>
              <input type="text" name="role_name" />
              <section class="permission">

                <h3>Permissions Générales</h3>
                <ul>
                  <li class="param-content">
                    <section class="param">
                      <p>Administrateur</p>
                      <div class="checkbox-green">
                        <input type="checkbox" value="1" class="checkboxNone" id="admin" name="admin"
                               v-model="form.perm.admin"><label for="admin" class="labelCircle"></label>
                        <div class="checkboxDiv"></div>
                      </div>
                    </section>
                    <p class="section-description">Les membres ayant cette permission ont toutes les permissions et
                      peuvent aussi passer outre les permissions associées à des salons spécifiques. Pensez-y à deux
                      fois avant d'octroyer cette permission, c'est dangereux.
                    </p>
                  </li>

                  <li class="param-content">
                    <section class="param">
                      <p>Gérer le groupe</p>
                      <div class="checkbox-green">
                        <input type="checkbox" value="1" class="checkboxNone" id="manageGroup" name="manageGroup"
                               v-model="form.perm.manageGroup"><label for="manageGroup" class="labelCircle"></label>
                        <div class="checkboxDiv"></div>
                      </div>
                    </section>
                    <p class="section-description">Les membres ayant cette permission peuvent changer le nom du groupe.
                    </p>
                  </li>

                  <li class="param-content">
                    <section class="param">
                      <p>Gérer les rôles</p>
                      <div class="checkbox-green">
                        <input type="checkbox" value="1" class="checkboxNone" id="manageRole" name="manageRole"
                               v-model="form.perm.manageRole"><label for="manageRole" class="labelCircle"></label>
                        <div class="checkboxDiv"></div>
                      </div>
                    </section>
                    <p class="section-description">Les membres ayant cette permission peuvent créer de nouveaux rôles
                      et modifier/effacer les rôles plus bas que celui-ci.
                    </p>
                  </li>

                  <li class="param-content">
                    <section class="param">
                      <p>Expulser les membres</p>
                      <div class="checkbox-green">
                        <input type="checkbox" value="1" class="checkboxNone" id="kick" name="kick"
                               v-model="form.perm.kick"><label for="kick" class="labelCircle"></label>
                        <div class="checkboxDiv"></div>
                      </div>
                    </section>
                  </li>

                  <li class="param-content">
                    <section class="param">
                      <p>Bannir les membres</p>
                      <div class="checkbox-green">
                        <input type="checkbox" value="1" class="checkboxNone" id="banMember" name="banMember"
                               v-model="form.perm.ban"><label for="banMember" class="labelCircle"></label>
                        <div class="checkboxDiv"></div>
                      </div>
                    </section>
                  </li>

                  <li class="param-content">
                    <section class="param">
                      <p>Créer une invitation</p>
                      <div class="checkbox-green">
                        <input type="checkbox" value="1" class="checkboxNone" id="createInvite" name="createInvite"
                               v-model="form.perm.createInvite"><label for="createInvite" class="labelCircle"></label>
                        <div class="checkboxDiv"></div>
                      </div>
                    </section>
                  </li>

                  <li class="param-content">
                    <section class="param">
                      <p>Changer de pseudo</p>
                      <div class="checkbox-green">
                        <input type="checkbox" value="1" class="checkboxNone" id="changeName" name="changeName"
                               v-model="form.perm.changeName"><label for="changeName" class="labelCircle"></label>
                        <div class="checkboxDiv"></div>
                      </div>
                    </section>
                    <p class="section-description">Les membres ayant cette permission peuvent changer leur propre
                      pseudo.</p>
                  </li>
                </ul>

                <h3>Permissions de texte</h3>
                <ul>
                  <li class="param-content">
                    <section class="param">
                      <p>Lire les message</p>
                      <div class="checkbox-green">
                        <input type="checkbox" value="1" class="checkboxNone" id="readMsg" name="readMsg"
                               ><label for="readMsg" class="labelCircle"></label>
                        <div class="checkboxDiv"></div>
                      </div>
                    </section>
                  </li>

                  <li class="param-content">
                    <section class="param">
                      <p>Envoyer des messages</p>
                      <div class="checkbox-green">
                        <input type="checkbox" value="1" class="checkboxNone" id="sendMsg" name="sendMsg"
                        ><label for="sendMsg" class="labelCircle"></label>
                        <div class="checkboxDiv"></div>
                      </div>
                    </section>
                  </li>

                  <li class="param-content">
                    <section class="param">
                      <p>Gérer les messages</p>
                      <div class="checkbox-green">
                        <input type="checkbox" value="1" class="checkboxNone" id="manageMsg" name="manageMsg"
                        ><label for="manageMsg" class="labelCircle"></label>
                        <div class="checkboxDiv"></div>
                      </div>
                    </section>
                    <p class="section-description">Les membres ayant cette permission peuvent supprimer les messages
                      des autres membres ou épingler n'importe quel message.</p>
                  </li>

                  <li class="param-content">
                    <section class="param">
                      <p>Intégrer des liens</p>
                      <div class="checkbox-green">
                        <input type="checkbox" value="1" class="checkboxNone" id="linksOn" name="linksOn"
                        ><label for="linksOn" class="labelCircle"></label>
                        <div class="checkboxDiv"></div>
                      </div>
                    </section>
                  </li>

                  <li class="param-content">
                    <section class="param">
                      <p>Attacher des fichiers</p>
                      <div class="checkbox-green">
                        <input type="checkbox" value="1" class="checkboxNone" id="pinFile" name="pinFile"
                        ><label for="pinFile" class="labelCircle"></label>
                        <div class="checkboxDiv"></div>
                      </div>
                    </section>
                  </li>

                  <li class="param-content">
                    <section class="param">
                      <p>Voir les anciens messages</p>
                      <div class="checkbox-green">
                        <input type="checkbox" value="1" class="checkboxNone" id="seeOldMsg" name="seeOldMsg"
                        ><label for="seeOldMsg" class="labelCircle"></label>
                        <div class="checkboxDiv"></div>
                      </div>
                    </section>
                  </li>

                  <li class="param-content">
                    <section class="param">
                      <p>Mentionner @Everyone</p>
                      <div class="checkbox-green">
                        <input type="checkbox" value="1" class="checkboxNone" id="mention" name="mention"
                        ><label for="mention" class="labelCircle"></label>
                        <div class="checkboxDiv"></div>
                      </div>
                    </section>
                    <p class="section-description">
                      Les membres avec cette permission peuvent envoyer des notifications à tous les membres de ce salon en commançant leur message par @everyone.
                    </p>
                  </li>
                </ul>

                <h3>Permissions Vocales</h3>
                <ul>
                  <li class="param-content">
                    <section class="param">
                      <p>Se connecter</p>
                      <div class="checkbox-green">
                        <input type="checkbox" value="1" class="checkboxNone" id="connect" name="connect"
                        ><label for="connect" class="labelCircle"></label>
                        <div class="checkboxDiv"></div>
                      </div>
                    </section>
                  </li>

                  <li class="param-content">
                    <section class="param">
                      <p>Parler</p>
                      <div class="checkbox-green">
                        <input type="checkbox" value="1" class="checkboxNone" id="speak" name="speak"
                        ><label for="speak" class="labelCircle"></label>
                        <div class="checkboxDiv"></div>
                      </div>
                    </section>
                  </li>

                  <li class="param-content">
                    <section class="param">
                      <p>Rendre muets</p>
                      <div class="checkbox-green">
                        <input type="checkbox" value="1" class="checkboxNone" id="mute" name="mute"
                        ><label for="mute" class="labelCircle"></label>
                        <div class="checkboxDiv"></div>
                      </div>
                    </section>
                  </li>

                  <li class="param-content">
                    <section class="param">
                      <p>Rendre sourds</p>
                      <div class="checkbox-green">
                        <input type="checkbox" value="1" class="checkboxNone" id="sourd" name="sourd"
                        ><label for="sourd" class="labelCircle"></label>
                        <div class="checkboxDiv"></div>
                      </div>
                    </section>
                  </li>

                  <li class="param-content">
                    <section class="param">
                      <p>Déplacer les membres</p>
                      <div class="checkbox-green">
                        <input type="checkbox" value="1" class="checkboxNone" id="memberManage" name="memberManage"
                        ><label for="memberManage" class="labelCircle"></label>
                        <div class="checkboxDiv"></div>
                      </div>
                    </section>
                    <p class="section-description">
                      Les membres ayant cette permission peuvent déplacer d'autres membres présents dans le salon vers
                      un autre salon, à condition qu'ils aient tous deux accès à cet autre salon.
                    </p>
                  </li>
                </ul>
              </section>

              <button type="submit" class="delete-role">Supprimer</button>
            </section>
          </section>
        </section>

        <section id="member" class="settings" v-if="tab === 'members'">
          <h2 class="titleSection">1 membre - <a href="#">Purger</a></h2>
          <input type="text" placeholder="Rechercher un membre">

          <section class="listing">
            <section class="member">
              <section class="avatar">
                <img src="http://i0.wp.com/marioasselin.com/wp-content/plugins/buddypress/bp-core/images/mystery-man.jpg" alt="avatar">
              </section>
              <span>Grafikart</span>
              <span> #2497</span>
              <button type="button" class="add-role">+</button>
            </section>
          </section>
        </section>

        <section id="invit" class="settings" v-if="tab === 'invitation'">
          <h2 class="titleSection">Invites</h2>
          <p class="section-description">Vous trouverez ici tout les liens d'invitation actif. Vous pouvez en révoquer ou en créer une nouvelle.</p>
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
          <h2 class="titleSection">1 banni</h2>
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

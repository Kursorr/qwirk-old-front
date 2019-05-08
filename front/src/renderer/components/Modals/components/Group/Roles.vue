<template>
  <section>
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
                  <input type="checkbox" value="1" class="checkboxNone" id="admin" name="admin"><label for="admin" class="labelCircle"></label>
                  <div class="checkboxDiv"></div>
                </div>
              </section>
              <p class="section-description">Les membres ayant cette permission ont toutes les permissions et
                peuvent aussi passer outre les permissions associées à des salons spécifiques. Pensez-y à deux
                fois avant d'octroyer cette permission, c'est dangereux.</p>
            </li>

            <li class="param-content">
              <section class="param">
                <p>Gérer le serveur</p>
                <div class="checkbox-green">
                  <input type="checkbox" value="1" class="checkboxNone" id="manageGroup" name="manageGroup"><label for="manageGroup" class="labelCircle"></label>
                  <div class="checkboxDiv"></div>
                </div>
              </section>
              <p class="section-description">Les membres ayant cette permission peuvent changer le nom du serveur.</p>
            </li>

            <li class="param-content">
              <section class="param">
                <p>Gérer les rôles</p>
                <div class="checkbox-green">
                  <input type="checkbox" value="1" class="checkboxNone" id="manageRole" name="manageRole"><label for="manageRole" class="labelCircle"></label>
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
                  <input type="checkbox" value="1" class="checkboxNone" id="kick" name="kick"><label for="kick" class="labelCircle"></label>
                  <div class="checkboxDiv"></div>
                </div>
              </section>
            </li>

            <li class="param-content">
              <section class="param">
                <p>Bannir les membres</p>
                <div class="checkbox-green">
                  <input type="checkbox" value="1" class="checkboxNone" id="banMember" name="banMember"><label for="banMember" class="labelCircle"></label>
                  <div class="checkboxDiv"></div>
                </div>
              </section>
            </li>

            <li class="param-content">
              <section class="param">
                <p>Créer une invitation</p>
                <div class="checkbox-green">
                  <input type="checkbox" value="1" class="checkboxNone" id="createInvite" name="createInvite"><label for="createInvite" class="labelCircle"></label>
                  <div class="checkboxDiv"></div>
                </div>
              </section>
            </li>

            <li class="param-content">
              <section class="param">
                <p>Changer de pseudo</p>
                <div class="checkbox-green">
                  <input type="checkbox" value="1" class="checkboxNone" id="changeName" name="changeName"><label for="changeName" class="labelCircle"></label>
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
</template>

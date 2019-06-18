<template>
  <section>
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
</template>

<style lang="scss">
  section#verification-members {
    margin-top: 15px;

    section.text {
      margin-bottom: 10px;
    }
  }
</style>

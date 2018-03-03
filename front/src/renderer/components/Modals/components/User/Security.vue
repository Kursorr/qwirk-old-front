<template>
  <section>
    <h2 class="titleSection">Confidentialité & Sécurité</h2>
    <section class="somethinghere" id="privateMsgDanger">
      <h2 class="information">Message privé sans danger</h2>
      <p class="section-description">Analyser et supprimer automatiquement les messages privés reçus renfermant un contenu explicite.</p>
      <div>
        <input id="moyen" name="security" type="radio" value="medium" v-model="res.analyse">
        <section class="checkbox green">
          <div>
            <label class="fake-checkbox" for="moyen" @click="changeSecurity"></label>
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
        <input id="fort" name="security" type="radio" value="hard" v-model="res.analyse">
        <section class="checkbox orange">
          <div>
            <label class="fake-checkbox" for="fort" @click="changeSecurity"></label>
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
        <input id="extreme" name="security" type="radio" value="extreme" v-model="res.analyse">
        <section class="checkbox red">
          <div>
            <label class="fake-checkbox" for="extreme" @click="changeSecurity"></label>
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
                     name="allowPrivateMsg" v-model="res.allowPrivateMsg">
              <label for="allowPrivateMsg" class="labelCircle" @click="changeSecurity"></label>
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
</template>

<script>
  export default {
    name: 'Security',
    props: ['value'],
    data () {
      return {
        res: JSON.parse(JSON.stringify(this.value))
      }
    },
    methods: {
      changeSecurity () {
        this.$nextTick(function () {
          this.$emit('input', this.res)
        })
      }
    }
  }
</script>

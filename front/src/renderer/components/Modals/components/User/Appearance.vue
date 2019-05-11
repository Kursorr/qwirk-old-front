<template>
  <section>
    <h2 class="titleSection">Apparence</h2>
    <section class="somethinghere" id="theme">
      <h2 class="information">Thème</h2>
      <section id="preview">
        <section id="innerSpec">
          <section id="convers">
            <section class="onechat">
              <section class="avatar">
                <avatar :url="user.avatar" size="small"></avatar>
              </section>
              <section class="text">
                <span class="username">Ravaniss <span class="hours">Aujourd'hui à 19:07</span></span>
                <p>Regardez-moi je suis un beau papillon</p>
              </section>
            </section>
            <section class="onechat">
              <section class="avatar">
                <avatar :url="user.avatar" size="small"></avatar>
              </section>
              <section class="text">
                <span class="username">Ravaniss <span class="hours">Aujourd'hui à 19:07</span></span>
                <p>Battant des ailes au clair de lune</p>
              </section>
            </section>
            <section class="onechat">
              <section class="avatar">
                <avatar :url="user.avatar" size="small"></avatar>
              </section>
              <section class="text">
                <span class="username">Ravaniss <span class="hours">Aujourd'hui à 19:07</span></span>
                <p>En attendant le jour ou</p>
              </section>
            </section>
            <section class="onechat">
              <section class="avatar">
                <avatar :url="user.avatar" size="small"></avatar>
              </section>
              <section class="text">
                <span class="username">Ravaniss <span class="hours">Aujourd'hui à 19:08</span></span>
                <p>Le mode compact serait activé</p>
              </section>
            </section>
            <section class="onechat">
              <section class="avatar">
                <avatar :url="user.avatar" size="small"></avatar>
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
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import * as Vuex from 'vuex'

  import Avatar from '../../../Contents/components/Avatar.vue'

  @Component({
    components: {
      Avatar
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
  })
  export default class Appearance extends Vue {
    private user: any
  }
</script>

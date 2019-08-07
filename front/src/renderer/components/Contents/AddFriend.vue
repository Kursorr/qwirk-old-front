<template>
  <section id="addFriend">
    <h1>Ajouter un ami</h1>
    <p>Tu peux ajouter un ami grâce à son Qwirk Tag.</p>
    <div v-if="request.requestResult === false" class="error">
      Mhm, ça n'a pas marché. Vérifie bien sur la casse, l'orthographe, les espaces et les chiffres sont corrects.
    </div>
    <div v-if="tagError" class="error">
      Nous avons besoin du tag à quatre chiffres de {{ pseudo }} pour le différencier des autres.
    </div>
    <div v-if="request.requestResult === true" class="success">
      Mission accompli ! Attends, qu'est ce que... C'est un oiseau ? c'est un avion ? Non, c'est Superman qui envoie ta demande d'amis à <strong>{{ request.pseudo }}</strong> ! Un mec bien, ce Clark.
    </div>
    <form method="POST" @submit.prevent="addNewFriend()">
      <input type="text" placeholder="Entrez un identifiant qwirk#0000" v-model="newFriend">
      <button v-bind:class="[visible ? 'visible' : '']">Envoyer une requête d'ami</button>
    </form>
  </section>
</template>

<script lang="ts">
  import { Component, Vue, Watch } from 'vue-property-decorator'
  import { Store, mapGetters } from 'vuex'

  @Component({
    Store,
    computed: {
      ...mapGetters([
        'user'
      ])
    },
    sockets: {
      sendFriendRequest (request) {
        this.request = request
      }
    }
  })
  export default class AddFriend extends Vue {
    private newFriend: string = ''
    public request = {}
    public visible = false
    public tagError = false
    public pseudo = ''

    @Watch('newFriend')
    onInputChanged (val: string) {
      this.visible = val.length > 0
    }

    public addNewFriend () {
      const split = this.newFriend.split('#')
      const tag = split[1]
      this.pseudo = split[0]

      if (!tag || tag.length !== 4) {
        this.tagError = !this.tagError
      }

      this.$socket.emit('ADD::FRIEND', {
        user: this.user.id,
        friend: this.pseudo,
        tag: parseInt(tag)
      })
    }
  }
</script>

<style lang="scss">
  #addFriend {
    padding: 15px;
    color: white;

    .error {
      font-weight: 500;
      font-size: 14px;
      color: #f04747;
    }

    .success {
      font-weight: 500;
      font-size: 14px;
      color: #43b581;

      strong {
        font-weight: 700;
      }
    }

    h1 {
      color: #FFF;
      font-weight: 700;
      font-size: 16px;
      text-transform: uppercase;
      margin: 5px 0;
    }

    p {
      margin: 10px 0;
      font-size: 14px;
      color: hsla(0,0%,100%,.6);
    }

    form {
      display: flex;
      border: 1px solid rgba(0,0,0,.2);
      background-color: rgba(36,39,43,.2);
      margin: 13px 0;
      position: relative;
      border-radius: 3px;
      flex-direction: row;
      align-items: center;
      height: 52px;

      input {
        border-radius: 4px;
        border-color: rgba(0,0,0,.2);
        background-color: rgba(36,39,43,.2);
        height: 52px;
        flex: 1;
      }

      button {
        border-radius: 4px;
        border: solid #7289da 1px;
        background-color: #7289da;
        color: white;
        opacity: .5;
        width: auto;
        height: 32px;
        transition: background-color .17s ease,color .17s ease;
        font-weight: 500;
        line-height: 16px;
        padding: 2px 16px;
        font-size: 14px;
      }

      .visible {
        opacity: 1;
      }
    }
  }
</style>

<template>
  <section id="add_friend">
    <h1>Ajouter un ami</h1>
    <p>Vous pouvez ajouter un ami grâce à leur identifiant Qwirk.</p>
    <div v-if="request.requestResult === false">
      Mhm, ça n'a pas marché. Vérifie bien sur la casse, l'orthographe, les espaces et les chiffres sont corrects.
    </div>
    <div v-if="request.requestResult === true">
      Mission accompli ! Attends, qu'est ce que... C'est un oiseau ? c'est un avion ? Non, c'est Superman qui envoie ta demande d'amis à {{ request.pseudo }} ! Un mec bien, ce Clark.
    </div>
    <form method="POST" @submit.prevent="addNewFriend()">
      <input type="text" placeholder="Entrez un identifiant qwirk #0000" v-model="newFriend">
      <button>Envoyer une requête d'ami</button>
    </form>
  </section>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import { mapGetters }from 'vuex'
  import store from "../../vuex/store"

  @Component({
    store,
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

    public addNewFriend () {
      this.$socket.emit('addFriend', {
        user: this.user.id,
        friend: this.newFriend
      })
    }
  }
</script>

<style lang="scss">
  #add_friend {
    padding: 15px;
    color: white;

    h1 {
      text-transform: uppercase;
      font-size: 16px;
    }

    p {
      margin: 10px 0;
      font-size: 14px;
    }

    form {
      display: flex;

      input {
        border-radius: 4px;
        border: solid grey 1px;
        height: 44px;
        width: 240px;
      }
      button {
        border-radius: 4px;
        border: solid #3F91C0 1px;
        background-color: #3F91C0;
        color: white;
      }
    }
  }
</style>

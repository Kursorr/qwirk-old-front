<template>
  <section id="add_friend">
    <h1>Ajouter un ami</h1>
    <p>Vous pouvez ajouter un ami grâce à leur identifiant Qwirk.</p>
    <form method="POST" @submit.prevent="sendIt()">
      <input type="text" placeholder="Entrez un identifiant qwirk #0000" v-model="idQwirk">
      <button>Envoyer une requête d'ami</button>
    </form>
  </section>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class AddFriend extends Vue {
    private idQwirk: string = ''

    public sendIt () {
      this.$http.post('/friends', {
        idQwirk: this.idQwirk
      }).then((result: any) => {
        console.log(result)
        this.idQwirk = result.data.idQwirk + '-'
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

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

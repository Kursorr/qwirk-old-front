<template>
  <section>
    <input v-model="searchTerm" type="text" placeholder="Search" @keyup="onSearchInput()">

    <div>
      <div v-for="hit in searchResults">
        <li>{{ hit._source.text }}</li>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class Search extends Vue {
    baseUrl: string = 'http://172.18.0.5:4100'
    searchTerm: string = ''
    searchDebounce = null
    searchResults = []
    numHits: null
    searchOffset: 0

    async onSearchInput () {
      clearTimeout(this.searchDebounce)
      this.searchDebounce = setTimeout(async () => {
        this.searchOffset = 0
        this.searchResults = await this.search()
        console.log(this.searchResults)
      }, 100)
    }

    async search () {
      console.log(this.searchTerm)
      const response = await this.$http.get(`${this.baseUrl}/search?`, { params: { term: this.searchTerm, offset: this.searchOffset } })
      console.log(response)
      this.numHits = response.data.result.hits.hits.length
      return response.data.result.hits.hits
    }
  }
</script>

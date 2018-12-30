<template>
  <section>
    <input v-model="searchTerm" type="text" placeholder="Search" @keyup="onSearchInput()">

    <div>
      <transition-group name="fade" mode="out-in" tag="ul">
        <li v-for="(hit, index) in searchResults"
            :key="index"
            :style="{'transition-delay': `${index * 0.1}s`}">
          {{ hit._source.text }}
        </li>
      </transition-group>
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
      }, 100)
    }

    async search () {
      const response = await this.$http.get(`${this.baseUrl}/search?`, { params: { term: this.searchTerm, offset: this.searchOffset } })
      this.numHits = response.data.result.hits.hits.length
      return response.data.result.hits.hits
    }
  }
</script>

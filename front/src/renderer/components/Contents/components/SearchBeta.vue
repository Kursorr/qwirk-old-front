<template>
  <section>
    <div class="search">
      <input v-model="searchTerm" type="text" placeholder="Search" @keyup="onSearchInput()">
      <img src="../../assets/webrtc/confcall/search.svg" alt="search">
    </div>

    <div v-if="searchTerm !== ''">
      <div>{{ numHits }} Hits</div>
      <div>Displaying Results {{ searchOffset }} - {{ searchOffset + 9 }}</div>
      <div>
        <transition-group name="fade" mode="out-in" tag="ul">
          <li v-for="(hit, index) in searchResults"
              :key="index"
              :style="{'transition-delay': `${index * 0.1}s`}">
            <section class="onechat">
              <section class="avatar">
                <avatar :url="hit._source.avatar" size="small"></avatar>
              </section>
              <section class="text">
                <span class="username">{{hit._source.pseudo}}<!--<span class="hours">{{ message.postedAt }}</span>--></span>
                <p v-html="hit.highlight.text[0]"></p>
              </section>
            </section>
          </li>
        </transition-group>
        <button v-if="numHits > 9" @click.prevent="prevResultsPage()">Prev Page</button>
        <button v-if="numHits > 9" @click.prevent="nextResultsPage()">Next Page</button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import Avatar from '../Contents/components/Avatar'

  @Component({
    components: {
      Avatar
    }
  })
  export default class Search extends Vue {
    baseUrl: string = 'http://localhost:4100'
    searchTerm: string = ''
    searchDebounce = null
    searchResults = []
    numHits: any = null
    searchOffset: number = 0
    onSearchInput () {
      clearTimeout(this.searchDebounce)
      this.searchDebounce = setTimeout(async () => {
        this.searchOffset = 0
        this.searchResults = await this.search()
      }, 100)
    }

    async search () {
      const response = await this.$http.get(`${this.baseUrl}/search`, { params: { term: this.searchTerm, offset: this.searchOffset } })
      this.numHits = response.data.result.hits.total
      return response.data.result.hits.hits
    }

    async nextResultsPage () {
      if (this.numHits > 10) {
        this.searchOffset += 10
        if (this.searchOffset + 10 > this.numHits) {
          this.searchOffset = this.numHits - 10
        }
        this.searchResults = await this.search()
      }
    }

    async prevResultsPage () {
      this.searchOffset -= 10
      if (this.searchOffset < 0) {
        this.searchOffset = 0
      }
      this.searchResults = await this.search()
    }
  }
</script>

<style>
  em {
    background: rgba(250, 166, 26, .3);
  }

  .search {
    position: relative;
    font-weight: 500;
    overflow: hidden;
    margin-right: 10px;
    font-size: 14px;
  }

  .search > input {
    padding-left: 6px;
    height: 28px;
    border: none;
    position: relative;
    z-index: 1;
    color: #fff;
    background-color: hsla(0, 0%, 100%, 0.1);
    border-radius: 4px;
    -ms-flex-align: stretch;
    -webkit-box-align: stretch;
    -webkit-box-shadow: none;
    -webkit-box-sizing: border-box;
    -webkit-transition: width 0.2s ease-in-out;
    align-items: stretch;
    border-radius: 3px;
    box-shadow: none;
    box-sizing: border-box;
    transition: width 0.2s ease-in-out;
    width: 144px;
  }

  .search > input:focus {
    width: 200px;
  }

  .search > img {
    position: absolute;
    width: 18px;
    height: 18px;
    top: 4px;
    right: 6px;
    opacity: 0.3;
  }
</style>

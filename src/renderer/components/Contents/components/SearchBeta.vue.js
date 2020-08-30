import { __decorate } from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import Avatar from './Avatar.vue';
let Search = class Search extends Vue {
    constructor() {
        super(...arguments);
        this.baseUrl = 'http://localhost:4100';
        this.searchTerm = '';
        this.searchDebounce = null;
        this.searchResults = [];
        this.numHits = null;
        this.searchOffset = 0;
    }
    onSearchInput() {
        clearTimeout(this.searchDebounce);
        this.searchDebounce = setTimeout(async () => {
            this.searchOffset = 0;
            this.searchResults = await this.search();
        }, 100);
    }
    async search() {
        const response = await this.$http.get(`${this.baseUrl}/search`, { params: { term: this.searchTerm, offset: this.searchOffset } });
        this.numHits = response.data.result.hits.total;
        return response.data.result.hits.hits;
    }
    async nextResultsPage() {
        if (this.numHits > 10) {
            this.searchOffset += 10;
            if (this.searchOffset + 10 > this.numHits) {
                this.searchOffset = this.numHits - 10;
            }
            this.searchResults = await this.search();
        }
    }
    async prevResultsPage() {
        this.searchOffset -= 10;
        if (this.searchOffset < 0) {
            this.searchOffset = 0;
        }
        this.searchResults = await this.search();
    }
};
Search = __decorate([
    Component({
        components: {
            Avatar
        }
    })
], Search);
export default Search;

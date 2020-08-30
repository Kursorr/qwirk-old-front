import { __decorate } from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import MenuBar from '../components/Contents/MenuBar.vue';
import LibraryIcon from '../components/Svg/Menu/LibraryIcon.vue';
let Library = class Library extends Vue {
};
Library = __decorate([
    Component({
        components: {
            MenuBar,
            LibraryIcon
        }
    })
], Library);
export default Library;

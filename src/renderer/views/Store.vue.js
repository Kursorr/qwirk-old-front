import { __decorate } from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import MenuBar from '../components/Contents/MenuBar.vue';
import ShopIcon from '../components/Svg/Menu/ShopIcon.vue';
import IconBase from '../components/Svg/IconBase.vue';
import LeftArrow from '../components/Svg/LeftArrow.vue';
let Store = class Store extends Vue {
};
Store = __decorate([
    Component({
        components: {
            MenuBar,
            IconBase,
            ShopIcon,
            LeftArrow
        }
    })
], Store);
export default Store;

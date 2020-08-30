import { __decorate } from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import FriendIcon from '../../Svg/Menu/FriendIcon.vue';
import ShopIcon from '../../Svg/Menu/ShopIcon.vue';
import LibraryIcon from '../../Svg/Menu/LibraryIcon.vue';
import ActivityIcon from '../../Svg/Menu/ActivityIcon.vue';
import SuccessIcon from '../../Svg/Menu/SuccessIcon.vue';
let Menu = class Menu extends Vue {
};
Menu = __decorate([
    Component({
        components: {
            FriendIcon,
            ShopIcon,
            LibraryIcon,
            ActivityIcon,
            SuccessIcon
        }
    })
], Menu);
export default Menu;

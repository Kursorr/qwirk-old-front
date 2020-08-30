import { __decorate } from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import MenuBar from '../components/Contents/MenuBar.vue';
import FriendIcon from '../components/Svg/Menu/FriendIcon.vue';
let Friends = class Friends extends Vue {
};
Friends = __decorate([
    Component({
        components: {
            MenuBar,
            FriendIcon
        }
    })
], Friends);
export default Friends;

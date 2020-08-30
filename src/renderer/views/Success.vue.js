import { __decorate } from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import IconBase from '../components/Svg/IconBase.vue';
import OpenChestIcon from '../components/Svg/Game/chest/OpenChestIcon.vue';
import MoonIcon from '../components/Svg/Game/MoonIcon.vue';
let Success = class Success extends Vue {
    constructor() {
        super(...arguments);
        this.transition = false;
    }
    play() {
        this.transition = !this.transition;
    }
};
Success = __decorate([
    Component({
        components: {
            IconBase,
            MoonIcon,
            OpenChestIcon
        }
    })
], Success);
export default Success;

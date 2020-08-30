import { __decorate } from "tslib";
import Menue from './Sections/Menu.vue';
import Rooms from './Sections/Rooms.vue';
import Profile from './Sections/Profile.vue';
import { Component, Vue } from 'vue-property-decorator';
let NavigationBar = class NavigationBar extends Vue {
};
NavigationBar = __decorate([
    Component({
        components: {
            Menue,
            Rooms,
            Profile
        }
    })
], NavigationBar);
export default NavigationBar;

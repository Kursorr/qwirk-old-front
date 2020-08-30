import { __decorate } from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import Auth from './Auth.vue';
import NavigationBar from '../components/Navigation/NavigationBar.vue';
import NavigationChannel from '../components/Navigation/NavigationChannel.vue';
let LandingPage = class LandingPage extends Vue {
};
LandingPage = __decorate([
    Component({
        components: {
            NavigationBar,
            NavigationChannel,
            Auth
        },
        computed: {
            ...mapGetters({
                user: 'user'
            })
        }
    })
], LandingPage);
export default LandingPage;

import { __decorate } from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import Avatar from '../../../Contents/components/Avatar.vue';
let Appearance = class Appearance extends Vue {
};
Appearance = __decorate([
    Component({
        components: {
            Avatar
        },
        computed: {
            ...mapGetters([
                'user'
            ]),
            tag() {
                if (this.user) {
                    return this.user.tag;
                }
            }
        }
    })
], Appearance);
export default Appearance;

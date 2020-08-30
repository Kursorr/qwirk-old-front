import { __decorate } from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import Global from './components/Group/Global.vue';
import Moderation from './components/Group/Moderation.vue';
import Invitations from './components/Group/Invitations.vue';
import Roles from './components/Group/Roles.vue';
import Members from './components/Group/Members.vue';
import Bans from './components/Group/Bans.vue';
let ServerParams = class ServerParams extends Vue {
    constructor() {
        super(...arguments);
        this.tab = 'global-view';
    }
    closeModal(e) {
        if (e.target.classList.contains('modal')) {
            this.$emit('close');
        }
    }
    finish() {
        this.$emit('finish');
    }
    cancel() {
        this.$emit('close');
    }
    setTab(tabName) {
        this.tab = tabName;
    }
};
ServerParams = __decorate([
    Component({
        components: {
            Global,
            Moderation,
            Invitations,
            Roles,
            Members,
            Bans
        }
    })
], ServerParams);
export default ServerParams;

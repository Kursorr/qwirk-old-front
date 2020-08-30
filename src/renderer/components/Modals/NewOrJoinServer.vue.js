import { __decorate } from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import ServerParams from './ServerParams.vue';
let NewOrJoinServer = class NewOrJoinServer extends Vue {
    constructor() {
        super(...arguments);
        this.modal = {
            serverParams: false
        };
    }
    closeModal(e) {
        if (e.target.classList.contains('modal')) {
            this.$emit('close');
        }
    }
    setModal(modalName, value) {
        this.modal[modalName] = value;
    }
};
NewOrJoinServer = __decorate([
    Component({
        components: {
            ServerParams
        }
    })
], NewOrJoinServer);
export default NewOrJoinServer;

import { __decorate } from "tslib";
import { Component, Prop, Vue } from 'vue-property-decorator';
let Security = class Security extends Vue {
    constructor() {
        super(...arguments);
        this.res = JSON.parse(JSON.stringify(this.value));
    }
    changeSecurity() {
        this.$nextTick(function () {
            this.$emit('input', this.res);
        });
    }
};
__decorate([
    Prop()
], Security.prototype, "value", void 0);
Security = __decorate([
    Component
], Security);
export default Security;

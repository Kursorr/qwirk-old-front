import { __decorate } from "tslib";
import { Component, Prop, Vue } from 'vue-property-decorator';
let MenuBar = class MenuBar extends Vue {
};
__decorate([
    Prop()
], MenuBar.prototype, "filters", void 0);
__decorate([
    Prop()
], MenuBar.prototype, "separator", void 0);
__decorate([
    Prop()
], MenuBar.prototype, "iconName", void 0);
__decorate([
    Prop()
], MenuBar.prototype, "links", void 0);
MenuBar = __decorate([
    Component
], MenuBar);
export default MenuBar;

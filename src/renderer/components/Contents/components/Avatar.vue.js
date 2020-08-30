import { __decorate } from "tslib";
import { Component, Prop, Vue } from 'vue-property-decorator';
let Avatar = class Avatar extends Vue {
    get imagePath() {
        if (this.url === null || this.url === undefined) {
            return 'http://i0.wp.com/marioasselin.com/wp-content/plugins/buddypress/bp-core/images/mystery-man.jpg';
        }
        else if (this.url.indexOf('data:') !== -1) {
            return this.url;
        }
        else {
            return 'http://localhost:4100/avatars/' + this.url;
        }
    }
    get avatarSize() {
        return {
            'avatar-small': this.size === 'small',
            'avatar-medium': this.size === 'medium',
            'avatar-normal': this.size === 'normal',
            'avatar-big': this.size === 'big'
        };
    }
};
__decorate([
    Prop()
], Avatar.prototype, "url", void 0);
__decorate([
    Prop({ default: 'small' })
], Avatar.prototype, "size", void 0);
Avatar = __decorate([
    Component
], Avatar);
export default Avatar;

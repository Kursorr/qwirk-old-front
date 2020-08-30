import { __decorate } from "tslib";
const { Picker } = require('emoji-mart-vue');
import { Component, Vue } from 'vue-property-decorator';
let EmojiPicker = class EmojiPicker extends Vue {
    pickEmoji(emoji) {
        this.$emit('emoji', emoji.native);
    }
};
EmojiPicker = __decorate([
    Component({
        components: {
            Picker
        }
    })
], EmojiPicker);
export default EmojiPicker;

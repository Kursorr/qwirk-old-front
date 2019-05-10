import * as tslib_1 from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import * as Vuex from 'vuex';
import Members from './components/Members.vue';
import Bar from './components/Bar.vue';
import DropZone from './components/DropZone.vue';
import Conversation from './components/Conversation.vue';
import EmojiPicker from './components/EmojiPicker.vue';
let Tchat = class Tchat extends Vue {
    constructor() {
        super(...arguments);
        this.toggleDropZone = false;
        this.toggleEmoji = false;
        this.message = '';
    }
    append(emoji) {
        this.message += emoji;
    }
    getCurrentTap(msg) {
        this.message = msg;
    }
    onSubmit(e) {
        e.preventDefault();
        if (this.message === '') {
            return false;
        }
        this.$socket.emit('SEND::MESSAGE', {
            route: this.$route.params,
            author: this.user,
            content: this.message
        });
        this.message = '';
        e.target.value = '';
        /*this.$nextTick(function () {
          this.$emit('input', this.res)
        })*/
        setTimeout(() => {
            const tchatRoom = document.getElementById('convers');
            tchatRoom.scrollTop = tchatRoom.scrollHeight;
        }, 100);
    }
};
Tchat = tslib_1.__decorate([
    Component({
        components: {
            Members,
            Bar,
            DropZone,
            Conversation,
            EmojiPicker // Causes a slowdown
        },
        computed: {
            ...Vuex.mapGetters([
                'user'
            ])
        }
    })
], Tchat);
export default Tchat;
//# sourceMappingURL=Tchat.vue.js.map
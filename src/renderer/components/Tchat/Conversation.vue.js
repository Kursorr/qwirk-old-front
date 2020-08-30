import { __decorate } from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import { Store, mapActions, mapGetters } from 'vuex';
import Avatar from '../Contents/components/Avatar.vue';
let Conversation = class Conversation extends Vue {
};
Conversation = __decorate([
    Component({
        Store,
        components: {
            Avatar
        },
        sockets: {
            updateMessage(messages) {
                this.clearMessage();
                this.addMessage(messages);
            }
        },
        methods: {
            ...mapActions([
                'addMessage',
                'clearMessage'
            ])
        },
        computed: {
            ...mapGetters([
                'messages'
            ])
        }
    })
], Conversation);
export default Conversation;

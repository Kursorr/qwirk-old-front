import { __decorate } from "tslib";
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Store, mapGetters } from 'vuex';
let AddFriend = class AddFriend extends Vue {
    constructor() {
        super(...arguments);
        this.newFriend = '';
        this.request = {};
        this.visible = false;
        this.tagError = false;
        this.pseudo = '';
    }
    onInputChanged(val) {
        this.visible = val.length > 0;
    }
    addNewFriend() {
        const split = this.newFriend.split('#');
        const tag = split[1];
        this.pseudo = split[0];
        if (!tag || tag.length !== 4) {
            this.tagError = !this.tagError;
        }
        this.$socket.emit('ADD::FRIEND', {
            user: this.user.id,
            friend: this.pseudo,
            tag: parseInt(tag)
        });
    }
};
__decorate([
    Watch('newFriend')
], AddFriend.prototype, "onInputChanged", null);
AddFriend = __decorate([
    Component({
        Store,
        computed: {
            ...mapGetters([
                'user'
            ])
        },
        sockets: {
            sendFriendRequest(request) {
                this.request = request;
            }
        }
    })
], AddFriend);
export default AddFriend;

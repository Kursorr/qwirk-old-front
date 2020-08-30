import { __decorate } from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import { Store, mapGetters } from 'vuex';
import IconBase from '../../components/Svg/IconBase.vue';
import RemoveIcon from '../../components/Svg/Grids/RemoveIcon.vue';
let FriendGrid = class FriendGrid extends Vue {
    constructor() {
        super(...arguments);
        this.friends = '';
    }
    revokeFriend(friend) {
        this.$socket.emit('REVOKE::FRIEND', {
            user: this.user.id,
            friend: friend.pseudo
        });
    }
    mounted() {
        if (this.user) {
            this.$socket.emit('GET::FRIENDS', this.user.id);
        }
    }
};
FriendGrid = __decorate([
    Component({
        components: {
            IconBase,
            RemoveIcon
        },
        Store,
        computed: {
            ...mapGetters([
                'user'
            ])
        },
        sockets: {
            getFriends(data) {
                this.friends = data.filter(d => d.status === 1);
            },
            revokedFriend() {
                this.$socket.emit('GET::FRIENDS', this.user.id);
            }
        },
    })
], FriendGrid);
export default FriendGrid;

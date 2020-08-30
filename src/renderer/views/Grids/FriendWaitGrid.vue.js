import { __decorate } from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import { Store, mapGetters } from 'vuex';
import IconBase from '../../components/Svg/IconBase.vue';
import RevokeIcon from '../../components/Svg/Grids/RevokeIcon.vue';
import AcceptIcon from '../../components/Svg/Grids/AcceptIcon.vue';
let FriendGrid = class FriendGrid extends Vue {
    constructor() {
        super(...arguments);
        this.friends = '';
        this.requestedBy = '';
    }
    acceptFriend(friend) {
        this.$socket.emit('GET::NEW::FRIEND', {
            user: this.user.id,
            friend: friend.pseudo
        });
    }
    revokeFriend(friend) {
        this.$socket.emit('REVOKE::FRIEND', {
            user: this.user.id,
            friend: friend.pseudo
        });
    }
    mounted() {
        if (this.user) {
            if (this.user.id) {
                this.$socket.emit('GET::FRIENDS', this.user.id);
            }
        }
    }
};
FriendGrid = __decorate([
    Component({
        components: {
            IconBase,
            AcceptIcon,
            RevokeIcon
        },
        Store,
        computed: {
            ...mapGetters([
                'user'
            ])
        },
        sockets: {
            getFriends(data) {
                this.friends = data.filter(d => d.status === 2);
                this.requestedBy = data.filter(d => d.requestedBy === '');
            },
            acceptedFriend() {
                this.$socket.emit('GET::FRIENDS', this.user.id);
            },
            revokedFriend() {
                this.$socket.emit('GET::FRIENDS', this.user.id);
            }
        },
    })
], FriendGrid);
export default FriendGrid;

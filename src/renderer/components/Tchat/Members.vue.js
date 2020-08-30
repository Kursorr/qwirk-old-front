import { __decorate } from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import Avatar from '../Contents/components/Avatar.vue';
import { Store, mapGetters, mapActions } from 'vuex';
const HEIGHT = 54;
let Members = class Members extends Vue {
    constructor() {
        super(...arguments);
        this.userInfo = null;
    }
    getUserInfo(user, index) {
        if (this.userInfo !== null && this.userInfo === user) {
            this.userInfo = null;
            return;
        }
        this.userInfo = {
            pseudo: user.pseudo,
            avatar: user.avatar,
            tag: user.tag,
            status: user.status,
            index
        };
    }
    hideUserInfo() {
        this.userInfo = null;
    }
};
Members = __decorate([
    Component({
        Store,
        computed: {
            ...mapGetters([
                'currentChannel',
                'users',
            ]),
            placeholder() {
                return `Envoyer un message à ${this.userInfo.pseudo}`;
            },
            positionContainer() {
                let calculatedTop = this.userInfo.index * HEIGHT;
                const windowHeight = window.innerHeight;
                if ((calculatedTop + 253 + 38) > windowHeight) {
                    calculatedTop = windowHeight - 253 - 38;
                }
                return {
                    transform: `translateY(${calculatedTop}px)`
                };
            }
        },
        methods: {
            ...mapActions([
                'setUsers'
            ])
        },
        components: {
            Avatar
        },
        sockets: {
            getUsersFromChannel(data) {
                this.setUsers(data);
            }
        }
    })
], Members);
export default Members;

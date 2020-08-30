import { __decorate } from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import { Store, mapGetters, mapActions } from 'vuex';
import UserParams from '../../Modals/UserParams.vue';
import Avatar from '../../Contents/components/Avatar.vue';
let Profile = class Profile extends Vue {
    constructor() {
        super(...arguments);
        this.changeStatusContainer = false;
        this.modal = {
            accountSettings: false
        };
    }
    setModal(modalName, value) {
        this.modal[modalName] = value;
    }
    hideStatusContainer() {
        this.changeStatusContainer = false;
    }
    toggleStatus() {
        this.changeStatusContainer = !this.changeStatusContainer;
    }
    changeStatus(status) {
        this.$socket.emit('CHANGE::STATUS', { userId: this.user.id, status });
    }
};
Profile = __decorate([
    Component({
        Store,
        components: {
            UserParams,
            Avatar
        },
        computed: {
            ...mapGetters([
                'user'
            ])
        },
        methods: {
            ...mapActions([
                'updateUser'
            ])
        },
        sockets: {
            getStatus(status) {
                const updateUser = JSON.parse(JSON.stringify(this.user));
                updateUser.status = status;
                this.updateUser(updateUser);
            }
        }
    })
], Profile);
export default Profile;

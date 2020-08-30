import { __decorate } from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import { Store, mapGetters, mapActions } from 'vuex';
import Avatar from '../Contents/components/Avatar.vue';
import Upload from '../Contents/components/Upload.vue';
import Security from './components/User/Security.vue';
import ConfCall from './components/User/ConfCall.vue';
import Notifications from './components/User/Notifications.vue';
import OptionsTextImage from './components/User/OptionsTextImage.vue';
import Appearance from './components/User/Appearance.vue';
import Languages from './components/User/Languages.vue';
let UserParams = class UserParams extends Vue {
    constructor() {
        super(...arguments);
        this.passChange = false;
        this.edit = false;
        this.security = {
            analyse: 'extreme',
            allowPrivateMsg: true
        };
        this.tab = 'account';
        this.profile = {
            pseudo: '',
            email: '',
            password: '',
            newPassword: '',
            avatar: null,
            tag: 0,
            error: null
        };
    }
    get tag() {
        if (this.user) {
            return this.user.tag;
        }
    }
    authenticateUser(user) {
        this.$store.dispatch('authenticateUser', user);
    }
    disconnect() {
        this.authenticateUser(null);
        this.finish();
    }
    editUserProfile() {
        this.profile.tag = this.tag;
        this.$socket.emit('UPDATE::PROFILE', this.profile);
        this.profile.newPassword = '';
    }
    closeModal(e) {
        if (e.target.classList.contains('modal')) {
            this.$emit('close');
        }
    }
    finish() {
        this.$emit('close');
    }
    setTab(tabName) {
        this.tab = tabName;
    }
    uploadChange(newImage) {
        this.profile.avatar = newImage;
    }
    mounted() {
        this.profile.id = this.user.id;
        this.profile.pseudo = this.user.pseudo;
        this.profile.email = this.user.email;
        this.profile.avatar = this.user.avatar;
        this.profile.password = 'root';
    }
};
UserParams = __decorate([
    Component({
        Store,
        components: {
            Avatar,
            Upload,
            Security,
            ConfCall,
            Notifications,
            OptionsTextImage,
            Appearance,
            Languages
        },
        methods: {
            ...mapActions([
                'updateUser'
            ])
        },
        computed: {
            ...mapGetters([
                'user'
            ]),
        },
        sockets: {
            updateProfile(result) {
                if (result.success === true) {
                    this.edit = false;
                    this.passChange = false;
                    if (result.preparedUser.avatar === undefined) {
                        this.profile.avatar = this.user.avatar;
                    }
                    else {
                        this.profile.avatar = result.preparedUser.avatar;
                    }
                    this.updateUser(this.profile);
                }
                else {
                    this.profile.error = result.message;
                    setTimeout(() => {
                        this.profile.error = null;
                    }, 3000);
                }
            }
        }
    })
], UserParams);
export default UserParams;

import { __decorate } from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import { Store, mapGetters } from 'vuex';
import Upload from '../components/Contents/components/Upload.vue';
let Register = class Register extends Vue {
    constructor() {
        super(...arguments);
        this.register = {
            pseudo: '',
            email: '',
            password: '',
            confirm: '',
            avatar: '',
            error: null
        };
    }
    closeModal(e) {
        if (e.target.classList.contains('modal')) {
            this.$emit('close');
        }
    }
    uploadChange(newImage) {
        this.register.avatar = newImage;
    }
    registration() {
        this.$socket.emit('register', this.register);
    }
    test() {
        this.$i18n.locale = 'en';
    }
};
Register = __decorate([
    Component({
        Store,
        components: {
            Upload
        },
        computed: {
            ...mapGetters([
                'user'
            ])
        },
        sockets: {
            registration(result) {
                if (result.success) {
                    this.register.error = result.message;
                }
                else {
                    this.register.error = result.message;
                    setTimeout(() => {
                        this.register.error = null;
                    }, 2000);
                }
            }
        }
    })
], Register);
export default Register;

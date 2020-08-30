import { __decorate } from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters, mapActions } from 'vuex';
let Auth = class Auth extends Vue {
    constructor() {
        super(...arguments);
        this.login = {
            email: 'test06@gmail.com',
            password: 'root',
            error: null
        };
    }
    closeModal(e) {
        if (e.target.classList.contains('modal')) {
            this.$emit('close');
        }
    }
    connect() {
        this.$socket.emit('login', this.login);
    }
};
Auth = __decorate([
    Component({
        methods: {
            ...mapActions([
                'authenticateUser'
            ])
        },
        sockets: {
            connection(result) {
                if (result.success) {
                    this.authenticateUser(result.user);
                }
                else {
                    this.login.error = result.message;
                    setTimeout(() => {
                        this.login.error = null;
                    }, 2000);
                }
            }
        },
        computed: {
            ...mapGetters([
                'user'
            ])
        }
    })
], Auth);
export default Auth;

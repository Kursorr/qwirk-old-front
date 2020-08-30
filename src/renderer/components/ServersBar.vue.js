import { __decorate } from "tslib";
import { Component, Vue, Watch } from 'vue-property-decorator';
const draggable = require('vuedraggable');
import { Store, mapGetters, mapActions } from 'vuex';
import Avatar from './Contents/components/Avatar.vue';
import NewOrJoinServer from './Modals/NewOrJoinServer.vue';
let ServersBar = class ServersBar extends Vue {
    constructor() {
        super(...arguments);
        this.modal = {
            newServeur: false
        };
    }
    onUserChanged(val, oldVal) {
        if (val !== null) {
            this.$socket.emit('GET::SERVERS', val.id);
        }
    }
    setModal(modalName, value) {
        this.modal[modalName] = value;
        this.$emit('test', this.modal);
    }
    choiceServer(server) {
        this.setServer(server);
        this.$socket.emit('GET::CHANNELS::NAME', server.id);
        this.$socket.emit('GET::USERS', server.id);
    }
};
__decorate([
    Watch('user')
], ServersBar.prototype, "onUserChanged", null);
ServersBar = __decorate([
    Component({
        components: {
            draggable,
            Avatar,
            NewOrJoinServer
        },
        Store,
        computed: {
            ...mapGetters([
                'getServers',
                'user'
            ])
        },
        methods: {
            ...mapActions([
                'setServer',
                'setServers'
            ])
        },
        sockets: {
            updateServers(servers) {
                this.setServers(servers.map((server) => {
                    const ch = server;
                    ch.waitMsg = 0;
                    return ch;
                }));
            }
        }
    })
], ServersBar);
export default ServersBar;

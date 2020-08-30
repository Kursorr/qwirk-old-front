import { __decorate } from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import { Store, mapGetters } from 'vuex';
import Avatar from '../../Contents/components/Avatar.vue';
let Rooms = class Rooms extends Vue {
    constructor() {
        super(...arguments);
        this.channel = {
            convId: 0,
            type: ''
        };
    }
    idChan() {
        this.$socket.emit('GET::MESSAGES', this.$route.params.convId);
    }
};
Rooms = __decorate([
    Component({
        Store,
        components: {
            Avatar
        },
        computed: {
            ...mapGetters([
                'user'
            ])
        }
    })
], Rooms);
export default Rooms;

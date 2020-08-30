import { __decorate } from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import { Store, mapGetters, mapActions } from 'vuex';
import Profile from './Sections/Profile.vue';
import Server from './Sections/Server.vue';
import IconBase from '../Svg/IconBase.vue';
import DieseIcon from '../Svg/Bar/DieseIcon.vue';
import pusherStore from '../../store/PusherStore';
let NavigationChannel = class NavigationChannel extends Vue {
    constructor() {
        super(...arguments);
        this.channelName = '';
        this.channels = '';
    }
    processChannel(data) {
        if (this.currentChannel.id === data.channelName) {
            this.addMessage([data.msg]);
        }
        else {
            this.upWaitMsg(data.channelName);
        }
    }
    choiceChannel(channel) {
        const data = channel;
        data.serverId = this.currentServer.id;
        this.setChannel(channel);
        this.$socket.emit('GET::MESSAGES', data);
    }
    deleteChannel(channel) {
        const data = channel;
        data.serverId = this.currentServer.id;
        this.$socket.emit('DELETE::CHANNEL', data);
    }
};
NavigationChannel = __decorate([
    Component({
        Store,
        components: {
            Profile,
            Server,
            IconBase,
            DieseIcon
        },
        computed: {
            ...mapGetters([
                'currentServer',
                'currentChannel'
            ])
        },
        methods: {
            ...mapActions([
                'addMessage',
                'upWaitMsg',
                'setChannel'
            ])
        },
        sockets: {
            updateChannel(channel) {
                this.channelName = channel.name;
                this.channels = channel.channels;
                this.channels.map((channel) => {
                    pusherStore.subscribe(`ch-${channel.id}`, this.processChannel);
                });
            }
        }
    })
], NavigationChannel);
export default NavigationChannel;

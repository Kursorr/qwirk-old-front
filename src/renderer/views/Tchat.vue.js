import { __decorate } from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import IconBase from '../components/Svg/IconBase.vue';
import ArobaseIcon from '../components/Svg/Bar/ArobaseIcon.vue';
import DieseIcon from '../components/Svg/Bar/DieseIcon.vue';
import TchatBar from '../components/Contents/TchatBar.vue';
import Members from '../components/Tchat/Members.vue';
import InputBar from '../components/Tchat/InputBar.vue';
import DropZone from '../components/Tchat/DropZone.vue';
import Conversation from '../components/Tchat/Conversation.vue';
import EmojiPicker from '../components/Tchat/EmojiPicker.vue';
import NavigationChannel from '../components/Navigation/NavigationChannel.vue';
let Tchat = class Tchat extends Vue {
    constructor() {
        super(...arguments);
        this.toggleDropZone = false;
        this.toggleEmoji = false;
        this.message = '';
    }
    append(emoji) {
        this.message += emoji;
    }
    getCurrentTap(msg) {
        this.message = msg;
    }
    onSubmit(e) {
        e.preventDefault();
        if (this.message === '')
            return false;
        console.log(this.currentServer);
        this.$socket.emit('SEND::MESSAGE', {
            route: this.$route.params,
            author: this.user,
            content: this.message,
            serverId: this.currentServer.id
        });
        this.message = '';
        e.target.value = '';
        setTimeout(() => {
            const tchatRoom = document.getElementById('convers');
            tchatRoom.scrollTop = tchatRoom.scrollHeight;
        }, 500);
    }
};
Tchat = __decorate([
    Component({
        components: {
            IconBase,
            ArobaseIcon,
            DieseIcon,
            TchatBar,
            Members,
            InputBar,
            DropZone,
            Conversation,
            EmojiPicker,
            NavigationChannel
        },
        computed: {
            ...mapGetters([
                'user',
                'currentChannel',
                'currentServer'
            ])
        }
    })
], Tchat);
export default Tchat;

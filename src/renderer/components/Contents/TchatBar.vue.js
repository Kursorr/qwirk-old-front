import { __decorate } from "tslib";
import { Component, Prop, Vue } from 'vue-property-decorator';
import SearchBeta from './components/SearchBeta.vue';
import IconBase from '../Svg/IconBase.vue';
import SoundSaturation from '../Webrtc/SoundSaturation';
import ArobaseIcon from '../Svg/Bar/ArobaseIcon.vue';
import CameraIcon from '../Svg/Bar/CameraIcon.vue';
import PhoneIcon from '../Svg/Bar/PhoneIcon.vue';
import PinIcon from '../Svg/Bar/PinIcon.vue';
import UpdateIcon from '../Svg/Bar/UpdateIcon.vue';
import MentionIcon from '../Svg/Bar/MentionIcon.vue';
import QuestionIcon from '../Svg/Bar/QuestionIcon.vue';
import MuteIcon from '../Svg/Bar/MuteIcon.vue';
import NomuteIcon from '../Svg/Bar/NomuteIcon.vue';
import DieseIcon from '../Svg/Bar/DieseIcon.vue';
import MembersIcon from '../Svg/Bar/MembersIcon.vue';
const SimplePeer = require('simple-peer');
let TchatBar = class TchatBar extends Vue {
    constructor() {
        super(...arguments);
        this.css = {
            isActive: false,
            disabled: false
        };
        this.onCall = false;
        this.onVideoCall = false;
        this.onPhoneCall = false;
        this.icon = {
            camera: false,
            audio: true
        };
        this.video = false;
        this.mute = true;
        this.p = null;
    }
    toggleMic() {
        this.mute ? (this.mute = false) : (this.mute = true);
        for (let audioTrack of this.$stream.getAudioTracks()) {
            audioTrack.enabled = this.mute;
        }
        this.icon.audio = !this.icon.audio;
    }
    toggleCam() {
        this.$stream.getTracks()[1].enabled = !this.$stream.getTracks()[1].enabled;
        this.icon.camera = !this.icon.camera;
    }
    call(audio, video) {
        this.onCall = true;
        this.css.isActive = true;
        this.css.disabled = true;
        video ? (this.video = true) : (this.video = false);
        navigator.getUserMedia({
            video: this.video,
            audio: {
                echoCancellation: true,
                noiseSuppression: true,
                autoGainControl: true
            }
        }, stream => {
            this.$stream = stream;
            this.p = new SimplePeer({
                initiator: true,
                trickle: false
            });
            this.bindEvents(this.p);
            if (video) {
                let emitter = document.getElementById('emitter');
                emitter.srcObject = stream;
                emitter.play();
            }
            SoundSaturation.soundSaturation(stream);
        }, err => console.log(err));
    }
    videoCall() {
        this.onVideoCall = true;
        this.call(true, true);
    }
    phoneCall() {
        this.onPhoneCall = true;
        this.call(true, false);
    }
    acceptCall() {
        if (this.p === null) {
            this.p = new SimplePeer({
                initiator: false,
                trickle: false
            });
            this.onCall = true;
            this.onVideoCall = true;
            this.onPhoneCall = true;
            this.bindEvents(this.p);
        }
        this.p.signal(JSON.parse(document.getElementById('receiveroffre').value));
    }
    leaveCall() {
        this.css.disabled = false;
        this.onVideoCall = false;
        this.onPhoneCall = false;
        let emitter = document.getElementById('emitter');
        let receiver = document.getElementById('receiver');
        if (emitter)
            emitter.src = '';
        if (receiver)
            receiver.src = '';
        // get video / audio track and close it
        this.$stream.getTracks().forEach(track => {
            console.log(track);
            track.stop();
        });
        this.onCall = false;
        this.css.isActive = false;
    }
    bindEvents(p) {
        p.on('connect', () => {
            console.log('connecteddddd !!! :)');
        });
        p.on('error', err => {
            console.log(err);
        });
        p.on('signal', data => {
            document.getElementById('offer').textContent = JSON.stringify(data);
        });
        p.on('stream', stream => {
            let receiver = document.getElementById('receiver');
            receiver.srcObject = stream;
            receiver.play();
        });
        p.on('track', (track, stream) => {
            SoundSaturation.soundSaturation(stream);
            console.log(track);
            console.log(stream);
        });
    }
};
__decorate([
    Prop()
], TchatBar.prototype, "channel", void 0);
__decorate([
    Prop()
], TchatBar.prototype, "privateMessage", void 0);
TchatBar = __decorate([
    Component({
        components: {
            SearchBeta,
            SoundSaturation,
            IconBase,
            ArobaseIcon,
            CameraIcon,
            PhoneIcon,
            PinIcon,
            UpdateIcon,
            MentionIcon,
            QuestionIcon,
            MuteIcon,
            NomuteIcon,
            DieseIcon,
            MembersIcon
        }
    })
], TchatBar);
export default TchatBar;

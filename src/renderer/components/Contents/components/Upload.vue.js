import { __decorate } from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import Avatar from './Avatar.vue';
let Upload = class Upload extends Vue {
    constructor() {
        super(...arguments);
        this.image = '';
    }
    get userOrAnonymImg() {
        if (this.image !== '') {
            return this.image;
        }
        return null;
    }
    onFileChange(e) {
        const files = e.target.files || e.dataTransfer.files;
        if (!files.length) {
            return;
        }
        return this.createImage(files[0]);
    }
    changeImage(image) {
        this.image = image;
        this.$emit('change', this.image);
    }
    createImage(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            this.changeImage(e.target.result);
        };
        reader.readAsDataURL(file);
    }
    mounted() {
        if (this.user) {
            this.image = this.user.avatar;
        }
    }
};
Upload = __decorate([
    Component({
        components: {
            Avatar
        },
        computed: {
            ...mapGetters([
                'user'
            ])
        }
    })
], Upload);
export default Upload;

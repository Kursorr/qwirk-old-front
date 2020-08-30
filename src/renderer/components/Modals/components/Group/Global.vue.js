import { __decorate } from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import Upload from '../../../Contents/components/Upload.vue';
let Global = class Global extends Vue {
    constructor() {
        super(...arguments);
        this.server = {
            name: '',
            icon: ''
        };
    }
    uploadChange(newImage) {
        this.server.icon = newImage;
    }
};
Global = __decorate([
    Component({
        components: {
            Upload
        }
    })
], Global);
export default Global;

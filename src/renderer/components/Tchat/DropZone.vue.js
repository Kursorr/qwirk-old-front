import { __decorate } from "tslib";
import { Component, Vue } from 'vue-property-decorator';
const Dropzone = require('vue2-dropzone');
import 'vue2-dropzone/dist/vue2Dropzone.min.css';
let DropZone = class DropZone extends Vue {
    constructor() {
        super(...arguments);
        this.dropzoneOptions = {
            url: 'http://notyet.com/post',
            thumbnailWidth: 100,
            maxFilesize: 8
        };
    }
};
DropZone = __decorate([
    Component({
        components: {
            Dropzone
        }
    })
], DropZone);
export default DropZone;

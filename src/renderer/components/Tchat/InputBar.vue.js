import { Vue } from 'vue-property-decorator';
export default class Bar extends Vue {
    dropzoneToggle() {
        this.$emit('toggledz');
    }
    emojiToggle() {
        this.$emit('togglemoji');
    }
    onChange(e) {
        this.$emit('update', e.target.value);
    }
}

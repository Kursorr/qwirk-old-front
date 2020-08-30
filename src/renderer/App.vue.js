import { __decorate } from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import ServersBar from './components/ServersBar.vue';
require('../../static/style/style.scss');
require('../../static/style/monokai-sublime.min.scss');
let App = class App extends Vue {
    minimizeWindow() {
        this.getFocusWindow().minimize();
    }
    maximizeWindow() {
        if (this.getFocusWindow().isMaximized()) {
            this.getFocusWindow().restore();
        }
        else {
            this.getFocusWindow().maximize();
        }
    }
    closeWindow() {
        this.getFocusWindow().close();
    }
    getFocusWindow() {
        return this.$electron.remote.BrowserWindow.getFocusedWindow();
    }
    mounted() {
        // window.io = this.$socket
        this.$socket.emit('connection');
        // this.axios.get('https://www.google.fr')
    }
};
App = __decorate([
    Component({
        components: {
            ServersBar
        }
    })
], App);
export default App;

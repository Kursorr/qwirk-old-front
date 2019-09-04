const Pusher = require('pusher-js');
import Vue from 'vue';
class PusherStore {
    constructor() {
        this.state = {
            subscribers: []
        };
        Pusher.logToConsole = true;
        this.pusher = new Pusher('e0aa787b85b50bfa58eb', {
            cluster: 'eu',
            forceTLS: true
        });
        Vue.prototype.$pusher = this.pusher;
    }
    subscribe(subscriber, callback) {
        const sub = this.pusher.subscribe(subscriber);
        sub.bind('receive', (data) => {
            data.channelName = subscriber.substring(3);
            callback(data);
        });
        this.state.subscribers.push(subscriber);
    }
    unsubscribe(subscriber) {
        const sub = this.pusher.unsubscribe(subscriber);
        this.state.subscribers = this.state.subscriber.filter((sub) => {
            return sub !== subscriber;
        });
    }
}
const pusherStore = new PusherStore();
export default pusherStore;

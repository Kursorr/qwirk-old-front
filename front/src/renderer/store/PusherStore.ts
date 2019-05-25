const Pusher = require('pusher-js')
import Vue from 'vue'

class PusherStore {
  private pusher: any;
  private state: any;

  constructor() {
    this.state = {
      subscribers: []
    }

    Pusher.logToConsole = true

    this.pusher = new Pusher('e0aa787b85b50bfa58eb', {
      cluster: 'eu',
      forceTLS: true
    })

    Vue.prototype.$pusher = this.pusher
  }

  public subscribe (subscriber: any, callback: any) {
    const sub = this.pusher.subscribe(subscriber)
    console.log(sub)
    sub.bind('receive', callback)
    this.state.subscribers.push(subscriber)
  }

  public unsubscribe (subscriber: any) {
    const sub = this.pusher.unsubscribe(subscriber)
    console.log(sub)
    this.state.subscribers = this.state.subscriber.filter((sub: any) => {
      return sub !== subscriber
    })
  }

}

const pusherStore = new PusherStore()
export default pusherStore

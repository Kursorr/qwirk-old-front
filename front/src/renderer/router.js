import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from './components/LandingPage.vue'
import Channels from './components/Contents/Channels.vue'
import Friends from './components/Contents/Friends.vue'
import Groups from './components/Contents/Groups.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: LandingPage
    },
    {
      path: '/friends',
      name: 'friends',
      component: Friends
    },
    {
      path: '/groups',
      name: 'groups',
      component: Groups
    },
    {
      path: '/channels',
      name: 'channels',
      component: Channels
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

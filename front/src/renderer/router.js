import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from './components/LandingPage.vue'
import Channels from './components/Contents/Channels.vue'
import Friends from './components/Contents/Friends.vue'
import Groups from './components/Contents/Groups.vue'
import AddFriend from './components/Contents/AddFriend.vue'
import Grid from './components/Contents/Grids/Grid.vue'
import Join from './components/Contents/Grids/Join.vue'
import ChannelGrid from './components/Contents/Grids/ChannelGrid.vue'
import Auth from './components/Modals/Auth.vue'
import Register from './components/Modals/Register.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'auth',
      component: Auth
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/landing-page',
      component: LandingPage,
      children: [
        {
          path: '/friends',
          component: Friends,
          children: [
            {
              path: '/',
              component: AddFriend
            },
            {
              path: '/add_friend',
              name: 'addFriend',
              component: AddFriend
            },
            {
              path: '/all',
              name: 'all',
              component: Grid
            }
          ]
        },
        {
          path: '/groups',
          name: 'groups',
          component: Groups
        },
        {
          path: '/channels',
          component: Channels,
          children: [
            {
              path: '/',
              component: ChannelGrid
            },
            {
              path: '/join',
              name: 'join',
              component: Join
            },
            {
              path: '/all_channel',
              name: 'all_channel',
              component: ChannelGrid
            }
          ]
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

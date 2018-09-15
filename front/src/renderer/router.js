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
import Tchat from './components/Tchat/Tchat.vue'
import SpashScreen from './components/SpashScreen.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/spash-screen',
      name: 'spash-screen',
      component: SpashScreen
    },
    {
      path: '/',
      name: 'auth',
      component: Auth
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/landing-page',
      component: LandingPage,
      redirect: (to) => {
        if (to.path === '/landing-page') {
          return '/landing-page/tchat/123-private'
        }
        return to.path
      },
      children: [
        {
          path: 'tchat/:convId-:type',
          name: 'tchat',
          component: Tchat
        },
        {
          path: 'friends',
          component: Friends,
          children: [
            {
              path: '',
              name: 'allFriend',
              component: Grid
            },
            {
              path: 'add',
              name: 'addFriend',
              component: AddFriend
            }
          ]
        },
        {
          path: 'groups',
          component: Groups,
          children: [
            {
              path: '',
              name: 'allGroup',
              component: Grid
            }
          ]
        },
        {
          path: 'channels',
          component: Channels,
          children: [
            {
              path: '',
              name: 'allChannel',
              component: ChannelGrid
            },
            {
              path: 'join',
              name: 'join',
              component: Join
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

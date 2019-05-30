import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/splash-screen',
      name: 'splash-screen',
      component: () => import('./components/SplashScreen.vue')
    },
    {
      path: '/',
      name: 'auth',
      component: () => import('./components/Modals/Auth.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./components/Modals/Register.vue')
    },
    {
      path: '/landing-page',
      component: () => import('./components/LandingPage.vue'),
      children: [
        {
          path: 'library',
          name: 'library',
          component: () => import('./components/Contents/Library.vue'),
          children: [
            {
              path: '',
              name: 'myGames',
              component: () => import('./components/Contents/Grids/LibraryGrid.vue'),
            }
          ]
        },
        {
          path: 'tchat/:convId',
          name: 'tchat',
          component: () => import('./components/Tchat/Tchat.vue'),
        },
        {
          path: 'friends',
          component: () => import('./components/Contents/Friends.vue'),
          children: [
            {
              path: '',
              name: 'allFriend',
              component: () => import('./components/Contents/Grids/Grid.vue'),
            },
            {
              path: 'add',
              name: 'addFriend',
              component: () => import('./components/Contents/AddFriend.vue'),
            }
          ]
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
})

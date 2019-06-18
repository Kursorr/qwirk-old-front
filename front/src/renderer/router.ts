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
      component: () => import('./views/SplashScreen.vue')
    },
    {
      path: '/',
      name: 'auth',
      component: () => import('./views/Auth.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue')
    },
    {
      path: '/landing-page',
      component: () => import('./views/LandingPage.vue'),
      children: [
        {
          path: 'library',
          name: 'library',
          component: () => import('./views/Library.vue'),
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
          component: () => import('./views/Tchat.vue'),
        },
        {
          path: 'friends',
          component: () => import('./views/Friends.vue'),
          children: [
            {
              path: '',
              name: 'allFriend',
              component: () => import('./components/Contents/Grids/FriendGrid.vue'),
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

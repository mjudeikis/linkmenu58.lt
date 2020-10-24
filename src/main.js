import Vue from 'vue';
import Landing from './views/Landing.vue';
import Contacts from './views/Contacts.vue';
import About from './views/About.vue';
import App from './App.vue'
import VueAnalytics from 'vue-analytics'
import VueRouter from 'vue-router'

import "@fortawesome/fontawesome-free/css/all.min.css";

Vue.config.productionTip = false

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'landing',
    component: Landing
  },
  {
    path: '/kontaktai',
    name: 'Contacts',
    component: Contacts,
  },
  {
    path: '/apie',
    name: 'apie',
    component: About,
  },
  {
    path: '/facebook',
    name: 'facebook',
    beforeEnter() {location.href = 'https://www.facebook.com/groups/linkmenuezerai3'},
  },
  {
    path: '/f',
    name: 'f',
    beforeEnter() {location.href = 'https://www.facebook.com/groups/linkmenuezerai3'},
  },
  {
    path: '/google',
    name: 'google',
    beforeEnter() {location.href = 'https://groups.google.com/u/1/g/linkmenu58'},
  },
  {
    path: '/g',
    name: 'g',
    beforeEnter() {location.href = 'https://groups.google.com/u/1/g/linkmenu58'},
  }
]

const router = new VueRouter({
  routes,
  mode: 'hash',
})

Vue.use(VueAnalytics, {
  router,
  id: 'UA-161526517-2'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

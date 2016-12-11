// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueHead from 'vue-head'
import routes from './routes'
import store from './store'
import App from './App'

// Use vue head
Vue.use(VueHead)
// Use vue router
Vue.use(VueRouter)


const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history',
})

/* eslint-disable */
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App),
})

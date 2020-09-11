import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App.vue'

import {routes} from './routes.js'
import store from './store/store'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapVue from 'bootstrap-vue'

// rootURL: 

Vue.filter('currency', (value) => {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
})

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueResource)

Vue.http.options.root = "https://vue-server-d9446.firebaseio.com/"
const router = new VueRouter({
    routes,
    mode: 'history'

})

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

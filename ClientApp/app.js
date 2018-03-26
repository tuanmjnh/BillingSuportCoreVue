import Vue from 'vue'
import axios from 'axios'
import router from './router/index'
import store from './store'
import { sync } from 'vuex-router-sync'
import App from './themes/default/main'
import { FontAwesomeIcon } from './icons'
// filter
import './extensions/filter'

// Registration of global components
Vue.component('icon', FontAwesomeIcon)

Vue.prototype.$http = axios

sync(store, router)
//
const app = new Vue({
  store,
  router,
  ...App
})

export {
  app,
  router,
  store
}

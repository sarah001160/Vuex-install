// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap'
import Vuex from 'vuex'
import store from './store'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(router)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, //folder
  store, //folder
  components: { App },
  template: '<App/>'
})

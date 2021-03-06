// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import lotTwo from "./components/lots/lotTwo.vue"
import router from './router'
Vue.config.productionTip = false
import "@/styles/usage/app.scss"

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

/* eslint-disable no-new */
//vuex
import store from './vuex/store.js'
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

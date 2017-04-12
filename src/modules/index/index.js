import Vue from 'vue'
import router from '../../router'
import Vuex from 'vuex'
import App from './App'
import huodhVuePlugins from 'huodh-vue-plugins'
Vue.use(Vuex)
Vue.use(huodhVuePlugins.config)
const store = huodhVuePlugins.generateStore()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})

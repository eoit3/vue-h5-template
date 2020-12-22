import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'amfe-flexible'
import '@/assets/css/common.scss'
import { get, post } from '@/api/methods.js'
import bus from '@/assets/js/bus.js'

import './vantConfig.js'

Vue.config.productionTip = false


Vue.prototype.$get = get
Vue.prototype.$post = post
Vue.prototype.$bus = bus

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

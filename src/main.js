import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import '@/components'
import '@/styles/app.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created () {
  },
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import '@/components'
import '@/styles/app.scss'

// iview
import 'view-design/dist/styles/iview.css'
import { Menu, MenuItem, Submenu, MenuGroup, Icon, Row, Col } from 'view-design'

Vue.component('Menu', Menu)
Vue.component('MenuItem', MenuItem)
Vue.component('Submenu', Submenu)
Vue.component('MenuGroup', MenuGroup)
Vue.component('Icon', Icon)
Vue.component('Row', Row)
Vue.component('Col', Col)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  created () {
  },
  render: h => h(App)
}).$mount('#app')

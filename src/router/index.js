import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import { setPageTitle } from '@/utils'

Vue.use(Router)

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  next()
})

router.afterEach(to => {
  setPageTitle(to.meta.title)
})

export default router

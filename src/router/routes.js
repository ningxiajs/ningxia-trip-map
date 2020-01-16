// import Layout from '@/layout'
// import home from './modules/home'

export default [
  {
    path: '/404',
    component: () => import('@/views/errors/404'),
    hidden: true
  },
  {
    path: '/',
    component: () => import('@/views/dashboard'),
    title: '首页',
    icon: 'home'
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

export default [
  {
    path: `/test`,
    name: 'test',
    component: () => import('@/views/common/test'),
    meta: { title: '测试菜单', icon: 'test', affix: true }
  }
]

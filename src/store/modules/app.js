// 设置文件
import config from '@/config/app'

export default {
  namespaced: true,
  state: {
    theme: '#487AF4',
    color: '#fff'
  },
  actions: {
  },
  mutations: {
    SET_THEME (state, { background = '#fff', color = '#303133' }) {
      state.background = background
      state.color = color

      const _style = document.documentElement.style
      _style.setProperty('--background', state.background)
      _style.setProperty('--color', state.color)
    },
    PAGE_INIT () {
      console.log(config)
    }
  }
}

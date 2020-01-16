<template>
  <div ref="appSettings" :class="{ show }" class="app-settings">
    <div class="settings-background" @click="toggle" />
    <div class="settings">
      <div class="handle-button" @click="toggle">
        <i :class="show ? 'el-icon-close' : 'el-icon-s-tools'" />
      </div>
      <img src="" alt="">
      <div class="settings-inner">
        <div class="settings-items">
          <h3>主题色</h3>
          <div class="settings-detail">
            <el-tag v-for="(item, index) in colorList" :key="index" class="tag" :color="item.background" :style="`color: ${item.color}`" @click="changeTheme(item)">
              <i v-if="item.id === defaultTheme" class="el-icon-check" />
            </el-tag>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import App from '@/config/app'

export default {
  name: 'AppSettings',
  data () {
    return {
      show: false,
      defaultTheme: App.theme.defaultTheme,
      colorList: App.theme.colorList
    }
  },
  watch: {
    show (value) {
      if (value) {
        document.body.classList.add('showSettings')
      } else {
        document.body.classList.remove('showSettings')
      }
    }
  },
  methods: {
    toggle () {
      this.show = !this.show
    },
    changeTheme (theme) {
      this.defaultTheme = theme.id
      window.localStorage.setItem('default-theme', theme.id)
      const newTheme = this.colorList.find(item => item.id === theme.id)
      this.$store.commit('app/SET_THEME', newTheme)
    }
  }
}
</script>

<style lang="scss">
.showSettings {
	overflow: hidden;
	position: relative;
	width: calc(100% - 15px);
}
.settings-background {
	position: fixed;
	top: 0;
	left: 0;
	opacity: 0;
	transition: opacity 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
	background: rgba(0, 0, 0, 0.2);
	z-index: -1;
}
.settings {
	width: 100%;
	max-width: 300px;
	height: 100vh;
	position: fixed;
	top: 0;
	right: 0;
	box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.05);
	transition: all 0.25s cubic-bezier(0.7, 0.3, 0.1, 1);
	transform: translate(100%);
	background: #fff;
}
.show {
	transition: all 0.3s cubic-bezier(0.7, 0.3, 0.1, 1);
	.settings-background {
		z-index: 3000;
		opacity: 1;
		width: 100%;
		height: 100%;
	}
	.settings {
		transform: translate(0);
		z-index: 3001;
	}
}
.handle-button {
	width: 48px;
	height: 48px;
	position: absolute;
	left: -48px;
	top: 250px;
	text-align: center;
	font-size: 24px;
	border-radius: 6px 0 0 6px !important;
	z-index: 0;
	background: #1890ff;
	pointer-events: auto;
	cursor: pointer;
	color: #fff;
	line-height: 48px;
	i {
		font-size: 24px;
		line-height: 48px;
		transition: all 2s;
		transform: rotate(0deg);
		&:hover {
			transform: rotate(-1turn);
		}
	}
}
.settings-inner {
	padding: 25px;
	font-size: 14px;
	line-height: 1.5;
	word-wrap: break-word;
	.settings-items {
		h3 {
			font-weight: normal;
			line-height: 35px;
		}
	}
	.settings-detail {
		.tag {
			width: 20px;
			height: 20px;
			border-radius: 2px;
			float: left;
			cursor: pointer;
			margin-right: 8px;
			padding-left: 0;
			padding-right: 0;
			text-align: center;
			color: #fff;
			font-weight: 700;
			i {
				position: relative;
				top: -6px;
			}
		}
	}
}
</style>

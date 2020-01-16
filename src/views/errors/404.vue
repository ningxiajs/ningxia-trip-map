<template>
  <div class="error-page">
    <div class="error-page-container">
      <div class="error-page-main">
        <h3>
          <strong>404</strong>很抱歉，您要访问的页面不存在！
        </h3>
        <div class="error-page-actions">
          <div style="text-align:center;">
            <a href="/">返回首页</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Error404',
  data () {
    return {
    }
  },
  methods: {
    handleGoMain () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style lang="scss" scoped>
.error-page {
  background: #f0f1f3;
  padding: 80px 0 180px
}

.error-page-container {
  position: relative;
  z-index: 1
}

.error-page-main {
  position: relative;
  background: #f9f9f9;
  margin: 0 auto;
  width: 617px;
  box-sizing: border-box;
  padding: 50px 50px 70px
}

.error-page-main:before {
  content: '';
  display: block;
  height: 7px;
  position: absolute;
  top: -7px;
  width: 100%;
  left: 0
}

.error-page-main h3 {
  font-size: 24px;
  font-weight: 400;
  border-bottom: 1px solid #d0d0d0
}

.error-page-main h3 strong {
  font-size: 54px;
  font-weight: 400;
  margin-right: 20px
}

.error-page-main h4 {
  font-size: 20px;
  font-weight: 400;
  color: #333
}

.error-page-actions {
  font-size: 0;
  z-index: 100
}

.error-page-actions div {
  font-size: 18px;
  padding: 80px 0 30px;
  /*width: 50%;*/
  box-sizing: border-box;
  color: #838383
}

.error-page-actions ol {
  list-style: decimal;
  padding-left: 20px
}

.error-page-actions li {
  line-height: 2.5em
}

.error-page-actions:before {
  content: '';
  display: block;
  position: absolute;
  z-index: -1;
  bottom: 17px;
  left: 50px;
  width: 200px;
  height: 10px;
  -moz-box-shadow: 4px 5px 31px 11px #999;
  -webkit-box-shadow: 4px 5px 31px 11px #999;
  box-shadow: 4px 5px 31px 11px #999;
  -moz-transform: rotate(-4deg);
  -webkit-transform: rotate(-4deg);
  -ms-transform: rotate(-4deg);
  -o-transform: rotate(-4deg);
  transform: rotate(-4deg)
}

.error-page-actions:after {
  content: '';
  display: block;
  position: absolute;
  z-index: -1;
  bottom: 17px;
  right: 50px;
  width: 200px;
  height: 10px;
  -moz-box-shadow: 4px 5px 31px 11px #999;
  -webkit-box-shadow: 4px 5px 31px 11px #999;
  box-shadow: 4px 5px 31px 11px #999;
  -moz-transform: rotate(4deg);
  -webkit-transform: rotate(4deg);
  -ms-transform: rotate(4deg);
  -o-transform: rotate(4deg);
  transform: rotate(4deg)
}
</style>

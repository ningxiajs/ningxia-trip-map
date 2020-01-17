<template>
  <div class="app-dashboard">
    <i-header />
    <Row>
        <Col style="background: red" span="12" />col-12
        <Col style="background: red" span="12" />col-12
    </Row>
  </div>
</template>

<script>
import Header from './header/index'
export default {
  name: 'Dashboard',
  data () {
    return {
    }
  },
  components: {
    'i-header': Header
  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>


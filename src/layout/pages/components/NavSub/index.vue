<template>
  <el-submenu :index="nav.path" :popper-append-to-body="false">
    <template slot="title">
      <span slot="title">{{ nav.title }}</span>
    </template>
    <template v-for="(child, childIndex) in nav.children" class="jikey-1-1">
      <el-menu-item v-if="!child.children" :key="childIndex" :index="child.path">{{ child.meta.title }}</el-menu-item>
      <nav-sub v-else :key="childIndex" :nav="child" />
    </template>
  </el-submenu>
</template>

<script>
export default {
  name: 'NavSub',
  props: {
    nav: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

<template>
  <el-submenu :index="nav.path">
    <template slot="title">
      <span slot="title">{{ nav.meta.title }}</span>
    </template>
    <el-menu-item v-for="(child, childIndex) in nav.children" :key="childIndex">
      <el-menu-item v-if="!child.children" :key="child.key" :index="child.path">{{ child.meta.title }}</el-menu-item>
      <nav-sub v-else :key="child.key" :nav="child" />
    </el-menu-item>
  </el-submenu>
</template>

<script>
export default {
  name: 'SubMenu',
  props: {
    nav: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

<template>
  <div id="app">
  <keep-alive exclude="detail,cart">
  <router-view></router-view>
  </keep-alive>
  <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from '@/components/content/mainTabBar/mainTabBar'
export default {
  name: 'App',
  components: {
  MainTabBar
  }
}
</script>

<style>
@import 'assets/css/base.css'
</style>

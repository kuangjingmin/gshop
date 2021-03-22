<template>
  <div id="app">
    <div id="nav">
      <router-view/>
      <!-- 3使用组件标签 -->
      <FooterGuide v-show="$route.meta.showFooter"/>
    </div>
  </div>
</template>
<script>
// 引入组件
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  // 映射组件标签
  components: {
    FooterGuide
  }
}
</script>
<style lang="stylus" scoped>
#app
  width 100vw
  height 100vh
  background-color #fff
</style>

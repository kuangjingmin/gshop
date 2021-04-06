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
// 第一步引入vuex的映射actions
import { mapActions } from 'vuex'
export default {
  mounted () {
    // 第三步直接调用函数
    this.recevice_address()
  },
  // 映射组件标签
  components: {
    FooterGuide
  },
  methods: {
    // 第二步映射成函数
    ...mapActions(['recevice_address'])
  }
}
</script>
<style lang="stylus" scoped>
#app
  width 100vw
  height 100vh
  background-color #fff
</style>

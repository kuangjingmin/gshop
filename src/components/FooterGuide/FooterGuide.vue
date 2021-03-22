<template>
  <div class="footer">
    <a href="#" class="guid-item" :class="{on: $route.path == '/msite'}" @click="goto('./msite')">
      <span>tupian</span>
      <span>外卖</span>
    </a>
    <a href="#" class="guid-item" :class="{on: $route.path == '/search'}" @click="goto('./search')">
      <span>tupian</span>
      <span>搜索</span>
    </a
    ><a href="#" class="guid-item" :class="{on: $route.path == '/order'}" @click="goto('./order')">
      <span>tupian</span>
      <span>订单</span>
    </a>
    <a href="#" class="guid-item" :class="{on: $route.path == '/profile'}" @click="goto('./profile')">
      <span>tupian</span>
      <span>我的</span>
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    goto (path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="stylus" scoped>
  $fontColor = #322
  .footer
    background-color: #fff;
    border-top 1px solid #dfd6d6
    position fixed
    width 100%
    bottom 0
    display flex
    justify-content center
    align-items center
    .on
      color green !important
    .guid-item
      color $fontColor
      text-decoration none
      flex 1
      display flex
      flex-direction column
      justify-content center
      align-content center
      span
        display block
        text-align center
</style>

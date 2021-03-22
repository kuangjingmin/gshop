<template>
  <div class="msite">
    <!-- 头部 -->
    <header-top title="昌平区北七家宏福科技园(337省道北)">
      <div class="search" slot="left">搜索</div>
      <div class="login" slot="right">
        <span>登录|注册</span>
      </div>
    </header-top>
    <!-- 轮播 -->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">1</div>
          <div class="swiper-slide">2</div>
          <div class="swiper-slide">3</div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!-- 商家列表 -->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <shop-list></shop-list>
    </div>
  </div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import ShopList from '../../components/ShopList/ShopList.vue'
export default {
  mounted () {
    // eslint-disable-next-line no-new
    new Swiper('.swiper-container', {
      autoplay: true,
      speed: 2000,
      slidesPerView: 1.36,
      loop: true, // 可以循环轮播
      pagination: {
        el: '.swiper-pagination'
      }
    })
  },
  components: {
    HeaderTop,
    ShopList
  },
  methods: {}
}
</script>

<style lang="stylus" scoped>
@import '../../common/mixins.styl'
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.msite
  display flex
  flex-direction column
  .swiper-container
    width 100%
    height 100%
    .swiper-wrapper
      width 100%
      height 100%
      .swiper-slide
        display flex
        justify-content center
        align-items flex-start
        flex-wrap wrap
        height 100px
.msite_shop_list
  top-border-1px(#e4e4e4)
  margin-top 10px
  background #fff
  .shop_header
    padding 10px 10px 0
    .shop_icon
      margin-left 5px
      color #999
    .shop_header_title
      color #999
      font-size 14px
      line-height 20px
</style>

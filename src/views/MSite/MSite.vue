<template>
  <div class="msite">
    <!-- 头部 -->
    <header-top :title="address.name">
      <div class="search" slot="left">搜索</div>
      <div class="login" slot="right">
        <span>登录|注册</span>
      </div>
    </header-top>
    <!-- 轮播 -->
    <nav class="msite_nav" v-if="foodTypes.length">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(foodTypes, index) in foodTypesArry"
            :key="index"
          >
            <a
              href="javascript:"
              class="link_to_food"
              v-for="(foodType, index) in foodTypes"
              :key="index"
            >
              <div class="food_container">
                <img :src="baseImageUrl + foodType.image_url" />
              </div>
              <span>{{foodType.title}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <img src="./images/msite_back.svg" alt="back" v-else>
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
import { mapState, mapActions } from 'vuex'

export default {
  mounted () {
    this.recevice_foodtypes()
    this.$store.dispatch('recevice_shops')
  },
  components: {
    HeaderTop,
    ShopList
  },
  methods: {
    ...mapActions(['recevice_foodtypes'])
  },
  data () {
    return {
      baseImageUrl: 'https://fuss10.elemecdn.com'
    }
  },
  watch: {
    foodTypes (value) {
      // 这种方法虽然可以实现但是不是最优选择，人为的确定时间是不准确的
      // setTimeout(() => {
      //   // eslint-disable-next-line no-new
      //   new Swiper('.swiper-container', {
      //     autoplay: true,
      //     speed: 2000,
      //     // 滑块可以预看到的偏差，设置成1正好占满屏幕，如果大于1就溢出一部分
      //     slidesPerView: 1,
      //     loop: true, // 可以循环轮播
      //     pagination: {
      //       el: '.swiper-pagination'
      //     }
      //   })
      // }, 100)

      // 以下这两种写法都可以
      // $nextTick() 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM
      // this.$nextTick().then(() => {
      //   // eslint-disable-next-line no-new
      //   new Swiper('.swiper-container', {
      //     autoplay: true,
      //     speed: 2000,
      //     // 滑块可以预看到的偏差，设置成1正好占满屏幕，如果大于1就溢出一部分
      //     slidesPerView: 1,
      //     loop: true, // 可以循环轮播
      //     pagination: {
      //       el: '.swiper-pagination'
      //     }
      //   })
      // })
      // 数据更新以后立即执行这个this.$nextTick(callback)，但是里面的回调函数会等到下次dom更新循环结束之后执行
      this.$nextTick(() => {
        // eslint-disable-next-line no-new
        new Swiper('.swiper-container', {
          autoplay: true,
          speed: 2000,
          // 滑块可以预看到的偏差，设置成1正好占满屏幕，如果大于1就溢出一部分
          slidesPerView: 1,
          loop: true, // 可以循环轮播
          pagination: {
            el: '.swiper-pagination'
          }
        })
      })
    }
  },
  computed: {
    ...mapState(['address', 'foodTypes']),
    // 根据foodTypes一维数组生成一个二维数组
    // 二维子数组 最大长度是8
    foodTypesArry () {
      const foodTypes = this.foodTypes
      const arrayOne = []
      let arrayTwo = []
      if (foodTypes.length > 0) {
        for (let i = 0; i < foodTypes.length; i++) {
          // 判断当前子数组长度是等于8，等于8创建一个新的子数组
          if (arrayTwo.length === 8) {
            arrayTwo = []
          }
          // 判断子数组长度是否为0，为0说明是新子数组，push进父数组
          if (arrayTwo.length === 0) {
            arrayOne.push(arrayTwo)
          }
          // 最后再把原来数组的元素，放进子数组
          arrayTwo.push(foodTypes[i])
        }
      }

      return arrayOne
    }
  }
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
  width 100%
  .msite_nav
    // bottom-border-1px(#e4e4e4)
    margin-top 45px
    height 200px
    background #fff
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
          .link_to_food
            text-decoration none
            width 25%
            .food_container
              display block
              width 100%
              text-align center
              padding-bottom 10px
              font-size 0
              img
                display inline-block
                width 60px
                height 50px
            span
              display block
              width 100%
              text-align center
              font-size 13px
              color #666
      .swiper-pagination
        >span.swiper-pagination-bullet-active
          background #02a774
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

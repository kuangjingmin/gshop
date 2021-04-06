<template>
  <div class="star" :class="'star-' + size">
    <span class="star-item" v-for="(sc, index) in starClass" :key="index" :class="sc"></span>
  </div>
</template>

<script>
const CLASS_ON = 'on'
const CLASS_HALF = 'half'
const CLASS_OFF = 'off'
export default {
  name: 'Star',
  created () {},
  data () {
    return {}
  },
  props: {
    score: Number,
    size: Number
  },
  methods: {},
  computed: {
    starClass () {
      // 3.2 3 0 2
      // 3.5 3 1 1
      const { score } = this
      const sc = []
      // 向sc中添加n个'on'
      const scoreInter = Math.floor(score)
      for (let i = 0; i < scoreInter; i++) {
        sc.push(CLASS_ON)
      }
      // 向sc中添加0/1个'half'
      if ((score * 10 - scoreInter * 10) >= 5) {
        sc.push(CLASS_HALF)
      }
      // 向sc中添加n个'off'
      for (let i = 0; i < (5 - sc.length); i++) {
        sc.push(CLASS_OFF)
      }
      // 第二种写法
      // while (sc.length < 5) {
      //   sc.push(CLASS_OFF)
      // }
      return sc
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/mixins.styl'
  .star //2x图 3x图
    float left
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('./images/star48_on')
        &.half
          bg-image('./images/star48_half')
        &.off
          bg-image('./images/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star36_on')
        &.half
          bg-image('./images/star36_half')
        &.off
          bg-image('./images/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star24_on')
        &.half
          bg-image('./images/star24_half')
        &.off
          bg-image('./images/star24_off')
</style>

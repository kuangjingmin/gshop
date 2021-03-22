<template>
  <header class="header">
    <slot name="left"></slot>
    <div class="title">
      <span class="title-1 ellipsis">{{title}}</span>
    </div>
    <slot name="right">
    </slot>
  </header>
</template>

<script>
export default {
  name: 'HeaderTop',
  created () {},
  data () {
    return {}
  },
  props: {
    title: String
  },
  methods: {}
}
</script>

<style lang="stylus" scoped>
  .header
    width 100%
    height 45px
    background-color #02a774
    color #fff
    flex 1
    display flex
    align-content center
    justify-content center
    .search
      flex 1 1 20%
      width 20%
      text-align center
      line-height: 45px;
    .title
      flex 1 1 50%
      width 50%
      font-size 20px
      text-align center
      line-height: 45px;
      span
        // 因为是父级是flex布局，如果span的display不写成block ellipsis不生效
        display block
    .login
      flex 1 1 25%
      width 25%
      text-align center
      line-height: 45px;
</style>

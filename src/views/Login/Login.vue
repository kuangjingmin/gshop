<template>
  <section class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">硅谷外卖</h2>
        <div class="login_header_title">
          <a href="javascript:;" :class="{on: loginWay}" @click="loginWay = true">短信登录</a>
          <a href="javascript:;" :class="{on: !loginWay}" @click="loginWay = false">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form>
          <div :class="{on: loginWay}">
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone"/>
              <!-- 切记，阻止表单内按钮的 click事件的默认行为，默认是提交表单，刷新页面！！ -->
              <button :disabled="!phoneColor" class="get_verification" :class="{fColor:phoneColor}" @click.prevent="getYZM">
                {{computeTime>0? `已发送${ computeTime }s`:'获取验证码'}}
              </button>
            </section>
            <section class="login_verification">
              <input type="text" maxlength="8" placeholder="验证码" v-model="code"/>
            </section>
            <section class="login_hint">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div :class="{on: !loginWay}">
            <section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name"/>
              </section>
              <section class="login_verification">
                <input type="password" maxlength="8" placeholder="密码" v-show="!showPwd" v-model="pwd"/>
                <input type="text" maxlength="8" placeholder="密码"  v-show="showPwd" v-model="pwd"/>
                <div class="switch_button" :class="showPwd? 'on':'off'" @click="showPwd = !showPwd">
                  <div class="switch_circle" :class="{right: showPwd}"></div>
                  <span class="switch_text">{{showPwd?'abc':''}}</span>
                </div>
              </section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码" v-model="captcha"/>
                <img class="get_verification" src="http://localhost:4000/captcha" alt="captcha" @click="getCaptcha"/>
              </section>
            </section>
          </div>
          <button class="login_submit" @click.prevent="login">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <a href="javascript:" class="go_back" @click='$router.back()'>
        <i class="iconfont icon-jiantou2"></i>
      </a>
    </div>
    <AlertTip :alertText = "alertText" v-show="alertShow" @closeTip="closeTip"/>
  </section>
</template>

<script>
import AlertTip from '../../components/AlertTip/AlertTip'

let intervalId
export default {
  name: 'Login',
  created () {},
  data () {
    return {
      loginWay: true, // true代表短信登录，false代表密码登录
      phone: '', // 电话号码
      computeTime: 0, // 倒计时时间
      showPwd: false, // 是否显示密码
      code: '', // 短信验证码
      name: '', // 用户名
      pwd: '', // 密码
      captcha: '', // 图片验证码
      alertText: '',
      alertShow: false
    }
  },
  props: {},
  methods: {
    goBack () {
      this.$router.replace('/profile')
    },
    // 异步获取短信验证码
    getYZM () {
      if (intervalId) {
      } else {
        // 启动倒计时
        this.computeTime = 30
        intervalId = setInterval(() => {
          this.computeTime--
          if (this.computeTime === 0) {
            clearInterval(intervalId)
            intervalId = null
          }
        }, 1000)
      }
      // 发送ajax请求
    },
    // 抽离出来的警示框
    showAlert (alertText) {
      this.alertText = alertText
      this.alertShow = true
    },
    // 登录操作 校验、等
    login () {
      // 前台表单验证
      if (this.loginWay) { // 短信登录
        // eslint-disable-next-line no-unused-vars
        const { phoneColor, phone, code } = this
        if (!phoneColor) {
          // 手机号不正确
          this.showAlert('手机号不正确')
        } else if (!/^\d{6}$/.test(code)) {
          // 验证码必须是6位数字
          this.showAlert('验证码必须是6位数字')
        }
      } else { // 密码登录
        const { name, pwd, captcha } = this
        if (!name) {
          // 用户名必须指定
          this.showAlert('用户名必须指定')
        } else if (!pwd) {
          // 密码必须存在
          this.showAlert('密码必须存在')
        } else if (!captcha) {
          // 验证码必须存在
          this.showAlert('验证码必须存在')
        }
      }
    },
    // 关闭警告框
    closeTip () {
      this.alertText = ''
      this.alertShow = false
    },
    getCaptcha (event) {
      // 每次指定的src要不一样
      // 这不是ajax请求所以不是跨域？
      event.target.src = 'http://localhost:4000/captcha?time=' + Date.now()
    }
    // showOff () {
    //   this.showPwd = !this.showPwd
    // }
  },
  computed: {
    phoneColor () {
      const { phone } = this
      return /^1\d{10}$/.test(phone)
    }
  },
  components: {
    AlertTip
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/mixins.styl'
a
  text-decoration none
.loginContainer
  width 100%
  height 100%
  background #fff
  .loginInner
    padding-top 60px
    width 80%
    margin 0 auto
    .login_header
      .login_logo
        font-size 40px
        font-weight bold
        color #02a774
        text-align center
      .login_header_title
        padding-top 40px
        text-align center
        >a
          color #333
          font-size 14px
          padding-bottom 4px
          &:first-child
            margin-right 40px
          &.on
            color #02a774
            font-weight 700
            border-bottom 2px solid #02a774
    .login_content
      >form
        >div
          display none
          &.on
            display block
          input
            width 100%
            height 100%
            padding-left 10px
            box-sizing border-box
            border 1px solid #ddd
            border-radius 4px
            outline 0
            font 400 14px Arial
            &:focus
              border 1px solid #02a774
          .login_message
            position relative
            margin-top 16px
            height 48px
            font-size 14px
            background #fff
            .get_verification
              position absolute
              top 50%
              right 10px
              transform translateY(-50%)
              border 0
              color #ccc
              font-size 14px
              background transparent
              &.fColor
                color black
          .login_verification
            position relative
            margin-top 16px
            height 48px
            font-size 14px
            background #fff
            .switch_button
              font-size 12px
              border 1px solid #ddd
              border-radius 8px
              transition background-color .3s,border-color .3s
              padding 0 6px
              width 30px
              height 16px
              line-height 16px
              color #fff
              position absolute
              top 50%
              right 10px
              transform translateY(-50%)
              &.off
                background #fff
                .switch_text
                  float right
                  color #ddd
              &.on
                background #02a774
              >.switch_circle
                //transform translateX(27px)
                position absolute
                top -1px
                left -1px
                width 16px
                height 16px
                border 1px solid #ddd
                border-radius 50%
                background #fff
                box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                transition transform .3s
              >.right
                  // 上面定义了transition过渡效果 过渡属性是transform 规定完成过渡效果需要0.3s
                  // 下面执行transform Transform属性应用于元素的2D或3D转换。这个属性允许你将元素旋转，缩放，移动，倾斜等。
                  // 沿着x轴移动27px
                  transform translateX(27px)
          .login_hint
            margin-top 12px
            color #999
            font-size 14px
            line-height 20px
            >a
              color #02a774
        .login_submit
          display block
          width 100%
          height 42px
          margin-top 30px
          border-radius 4px
          background #4cd96f
          color #fff
          text-align center
          font-size 16px
          line-height 42px
          border 0
      .about_us
        display block
        font-size 12px
        margin-top 20px
        text-align center
        color #999
    .go_back
      position absolute
      top 5px
      left 5px
      width 30px
      height 30px
      >.iconfont
        font-size 20px
        color #999
</style>

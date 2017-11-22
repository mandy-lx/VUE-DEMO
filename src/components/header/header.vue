<template>
  <div class="header">
    <div class="content-wrapper" >
      <div class="avatar">
        <img :src="seller.avatar" width="64" height="64">
      </div>
      <div class="content">
        <div class="title">
          <span class="icon brand"></span>
          <span class="shop-name">{{seller.name}}</span>
        </div>
        <div class="description">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
        <div class="support" v-if="seller.supports">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
    </div>

    <div class="bulletin-wrapper" @click="detailShow" >
      <span class="bulletin-title"></span>
      <span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar">
    </div>
    <transition name="fade" >
      <div class="detail" v-show="detailShowp">
        <div class="detail-wrapper clearfix">
          <div class="detail-main">
            <p>{{seller.name}}</p>
            <star :size="48" :score="seller.score"></star>
          </div>
        </div>
        <div class="detail-close" @click="detailClose">
          <i class="icon-close"></i>
        </div>
      </div>
    </transition>
  </div>
</template>
<script type="text/ecmascript-6">
  import star from '../star/star.vue';
  export default {
    name: 'header',
    props: {
      seller: {
        type: Object
      }
    },
    data () {
      return {
        detailShowp: false
      };
    },
    created () {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    },
    methods: {
      detailClose () {
        this.detailShowp = false;
      },
      detailShow () {
        this.detailShowp = true;
      }
    },
    components: {
      star
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
 @import "../../common/stylus/mixin";
.header
  width: 100%
  position: relative
  overflow: hidden
  .content-wrapper
    background: rgba(7, 17, 27, 0.4)
    padding:24px 12px 18px 24px
    .avatar,.content
      display: inline-block
    .avatar
      margin-right: 16px
    .content
      .title
        margin: 2px 0 8px 0
        .brand
          display: inline-block
          vertical-align: top
          width: 30px
          height: 18px
          bg-image('brand')
          background-size: 30px 18px
          margin-right: 6px
        .shop-name
          font-size: 16px
          color: rgb(255, 255, 255)
          font-weight: bold
          line-height: 18px
      .description
        font-size: 12px
        color: rgb(255,255,255)
        font-weight: 200
        line-height: 12px
        margin-bottom: 10px
      .support
        margin-bottom: 4px
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: 4px
          background-size: 12px 12px
          background-repeat: no-repeat
          &.decrease
            bg-image('decrease_1')
          &.discount
            bg-image('discount_1')
        .text
          line-height: 12px
          font-size: 10px
  .bulletin-wrapper
    height: 28px
    line-height: 28px
    padding: 0 22px 0 12px
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
    background: rgba(7, 17, 27, 0.5)
    .bulletin-title
      display: inline-block
      vertical-align: top
      margin-top: 8px
      width: 22px
      height: 12px
      bg-image('bulletin')
      background-size: 22px 12px
      background-repeat: no-repeat
    .bulletin-text
      font-size: 10px
      line-height: 28px
      margin: 0 4px
  .background
    position: absolute
    top: 0
    bottom: 0
    width: 100%
    height: 100%
    filter: blur(10px)
    z-index: -1
    img
      width: 100%
      height: 100%
  .detail
    position: fixed
    z-index: 100
    top: 0
    left: 0
    width: 100%
    height: 100%
    overflow: auto
    background: rgba(7, 17, 27, 0.8)
    opacity: 1
    backgdrop-filter: blur(10px)
    &.fade-enter-active, &.fade-leave-active
      transition: all .5s
    &.fade-enter,$.fade-leave-active
      opacity: 0
      background: rgba(7, 17, 27, 0)
    .detail-wrapper
      width: 100%
      min-height: 100%
      color: #fff
      .detail-main
        margin-top: 64px
        padding-bottom: 64px
        width: 100%
        text-align: center
    .detail-close
      position: relative
      width: 32px
      height: 32px
      margin: -64px auto 0 auto
      font-size: 32px




</style>
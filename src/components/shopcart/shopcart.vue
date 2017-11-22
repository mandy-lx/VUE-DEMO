<template>
  <div class="shopcart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo">
            <i class="icon-shopping_cart"></i>
          </div>
        </div>
        <div class="price">¥{{totalCount}}</div>
        <div class="desc">另需配送费¥10元</div>
      </div>
      <div class="content-right">
        <div class="pay">¥{{totalCount}}元起送</div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  data () {
    return {
      totalCount: 10

    };
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .shopcart
    position: fixed
    left: 0
    bottom: 0
    z-index: 50
    width: 100%
    height: 48px
    background: #141d27
    .content
      display: flex
      .content-left
        flex: 1
        /*display: flex*/
        color: #fff
        .logo-wrapper
          display: inline-block
          box-sizing: border-box
          background: #141d27
          width: 56px
          height: 56px
          margin: 0 12px
          padding: 6px
          position: relative
          top: -10px
          border-radius: 50%
          .logo
            display: inline-block
            background: #2b343c
            width: 100%
            height: 100%
            border-radius: 50%
            text-align: center
            .icon-shopping_cart
              line-height: 44px
              font-size: 24px
              color: #80858a
        .price
          display: inline-block
          margin-top: 12px
          line-height: 24px
          padding-right: 12px
          box-sizing: border-box
          border-right: 1px solid rgba(255, 255, 255, 0.1)
          font-size: 16px
          font-weight: 700
          color: rgba(255, 255, 255, 0.4)
          vertical-align: top
        .desc
          display: inline-block
          margin: 12px 0 0 12px
          line-height: 24px
          font-size: 10px
          vertical-align: top
          color: rgba(255, 255, 255, 0.4)
      .content-right
        flex: 0 0 105px
        box-sizing: border-box
        padding: 8px 8px 12px 8px
        color: rgba(255, 255, 255, 0.4)
        .pay
          text-align: center
          height: 100%
          vertical-align: top
          margin-top: 9px

</style>
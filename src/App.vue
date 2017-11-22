<template>
  <div id="app">
    <v-header v-bind:seller="seller"></v-header>
    <div class="nav">
      <div class="tab-item">
        <router-link to="/goods" >商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/comment">评价comment</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/sellers">商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import header from './components/header/header.vue';
import goods from './components/goods/goods.vue';
export default {
  name: 'app',
  data () {
    return {
      goods: {},
      seller: {},
      ratings: {},
      message: '',
      mess: 'com from par'
    };
  },
  components: {
    'v-header': header,
    'v-goods': goods
  },
  created () {
    this.$http.get('./static/data.json').then((response) => {
      this.goods = response.body.goods;
      this.seller = response.body.seller;
      this.ratings = response.body.ratings;
    });
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
 .nav
   width: 100%
   display: flex
   justify-content: space-around
   box-sizing: border-box
   height: 40px
   line-height: 40px
   font-size: 14px
   border-bottom: 1px solid rgba(7, 17, 27, 0.1)
   color: rgb(240, 20, 20)
   .tab-item
    flex:1
    text-align: center
    & > a
        display: block
        font-size: 14px
        color: green
        &.router-link-exact-active
          color: red
 .footer
   width: 100%
   height: 50px
   background: #141d27

</style>

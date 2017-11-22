<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul class="">
        <li v-for="(item,index) in goods" class="menu-item"  ref="menuList" :class="{'current':currentIndex===index}" @click="_selectItem(index, $event)">
          <span class="text">{{item.name}}</span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodsWrapper">
        <ul>
          <li v-for="(item, index) in goods" class="food-list" ref="foodList">
            <h2 class="menu-title">{{item.name}}</h2>
            <ul class="food-container">
              <li  @click="selectFood(food, $event)" v-for="food in item.foods" class="food-item" >
                <div class="icon">
                  <img :src="food.icon" width="57" height="57">
                </div>
                <div class="content">
                  <h3 class="title">{{food.name}}</h3>
                  <div class="description">
                    {{food.description}}
                  </div>
                  <div class="extra">
                    <span class="sell-count first-el">月售{{food.sellCount}}</span>
                    <span>好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="new-price first-el">¥{{food.price}}</span>
                    <del class="old-price">¥{{food.oldPrice}}</del>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
    </div>
    <food :newfood = "selectedFood" ref="hasSelectedFood"></food>
    <shopcart>cart..</shopcart>
  </div>
</template>
<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import shopcart from './../shopcart/shopcart.vue';
  import food from '../food/food.vue';
  export default {
    name: 'goods',
    data () {
      return {
        goods: '',
        listHeight: [],
        scrollY: '',
        selectedFood: {}
      };
    },
    created () {
      this.$http.get('./static/data.json').then((response) => {
        this.goods = response.body.goods;
        this.$nextTick(() => {
          this._initScroll();
          this._calculateHeight();
        });
      });
    },
    methods: {
      _initScroll () {
        this.menuScroll = new BScroll(this.$refs.menuWrapper, {
          click: true
        });
        this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
          click: true,
          probeType: 3,
          momentum: true
        });
        this.foodsScroll.on('scroll', (pos) => {
          if (pos.y <= 0) {
            this.scrollY = Math.abs(Math.round(pos.y));
          };
        });
      },
      _selectItem (index, event) {
        if (!event._constructed) {
          return;
        };
        var el = this.$refs.foodList[index];
        this.foodsScroll.scrollToElement(el, 300, 0, 0);
      },
      _calculateHeight () {
        let foodList = this.$refs.foodList;
        let height = 0;
        this.listHeight.push(height);
        for (let i = 0; i < foodList.length; i++) {
          let item = foodList[i];
          height += item.offsetHeight;
          this.listHeight.push(height);
        };
      },
      _followScroll (index) {
        let menuList = this.$refs.menuList;
        let el = menuList[index];
        this.menuScroll.scrollToElement(el, 300, 0, -100);
      },
      selectFood (food, event) {
        if (!event._constructed) {
          return;
        };
        this.selectedFood = food;
        this.$refs.hasSelectedFood.show();
      }
    },
    computed: {
      currentIndex () {
        for (let i = 0; i < this.listHeight.length; i++) {
          let height1 = this.listHeight[i];
          let height2 = this.listHeight[i + 1];
          if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
            this._followScroll(i);
            return i;
          }
        }
        return 0;
      }
    },
    components: {
      shopcart,
      food
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixin';
  .goods
   display: flex
   position: absolute
   top: 180px
   bottom: 46px
   width: 100%
   overflow: hidden
  .menu-wrapper
    flex: 0 0 80px
    width: 80px
    background: #f3f5f7
    .menu-item
      display: table
      height: 54px
      width: 56px
      padding: 0 12px
      &.current
       color: red
       background: #fff
      .text
        display: table-cell
        width: 56px
        vertical-align: middle
        border-1px(rgba(7, 17, 27, 0.1))
        font-size: 12px
        line-height: 14px
  .foods-wrapper
    flex: 1
    .menu-title
      border-left: 2px solid #d9dde1
      background: #f3f5f7
      padding-left: 14px
      font-size: 12px
      color: rgb(147, 153, 159)
      line-height: 26px
    .food-container
        padding:0 18px
    .food-item
        padding: 18px 0
        border-bottom: 1px solid rgba(7, 17, 27, 0.1)
    .icon,.content
      display: inline-block
    .icon
      vertical-align: top
    .content
      margin-right: 10px
      .title
        margin-top: 2px
        font-size: 14px
      .description,.extra,.price
        margin-top: 8px
        font-size: 10px
        color: rgb(147, 153, 159)
      .extra
        margin-top: 8px
        .first-el,&.first-child
          margin-right: 12px
      .price
        .first-el,&.first-child
          margin-right: 8px
</style>
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from './App';
import sellers from './components/sellers/sellers.vue';
// import goods from './components/goods/goods.vue';
const goods = () => import(/* webpackChunkName: "goods-chunck" */ './components/goods/goods.vue');
import './common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [{
  path: '/',
  redirect: '/goods'
}, {
  path: '/goods',
  component: goods
  // component: resolve => require(['./components/goods/goods.vue'], resolve)

}, {
  path: '/sellers',
  component: sellers
}, {
  path: '/comment',
  component: resolve => require(['./components/comment/comment.vue'], resolve)// 懒加载
}];
const router = new VueRouter({
  routes
});
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  history: 'mode',
  template: '<App/>',
  components: { App }
});

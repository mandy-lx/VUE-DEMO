// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from './App';
import goods from './components/goods/goods.vue';
import sellers from './components/sellers/sellers.vue';
import bar from './components/bar/bar.vue';
import Vuex from 'vuex';
import store from './vuex/store';
import './common/stylus/index.styl';

Vue.use(VueResource);
Vue.use(Vuex);

const routes = [{
  path: '/',
  redirect: '/goods'
}, {
  path: '/goods',
  component: goods
}, {
  path: '/sellers',
  component: sellers
}, {
  path: '/comment',
  component: resolve => require(['./components/comment/comment.vue'], resolve)// 懒加载
}, {
  path: '/bar',
  component: bar
}];
Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  history: 'mode',
  template: '<App/>',
  components: { App }
});

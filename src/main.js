import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import {routes} from './routes';

import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../public/swiper/swiper.css'
Vue.use(VueAwesomeSwiper)

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

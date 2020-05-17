import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'babel-polyfill';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'animate.css'
import Vue from 'vue';
import store from './store'
import App from './App.vue';
import VueParallaxJs from 'vue-parallax-js'
import VueCarousel from 'vue-carousel';
import VueScrollTo from 'vue-scrollto';
import VueRouter from 'vue-router';
import router from './routes'

// import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
Vue.use(require('vue-moment'));
Vue.use(VueRouter);
Vue.use(VueCarousel);
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease-out",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})
Vue.use(VueParallaxJs, {
  minWidth: 1280,   /* minumum window width for parallax to take effect (number) */
  className: 'bg',  /* this class gets added to all elements that are being animated, by default none (string) */
  // container: window,  /* element that actually scrolls, by default it's window (string) */
});

new Vue({
  // vuetify,
  store,
  render: h => h(App),
  router
}).$mount('#app')




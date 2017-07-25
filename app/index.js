import 'whatwg-fetch';

import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './routes/application.vue';
import Index from './routes/index.vue';
import Portfolio from './routes/portfolio.vue';
import Designs from './routes/designs.vue';

// import vueScroll from 'vue-scroll';

Vue.use(VueRouter);
// Vue.use(vueScroll);

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },

  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio
  },

  {
    path: '/designs',
    name: 'designs',
    component: Designs
  }
];


const router = new VueRouter({
  mode: 'history',
  routes,
});

const app = new Vue({ ...App, router }).$mount('.app');

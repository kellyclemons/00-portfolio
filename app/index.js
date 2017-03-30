import 'whatwg-fetch';

import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './routes/application.vue';
import Index from './routes/index.vue';
import Portfolio from './routes/portfolio.vue';
import Blog from './routes/blog.vue';
import City from './routes/city.vue';

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
    path: '/blog',
    name: 'blog',
    component: Blog,
  },

  {
    path: '/city',
    name: 'city',
    component: City,
  },
];


const router = new VueRouter({
  mode: 'history',
  routes,
});

const app = new Vue({ ...App, router }).$mount('.app');

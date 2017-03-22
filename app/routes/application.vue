<template lang="html">
  <div class="">

    <nav class="navbar">
  <div class="navbar-left">
    <router-link :to="{ name: 'index' }"><img class="navbar-logo" src="http://i64.tinypic.com/210glc4.gif" alt=""></router-link>
    <p class="navbar-title">Kelly Clemons</p>
  </div>
  <div class="navbar-right">
    <router-link :to="{ name: 'portfolio' }" class="navbar-right-item">Portfolio</router-link>
    <router-link :to="{ name: 'blog' }" class="navbar-right-item">Blog</router-link>
    <router-link :to="{ name: 'city' }" class="navbar-right-item">City</router-link>
  </div>
</nav>

    <router-view></router-view>

  </div>
</template>

<script>
import Index from './index.vue';
export default {
  components: {
    Index,
  },

  name: 'Application',
  data() {
    return {
    };
  },

  methods: {

  },
};
</script>

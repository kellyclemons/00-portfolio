<template lang="html">
  <div class="app" @scroll="onScroll">

    <div class="top">
      <nav :class="544 < scrollPosition ? 'navbar-scrolled': null" class="navbar">
        <div class="navbar-left">
          <router-link :to="{ name: 'index' }"><img class="navbar-logo" src="http://i64.tinypic.com/210glc4.gif" alt=""></router-link>
          <p class="navbar-title">Kelly Clemons</p>
        </div>
        <div class="navbar-right">
          <a href="#middle" class="navbar-right-item">Portfolio</a>
          <a href="#footer" class="navbar-right-item">Connect</a>
          <router-link :to="{ name: 'city' }" class="navbar-right-item">City</router-link>
        </div>
      </nav>

      <div class="main-heading">
        <div class="main-heading-text">
          <p class="main-heading-big">Student at the Iron Yard</p>
          <p class="main-heading-small">As a student, I get the opportunity to learn and grow as a new developer.</p>
        </div>
      </div>
    </div>


<!-- MIDDLE SECTION - PROJECTS -->

    <div id="middle" class="middle">

      <div class="project-grid">

        <div class="project-grid__item">
          <img src="https://68.media.tumblr.com/7ab98f8681a0d1f5dd88083638360642/tumblr_nnvzswNbfR1ru8dh2o1_500.jpg" alt="" class="project-grid__image">
          <p class="project-grid__text">Surf and Paddle</p>
        </div>

        <div class="project-grid__item">
          <img src="https://68.media.tumblr.com/7ab98f8681a0d1f5dd88083638360642/tumblr_nnvzswNbfR1ru8dh2o1_500.jpg" alt="" class="project-grid__image">
          <p class="project-grid__text">Surf and Paddle</p>
        </div>

        <div class="project-grid__item">
          <img src="https://68.media.tumblr.com/7ab98f8681a0d1f5dd88083638360642/tumblr_nnvzswNbfR1ru8dh2o1_500.jpg" alt="" class="project-grid__image">
          <p class="project-grid__text">Surf and Paddle</p>
        </div>

        <div class="project-grid__item">
          <img src="https://68.media.tumblr.com/7ab98f8681a0d1f5dd88083638360642/tumblr_nnvzswNbfR1ru8dh2o1_500.jpg" alt="" class="project-grid__image">
          <p class="project-grid__text">Surf and Paddle</p>
        </div>

        <div class="project-grid__item">
          <img src="https://68.media.tumblr.com/7ab98f8681a0d1f5dd88083638360642/tumblr_nnvzswNbfR1ru8dh2o1_500.jpg" alt="" class="project-grid__image">
          <p class="project-grid__text">Surf and Paddle</p>
        </div>

        <div class="project-grid__item">
          <img src="https://68.media.tumblr.com/7ab98f8681a0d1f5dd88083638360642/tumblr_nnvzswNbfR1ru8dh2o1_500.jpg" alt="" class="project-grid__image">
          <p class="project-grid__text">Surf and Paddle</p>
        </div>

        <div class="project-grid__item">
          <img src="https://68.media.tumblr.com/7ab98f8681a0d1f5dd88083638360642/tumblr_nnvzswNbfR1ru8dh2o1_500.jpg" alt="" class="project-grid__image">
          <p class="project-grid__text">Surf and Paddle</p>
        </div>

        <div class="project-grid__item">
          <img src="https://68.media.tumblr.com/7ab98f8681a0d1f5dd88083638360642/tumblr_nnvzswNbfR1ru8dh2o1_500.jpg" alt="" class="project-grid__image">
          <p class="project-grid__text">Surf and Paddle</p>
        </div>

        <div class="project-grid__item">
          <img src="https://68.media.tumblr.com/7ab98f8681a0d1f5dd88083638360642/tumblr_nnvzswNbfR1ru8dh2o1_500.jpg" alt="" class="project-grid__image">
          <p class="project-grid__text">Surf and Paddle</p>
        </div>

      </div>
    </div>

<!-- CONNECT -->
    <div class="connect">
      <div class="connect-container">
        <div class="connect-card">
          <p class="connect-card__headline">Connect</p>
          <div class="connect-card__buttons">

            <div class="button-item">
              <a href="mailto:kelly.clemons@me.com" class="connect-card__buttons-button"><i class="fa fa-envelope" aria-hidden="true"></i></a>
              <p class="button-item__text">E-mail Kelly</p>
            </div>

            <div class="button-item">
              <a href="https://www.linkedin.com/in/kelly-clemons-50a8ba137/" class="connect-card__buttons-button"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
              <p class="button-item__text">View LinkedIn</p>
            </div>

            <div class="button-item">
              <a href="https://github.com/kellyclemons" class="connect-card__buttons-button"><i class="fa fa-github" aria-hidden="true"></i></a>
              <p class="button-item__text">View Github</p>
            </div>

            <div class="button-item">
              <a href="https://www.instagram.com/kellyclemons/" class="connect-card__buttons-button"><i class="fa fa-instagram" aria-hidden="true"></i></a>
              <p class="button-item__text">View Instagram</p>
            </div>

            <!-- <div class="button-item">
              <a href="https://www.facebook.com/kelly.e.clemons" class="connect-card__buttons-button"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
              <p class="button-item__text">View Facebook</p>
            </div> -->

          </div>
        </div>
      </div>
    </div>

    <!-- BOTTOM SECTION -->

    <!-- FOOTER -->

    <nav id="footer" class="footer">
      <div class="footer-left">
        <img class="footer-logo" src="http://i64.tinypic.com/210glc4.gif" alt="">
        <p class="footer-title">Kelly Clemons' Portfolo 2017, All Rights Reserved</p>
      </div>
      <div class="footer-right">
        <a href="mailto:kelly.clemons@me.com" class="footer-item"><i class="fa fa-envelope" aria-hidden="true"></i></a>
        <a href="https://www.linkedin.com/in/kelly-clemons-50a8ba137/" class="footer-item"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
        <a href="https://github.com/kellyclemons" class="footer-item"><i class="fa fa-github" aria-hidden="true"></i></a>
        <a href="https://www.instagram.com/kellyclemons/" class="footer-item"><i class="fa fa-instagram" aria-hidden="true"></i></a>
        <a href="https://www.facebook.com/kelly.e.clemons" class="footer-item"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
      </div>
    </nav>

  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      scrollPosition: 0,
      navOffset: 100,
      cb: null,
    };
  },

  mounted() {
    this.navOffset = this.$el.querySelector('nav').offsetTop;
    this.scrollPosition = this.$el.scrollTop;
  },

  methods: {
    onScroll(e, position) {
      this.scrollPosition = e.target.scrollTop;
    }
  },
};
</script>

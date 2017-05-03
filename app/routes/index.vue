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
          <a href="#resume" class="navbar-right-item">Resume</a>
          <a href="#connect" class="navbar-right-item">Connect</a>
        </div>
      </nav>

      <div class="main-heading">
        <div class="main-heading-text">
          <p class="main-heading-big">Kelly Clemons</p>
          <p class="main-heading-small">Designer and Developer</p>
        </div>
      </div>
    </div>


<!-- <div class="portfolio">
  <div class="portfolio__item">
    <div class="portfolio__item-slides">
      <img class="slide" style="width:100%" src="http://stabmag.com/assets/Uploads/2014/03/Taj_Burrow_JOHN_Barton.jpg" alt="">
      <img class="slide" style="width:100%" src="https://mavicmate.com/wp-content/uploads/2017/02/Richard-Batson-YallingupWA-28JAN-DJIMPOG.jpg?gid=1" alt="">
      <button class="next next-left" onclick="plusDivs(-1)">#10094</button>
      <button class="next next-right" onclick="plusDivs(1)">#10095</button>
    </div>
  </div>
</div> -->

<!-- MIDDLE SECTION - PROJECTS -->

    <div id="middle" class="middle">

      <div class="project-grid">

        <div class="project-grid__item">
        <a href="http://certain-wrench.surge.sh/" target="_blank">
          <img src="./images/taj-500.jpg" alt="" class="project-grid__image">
        </a>
          <p class="project-grid__text">Surf and Paddle</p>
        </div>

        <div class="project-grid__item">
          <a href="http://kclemons-tshirts.surge.sh/">
            <img src="./images/salty-two.jpg" alt="" class="project-grid__image">
          </a>
          <p class="project-grid__text">T-Shirts</p>
        </div>

        <div class="project-grid__item">
          <a href="http://kclemons-spotify.surge.sh/">
            <img src="http://cps-static.rovicorp.com/3/JPG_500/MI0004/101/MI0004101703.jpg?partner=allrovi.com" alt="" class="project-grid__image">
          </a>
          <p class="project-grid__text">Spotify</p>
        </div>

        <div class="project-grid__item">
          <a href="http://kclemons-puppyadoption.surge.sh/">
            <img src="https://s-media-cache-ak0.pinimg.com/736x/3e/9b/19/3e9b19f5e4494854dc98a7317938329a.jpg" alt="" class="project-grid__image">
          </a>
          <p class="project-grid__text">Puppy Adoption</p>
        </div>

        <div class="project-grid__item">
          <img src="./images/yoga-girls.jpg" alt="" class="project-grid__image">
          <p class="project-grid__text">Spot Me</p>
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

    <div id="resume" class="resume">
      <div class="connect-container">
        <div class="connect-card">
          <p class="connect-card__headline">Resume</p>
          <div class="resume-items">

            <div class="experience">
              <p class="skills__headline">Relevant Experience</p>
              <div class="experience__items">
                <p>Studied Front End Development at The Iron Yard in Nashville, Tennessee <span class="dates">2017<span></p>
                <p>Account Assistant at Lavare Design in Perth, Western Austalia <span class="dates">2015-2016<span></p>
                <p>Architecture Intern at JCY Architects and Urban Designers in Perth, Western Australia <span class="dates">2013-2014<span></p>
                <p>Studied Architecture at The University of Western Australia <span class="dates">2010-2014<span></p>
              </div>
            </div>

            <div class="skills">
              <p class="skills__headline">Skills</p>
              <div class="skills-item">
                <div class="skills__items">
                  <p class="skill">HTML</p>
                  <p class="skill">CSS + SASS</p>
                  <p class="skill">Javascript</p>
                  <p class="skill">Redux</p>
                  <p class="skill">Vue</p>
                  <p class="skill">Git + GitHub</p>
                </div>
                <div class="skills__items">
                  <p class="skill">Ember</p>
                  <p class="skill">UI/UX Design</p>
                  <p class="skill">Adobe InDesign</p>
                  <p class="skill">Adobe Illustrator</p>
                  <p class="skill">Adobe Photoshop</p>
                  <p class="skill">Sketch</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

<!-- CONNECT -->
    <div id="connect" class="connect">
      <div class="connect-container">
        <div class="connect-card">
          <p class="connect-card__headline">Connect</p>
          <div class="connect-card__buttons">

            <a href="mailto:kelly.clemons@me.com" target="_blank" class="button-item">
              <div class="connect-card__buttons-button"><i class="fa fa-envelope" aria-hidden="true"></i></div>
              <p class="button-item__text">E-mail Kelly</p>
            </a>

            <a href="https://www.linkedin.com/in/kelly-clemons-50a8ba137/" target="_blank" class="button-item">
              <div class="connect-card__buttons-button"><i class="fa fa-linkedin" aria-hidden="true"></i></div>
              <p class="button-item__text">View LinkedIn</p>
            </a>

            <a href="https://github.com/kellyclemons" target="_blank" class="button-item">
              <div class="connect-card__buttons-button"><i class="fa fa-github" aria-hidden="true"></i></div>
              <p class="button-item__text">View Github</p>
            </a>

            <a href="https://www.instagram.com/kellyclemons/" class="button-item">
              <div class="connect-card__buttons-button"><i class="fa fa-mobile" aria-hidden="true"></i></div>
              <p class="button-item__text">Call Kelly</p>
            </a>

            <!-- <div class="button-item">
              <a href="https://www.facebook.com/kelly.e.clemons" class="connect-card__buttons-button"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
              <p class="button-item__text">View Facebook</p>
            </div> -->

          </div>
        </div>
      </div>

      <nav id="footer" class="footer">
        <div class="footer-left">
          <img class="footer-logo" src="http://i64.tinypic.com/210glc4.gif" alt="">
          <p class="footer-title">Kelly Clemons' Portfolio 2017, All Rights Reserved</p>
        </div>
        <!-- <div class="footer-right">
          <a href="mailto:kelly.clemons@me.com" class="footer-item"><i class="fa fa-envelope" aria-hidden="true"></i></a>
          <a href="https://www.linkedin.com/in/kelly-clemons-50a8ba137/" class="footer-item"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
          <a href="https://github.com/kellyclemons" class="footer-item"><i class="fa fa-github" aria-hidden="true"></i></a>
          <a href="https://www.instagram.com/kellyclemons/" class="footer-item"><i class="fa fa-instagram" aria-hidden="true"></i></a>
          <a href="https://www.facebook.com/kelly.e.clemons" class="footer-item"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
        </div> -->
      </nav>
    </div>

    <!-- BOTTOM SECTION -->

    <!-- FOOTER -->



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

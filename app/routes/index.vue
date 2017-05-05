<template lang="html">
  <div class="app" @scroll="onScroll">

<!-- TOP SECTION -->
    <div id="top" class="top">
      <nav :class="500 < scrollPosition ? 'navbar-scrolled': null" class="navbar">
        <div class="navbar-left">
          <a href="#top"><img class="navbar-logo" src="http://i64.tinypic.com/210glc4.gif" alt=""></a>
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

<!-- MIDDLE SECTION - PROJECTS -->

    <div id="middle" class="middle">

      <div class="project-grid">

        <div class="project-grid__item">
          <a class="project-source" href="http://spotme.surge.sh/" target="_blank">
            <div class="project-image">
              <div class="image-overlay"></div>
              <img src="./images/yoga-girls.jpg" alt="" class="project-grid__image">
            </div>
          </a>
          <p class="project-grid__text">Spot Me</p>
        </div>

        <div class="project-grid__item">
        <a class="project-source" href="http://certain-wrench.surge.sh/" target="_blank">
          <div class="project-image">
            <div class="image-overlay"></div>
            <img src="./images/taj-500.jpg" alt="" class="project-grid__image">
          </div>
        </a>
        <p class="project-grid__text">Surf and Paddle</p>

        </div>

        <div class="project-grid__item">
          <a class="project-source" href="http://kclemons-spotify.surge.sh/" target="_blank">
            <div class="project-image">
              <div class="image-overlay"></div>
              <img src="http://cps-static.rovicorp.com/3/JPG_500/MI0004/101/MI0004101703.jpg?partner=allrovi.com" alt="" class="project-grid__image">
            </div>
          </a>
          <p class="project-grid__text">Spotify</p>
        </div>

        <div class="project-grid__item">
          <a class="project-source" href="http://kclemons-tshirts.surge.sh/" target="_blank">
            <div class="project-image">
              <div class="image-overlay"></div>
              <img src="./images/salty-two.jpg" alt="" class="project-grid__image">
            </div>
          </a>
          <p class="project-grid__text">T-Shirts</p>
        </div>

        <div class="project-grid__item">
          <a class="project-source" href="http://kclemons-puppyadoption.surge.sh/" target="_blank">
            <div class="project-image">
              <div class="image-overlay"></div>
              <img src="https://s-media-cache-ak0.pinimg.com/736x/3e/9b/19/3e9b19f5e4494854dc98a7317938329a.jpg" alt="" class="project-grid__image">
            </div>
          </a>
          <p class="project-grid__text">Puppy Adoption</p>
        </div>


        <div class="project-grid__item">
          <a class="project-source" href="http://keyboard-piano.surge.sh/" target="_blank">
            <div class="project-image">
              <img src="https://static1.squarespace.com/static/577975aef7e0ab3baff39d4f/t/579403d6579fb36d1f7758aa/1469318105066/people_hands_concert_music_crowd_80452_2048x2048.jpg?format=500w" alt="" class="project-grid__image">
              <div class="image-overlay"></div>
            </div>
          </a>
          <p class="project-grid__text">Keyboard Piano</p>
        </div>

      </div>
    </div>

<!-- RESUME AND SKILLS -->
    <div id="resume" class="resume">
      <div class="connect-container">
        <div class="connect-card">
          <p class="connect-card__headline">Resume</p>
          <div class="resume-items">

            <div class="experience">
              <p class="skills__headline">Relevant Experience</p>
              <div class="experience__items">
                <p>Studied Front End Web Development at The Iron Yard in Nashville, Tennessee <span class="dates">2017<span></p>
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
                  <p class="skill">Adobe Creative Suite</p>
                  <p class="skill">PostgresSEL</p>
                  <p class="skill">JSON API</p>
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

            <a href="tel:7138555596" class="button-item-div">
              <div class="test connect-card__buttons-button"><i class="fa fa-mobile" aria-hidden="true"></i></div>
              <p class="text-a button-item-div__text">Call Kelly</p>
              <p class="text-b button-item-div__text">713-855-5596</p>
            </a>

          </div>
        </div>
      </div>

      <!-- FOOTER -->
      <nav id="footer" class="footer">
        <div class="footer-left">
          <img class="footer-logo" src="http://i64.tinypic.com/210glc4.gif" alt="">
          <p class="footer-title">Kelly Clemons' Portfolio, 2017</p>
        </div>
      </nav>

    </div>

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

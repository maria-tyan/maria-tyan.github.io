<template>
  <div id="app">
    <header class="header">
      <div class="header__container">
        <h3 class="header__title">
          Maria Efremova
        </h3>
        <h4 class="header__subtitle">
          / Front-end Developer
        </h4>
      </div>
    </header>
    <section class="section">
      <div class="about">
        <div class="about__card card">
          <div class="card__photo" />
          <h1 class="card__title">
            Maria Efremova
          </h1>
          <p class="card__text">Front-end Developer</p>
        </div>
        <div class="about__info info">
          <h2 class="info__title">
            Hello
          </h2>
          <h3 class="info__subtitle">
            Here is who I am and what I do
          </h3>
          <div class="info__btn-wrapper">
            <a href="/" class="button">
              <span class="button__text">CV</span>
            </a>
            <a href="/" class="button">
              <span class="button__text">Projects</span>
            </a>
          </div>
          <div v-if=false>
            <p>
              I'm FrontEnd Developer with 4+ years of experience
              with modern JavaScript and with VueJS applications.
            </p>
            <p>
              I have knowledge and experience working in Front-end as well as Back-end.
            </p>
            <p>
              Also, I skilled in writing styles with pre-processors and methodologies
              (Less, SCSS, Stylus and BEM methodology), having good understanding of UX and
              accessibility and knowledge of FrontEnd toolset (WebPack, Gulp, Babel, etc.)
            </p>
            <p>
              My experience includes work with cross-browser development,
              build architectures for projects and enlivening sites with animations.
            </p>
          </div>
        </div>
      </div>
    </section>
    <footer class="footer">
      <div class="footer__copyright">
        <p class="footer__copyright-item">
          &copy;
          {{ new Date().getFullYear() }}
          Maria Efremova
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="less">
  @import "./less/global.less";
  @import "./less/header.less";
  @import "./less/about.less";
  @import "./less/card.less";
  @import "./less/info.less";
  @import "./less/button.less";
  @import "./less/footer.less";
</style>

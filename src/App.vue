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
      <div id="nav" class="nav">
        <router-link to="/" class="nav__item">
          Home
        </router-link>
        <router-link to="/about" class="nav__item">
          About
        </router-link>
      </div>
    </header>

    <section class="section">
      <router-view/>
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

<style lang="less">
  @import "./less/global.less";
  @import "./less/header.less";
  @import "./less/about.less";
  @import "./less/card.less";
  @import "./less/info.less";
  @import "./less/button.less";
  @import "./less/footer.less";
</style>

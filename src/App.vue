<template>
  <div id="app">
    <header class="header">
      <h1>
        Maria Efremova
      </h1>
      <p>Front-end Developer</p>
    </header>
    <section class="container">
      <div class="card">
        <h1>
          Maria Efremova
        </h1>
        <p>Front-end Developer</p>
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
  @import "./less/footer.less";
</style>

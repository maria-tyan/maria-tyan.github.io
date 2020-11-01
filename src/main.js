import Vue from 'vue';

// import VueRouter from 'vue-router';
import App from './App.vue';

import router from './router';
// import CodingTask from './components/CodingTask.vue';

Vue.config.productionTip = false;
// Vue.use(VueRouter);

// const routes = [
//   { path: '/task', component: CodingTask },
// ];

// const router = new VueRouter({
//   routes, // short for `routes: routes`
// });

new Vue({
  router,

  // router,
  render: (h) => h(App),
}).$mount('#app');

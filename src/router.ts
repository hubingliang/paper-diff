import Vue from 'vue';
import Router from 'vue-router';
import Translate from './views/Translate.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/paper-different/dist/',
  routes: [
    {
      path: '/',
      name: 'Translate',
      component: Translate,
    },
  ],
});

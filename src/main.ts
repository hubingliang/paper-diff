import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueClipboard from 'vue-clipboard2'
 
declare module 'vue/types/vue' {
  // tslint:disable-next-line:interface-name
  interface Vue {
    $copyText: any
  }
  // tslint:disable-next-line:interface-name
  interface VueConstructor<V extends Vue> {
    copyText: any
  }
}

Vue.config.productionTip = false;
Vue.use(VueClipboard)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

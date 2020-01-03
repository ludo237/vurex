import Vue from 'vue';
import Vurex from './Vurex.vue';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(Vurex)
}).$mount('#app')

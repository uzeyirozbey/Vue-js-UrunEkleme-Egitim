import Vue from 'vue';
import App from './App.vue';
import {router} from "./router";
import {store} from "./Store/store";
import VueResource from "vue-resource";
Vue.use(VueResource);

//filter kullanımı Para Kullanımı
Vue.filter("currency",(value) => {
  return parseFloat(value).toLocaleString(undefined, {minimumFractionDigits : 2}) + "TL"
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})

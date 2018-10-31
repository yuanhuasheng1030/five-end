import Vue from 'vue';
import './plugins/axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './store/index'
import Login from './components/login/index.vue'
import App from './App.vue'

import Index from "./components/manage/beforeStage"

Vue.use(ElementUI);
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

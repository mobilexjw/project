// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import AppMain from './components/main/AppMain'
Vue.config.productionTip = false
import './style/usage/modules/Appmain.scss'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<AppMain/>',
  components: { AppMain }
})

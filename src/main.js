// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/* Font-Awesome */
import 'vue-awesome/icons/flag'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
// /* 手机端地区选择 */
// import larea from './units/Larea.js'
Vue.component('icon', Icon)
Vue.config.productionTip = true

/**
 * 添加全局变量判断是否选择过必选项
 */
Vue.prototype.$isLoad = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

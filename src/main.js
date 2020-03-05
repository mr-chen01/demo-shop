import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/font/iconfont.css'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.baseURL=" https://source.unsplash.com/";  //公共地址，
Vue.prototype.$http = axios;   //原型对象

new Vue({
  router,
  render: h => h(App)
}).$mount('#app') 

import Vue from 'vue'
import router from '@/router/router'
import store from '@/store/store'
import './registerServiceWorker'
//第三方库的配置
import '@/utils/plugins/index'
import App from './App.vue'


Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

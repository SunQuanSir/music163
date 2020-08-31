import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css'
import './assets/css/style.css'
import { Lazyload , Toast } from 'vant'
import store from "./store";

Vue.config.productionTip = false
// 图片懒加载
Vue.use(Lazyload);
//注册后可以为组件添加懒加载↓
Vue.use(Lazyload, {
  lazyComponent: true,
});
//注册提示框
Vue.use(Toast)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import $ from 'jquery'
import 'swiper/css/swiper.css' 

import './assets/js/sizeRem.js'
import './assets/css/base.css' /*引入公共样式*/

// vant组件
import { Picker,DatetimePicker,Checkbox,CheckboxGroup,Cell,CellGroup,Area,Field,Button,Toast,Tab, Tabs } from 'vant';

Vue.use(Checkbox).use(CheckboxGroup);
Vue.use(Cell).use(CellGroup);
Vue.use(Picker).use(DatetimePicker);
Vue.use(Area).use(Field); 
Vue.use(Button).use(Toast)
Vue.use(Tab).use(Tabs)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import ChartPlugin from './plugins/ChartPlugin'
import { router } from './routes'

Vue.config.productionTip = false

Vue.use(ChartPlugin)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})

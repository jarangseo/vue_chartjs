import Vue from 'vue'
import VueRouter from 'vue-router'
import ChartjsView from '../views/ChartjsView.vue'
import HighchartView from '../views/HighchartView.vue'
import MultipleChartjs from '../views/MultipleChartjs.vue'
import MultipleHighchart from '../views/MultipleHighchart.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/chartjs'
    },
    { 
      path: '/chartjs',
      component: ChartjsView
    },
    { 
      path: '/highchart',
      component: HighchartView
    },
    { 
      path: '/multiplechartjs',
      component: MultipleChartjs
    },
    { 
      path: '/multipleHighchart',
      component: MultipleHighchart
    }
  ]
})

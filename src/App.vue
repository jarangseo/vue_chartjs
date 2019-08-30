<template>
  <div id="app">
    <div class="header">
      <router-link to="/chartjs">chartjs</router-link> |
      <router-link to="/highchart">highchart</router-link> |
      <router-link to="/multiplechartjs">multiplechartjs</router-link> | 
      <router-link to="/multipleHighchart">multipleHighchart</router-link>
    </div>
    <router-view></router-view>
    <!-- <chartjs-view></chartjs-view> -->
    <!-- <highchart-view></highchart-view> -->
  </div>
</template>
<script>
import ChartjsView from './views/ChartjsView.vue'
import HighchartView from './views/HighchartView.vue'
import MultipleChartjs from './views/MultipleChartjs.vue'
import MultipleHighchart from './views/MultipleHighchart.vue'

export default {
  name: 'App',
  components: {
    ChartjsView,
    HighchartView,
    MultipleChartjs,
    MultipleHighchart
  }
}
</script>
<style>
body {
  padding: 0;
  margin: 0;
}
</style>
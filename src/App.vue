<template>
  <div>
    <chartjs-view></chartjs-view>
    <!-- <highchart-view></highchart-view> -->
  </div>
</template>
<script>
import ChartjsView from './views/ChartjsView.vue'
import HighchartView from './views/HighchartView.vue'
export default {
  name: 'App',
  components: {
    ChartjsView,
    HighchartView
  }
}
</script>
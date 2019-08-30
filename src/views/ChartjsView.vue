<template>
  <div style="width:500px;margin:auto">
    <bar-chart v-bind:propsdata="chartDataSet" v-on:refresh:chart="refreshChart"></bar-chart>
    <line-chart v-bind:propsdata="chartDataSet" v-on:refresh:chart="refreshChart"></line-chart>
    <radar-chart v-bind:propsdata="chartDataSet" v-on:refresh:chart="refreshChart"></radar-chart>
    <pie-chart v-bind:propsdata="chartDataSet" v-on:refresh:chart="refreshChart"></pie-chart>
    <doughnut-chart v-bind:propsdata="chartDataSet" v-on:refresh:chart="refreshChart"></doughnut-chart>
    <bubble-chart v-bind:propsdata="chartDataSet" v-on:refresh:chart="refreshChart"></bubble-chart>
    <polararea-chart v-bind:propsdata="chartDataSet" v-on:refresh:chart="refreshChart"></polararea-chart>
    <scatter-chart v-bind:propsdata="chartDataSet" v-on:refresh:chart="refreshChart"></scatter-chart>
  </div>
</template>
<script>
import BarChart from '../components/BarChart'
import LineChart from '../components/LineChart'
import RadarChart from '../components/RadarChart'
import PieChart from '../components/PieChart'
import DoughnutChart from '../components/DoughnutChart'
import BubbleChart from '../components/BubbleChart'
import PolarareaChart from '../components/PolarareaChart'
import ScatterChart from '../components/ScatterChart'

import {util} from '../assets/utils/util.js'

export default {
  components: {
    BarChart,
    LineChart,
    RadarChart,
    PieChart,
    DoughnutChart,
    BubbleChart,
    PolarareaChart,
    ScatterChart
  },
  data() {
    return {
      chartDataSet: util.getRandomData()
    }
  },
  methods: {
    refreshChart () {
      console.log('emit')
      this.chartDataSet = [10,20]
    }
  },
  created() {
    // axios.get('')
    //   .then(response => this.chartDataSet = response.data)
    //   .catch(error => console.log(error))
  }
}
</script>
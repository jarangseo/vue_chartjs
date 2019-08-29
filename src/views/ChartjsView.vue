<template>
  <div>
    <bar-chart v-bind:propsdata="chartDataSet" v-on:refresh:chart="refreshChart"></bar-chart>
    <line-chart v-bind:propsdata="chartDataSet" v-on:refresh:chart="refreshChart"></line-chart>
  </div>
</template>
<script>
import BarChart from '../components/BarChart'
import LineChart from '../components/LineChart'
import {util} from '../assets/utils/util.js'

export default {
  components: {
    BarChart,
    LineChart
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
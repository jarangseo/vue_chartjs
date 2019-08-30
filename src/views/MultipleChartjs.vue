<template>
  <div>
    <div v-for="index in 30" style="display:flex">
      <bigline-chart v-bind:propsdata="chartDataSet" v-on:refresh:chart="refreshChart"></bigline-chart>
      <bigline-chart v-bind:propsdata="chartDataSet" v-on:refresh:chart="refreshChart"></bigline-chart>
      <bigline-chart v-bind:propsdata="chartDataSet" v-on:refresh:chart="refreshChart"></bigline-chart>
    </div>
  </div>
</template>
<script>
import BiglineChart from '../components/BiglineChart'
import {util} from '../assets/utils/util.js'

export default {
  components: {
    BiglineChart
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
  }
}
</script>
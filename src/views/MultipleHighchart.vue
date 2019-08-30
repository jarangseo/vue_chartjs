<template>
  <div>
    <div style="display:flex" v-for="item in 30">
      <highcharts :options="options" ref="highcharts"></highcharts>
      <highcharts :options="options" ref="highcharts"></highcharts>
      <highcharts :options="options" ref="highcharts"></highcharts>
    </div>
  </div>
</template>
<script>
import Highcharts from 'highcharts'
import { genComponent } from 'vue-highcharts'
import { util } from '../assets/utils/util.js'

export default {
  components: {
    Highcharts: genComponent("Highcharts", Highcharts)
  },
  data() {
    return {
      options: {
        series: util.getRandomData()
      }
    }
  }
}
</script>
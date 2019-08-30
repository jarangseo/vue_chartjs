<template>
    <div>
        <h1>Canvas JS Chart</h1>
        <div id="chartContainer" style="height: 300px; width: 100%;"></div>
    </div>
</template>
<script>
import CanvasJS from 'canvasjs'

export default {
    props: ['propsdata'],
    mounted() {
    // var that = this;
    // var container = this.$refs.canvasjsChart
    // var limit = 10000;    //increase number of dataPoints by increasing the limit
    // var y = 100;    
    // var data = [];
    // var dataSeries = { type: "line" };
    // var dataPoints = [];
    // for (var i = 0; i < limit; i += 1) {
    //   y += Math.round(Math.random() * 10 - 5);
    //   dataPoints.push({
    //     x: i,
    //     y: y
    //   });
    // }
    // dataSeries.dataPoints = dataPoints;
    // data.push(dataSeries);

    // //Better to construct options first and then pass it as a parameter
    // var options = {
    //   zoomEnabled: true,
    //   animationEnabled: true,
    //   title: {
    //     text: "Try Zooming - Panning"
    //   },
    //   axisY: {
    //     includeZero: false
    //   },
    //   data: data  // random data
    // };

    // container.CanvasJSChart(options);
    var chart = new CanvasJS.Chart(this.$refs.canvasjsChart, {
              data: [
              {
                  type: "line",
                  dataPoints: [
                  { x: 10, y: 10 },
                  { x: 20, y: 15 },
                  { x: 30, y: 25 },
                  { x: 40, y: 30 },
                  { x: 50, y: 28 }
                  ]
              }
              ]
          });
 
          chart.render();
  }
}
</script>
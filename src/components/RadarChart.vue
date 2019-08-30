<template>
  <div>
    <h1>Rader Chart</h1>
    <canvas id="radarChart" ref="radarChart" width="400" height="400"></canvas>
  </div>  
</template>
<script>

export default {
    props: ['propsdata'],
    mounted() {
    var that = this;
    var radarChart = new this.$_Chart(this.$refs.radarChart.getContext('2d'), {
      type: 'radar',
      data: {
        //   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        // datasets: this.propsdata
        labels: ["M", "T", "W", "T", "F", "S", "S"],
        datasets: [{
          label: 'apples',
          backgroundColor: "rgba(153,255,51,0.4)",
          borderColor: "rgba(153,255,51,1)",
          data: [12, 19, 3, 17, 28, 24, 7]
        }, {
          label: 'oranges',
          backgroundColor: "rgba(255,153,0,0.4)",
          borderColor: "rgba(255,153,0,1)",
          data: [30, 29, 5, 5, 20, 3, 10]
        }]
      },
      options: {
          // scales: {
          //     yAxes: [{
          //         ticks: {
          //             beginAtZero: true
          //         }
          //     }]
          // },
          onClick: function() {
              that.$emit('refresh:chart')
          }
      }
    });
  }
}
</script>
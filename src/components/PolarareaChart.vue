<template>
  <div>
    <h1>Polar Area Chart</h1>
    <canvas id="polarAreaChart" ref="polarAreaChart" width="400" height="400"></canvas>
  </div>
</template>
<script>

export default {
    props: ['propsdata'],
    mounted() {
    var that = this;
    var polarAreaChart = new this.$_Chart(this.$refs.polarAreaChart.getContext('2d'), {
      type: 'polarArea',
      data: {
        labels: ["M", "T", "W", "T", "F", "S", "S"],
        datasets: [{
          backgroundColor: [
            "#2ecc71",
            "#3498db",
            "#95a5a6",
            "#9b59b6",
            "#f1c40f",
            "#e74c3c",
            "#34495e"
          ],
          data: [12, 19, 3, 17, 28, 24, 7]
        }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          },
          onClick: function() {
              that.$emit('refresh:chart')
          },
          animation: {
                onProgress: function(animation) {
                    console.log('polar area progress')
                    // that.progress = animation.animationObject.currentStep / animation.animationObject.numSteps;
                },
                onComplete: function(animation) {
                    console.log('polar area complete')
                }
            }
      }
    });
  }
}
</script>
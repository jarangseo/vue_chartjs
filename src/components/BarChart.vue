<template>
    <canvas id="barChart" ref="barChart" width="400" height="400"></canvas>
</template>
<script>

export default {
    props: ['propsdata'],
    mounted() {
    // var ctx = document.getElementById('barChart').getContext('2d');
    var that = this;
    var barChart = new this.$_Chart(this.$refs.barChart.getContext('2d'), {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: this.propsdata
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
          }
      }
    });
  }
}
</script>
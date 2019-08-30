<template>
    <div>
        <h1>Doughnut Chart</h1>
        <canvas id="doughnutChart" ref="doughnutChart" width="400" height="400"></canvas>
    </div>
</template>
<script>

export default {
    props: ['propsdata'],
    mounted() {
    var that = this;
    var doughnutChart = new this.$_Chart(this.$refs.doughnutChart.getContext('2d'), {
      type: 'doughnut',
      data: {
        //   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        // datasets: this.propsdata
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        // datasets: [{
        //     label: '# of Votes in 2018',
        //     data: [12, 19, 3, 5, 2, 3],
        //     backgroundColor: [
        //         'rgba(255, 99, 132, 0.2)',
        //         'rgba(54, 162, 235, 0.2)',
        //         'rgba(255, 206, 86, 0.2)',
        //         'rgba(75, 192, 192, 0.2)',
        //         'rgba(153, 102, 255, 0.2)',
        //         'rgba(255, 159, 64, 0.2)'
        //     ],
        //     borderColor: [
        //         'rgba(255, 99, 132, 1)',
        //         'rgba(54, 162, 235, 1)',
        //         'rgba(255, 206, 86, 1)',
        //         'rgba(75, 192, 192, 1)',
        //         'rgba(153, 102, 255, 1)',
        //         'rgba(255, 159, 64, 1)'
        //     ],
        //     borderWidth: 1
        // },
        // {
        //     label: '# of Votes in 2019',
        //     data: [1,2,3,4,5,6],
        //     backgroundColor: [
        //         'rgba(255, 99, 132, 0.2)',
        //         'rgba(54, 162, 235, 0.2)',
        //         'rgba(255, 206, 86, 0.2)',
        //         'rgba(75, 192, 192, 0.2)',
        //         'rgba(153, 102, 255, 0.2)',
        //         'rgba(255, 159, 64, 0.2)'
        //     ],
        //     borderColor: [
        //         'rgba(255, 99, 132, 1)',
        //         'rgba(54, 162, 235, 1)',
        //         'rgba(255, 206, 86, 1)',
        //         'rgba(75, 192, 192, 1)',
        //         'rgba(153, 102, 255, 1)',
        //         'rgba(255, 159, 64, 1)'
        //     ],
        //     borderWidth: 1
        // }]
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
                    console.log('doghnut progress')
                    // that.progress = animation.animationObject.currentStep / animation.animationObject.numSteps;
                },
                onComplete: function(animation) {
                    console.log('doghnut complete')
                }
            }
        }
    });
  }
}
</script>
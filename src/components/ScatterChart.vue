<template>
    <div>
        <h1>Scatter Chart</h1>
        <canvas id="scatterChart" ref="scatterChart" width="400" height="400"></canvas>
    </div>
</template>
<script>

export default {
    props: ['propsdata'],
    mounted() {
    var that = this;
    var scatterChart = new this.$_Chart(this.$refs.scatterChart.getContext('2d'), {
        type: 'scatter',
        data: {
            datasets: [{
            label: 'Scatter Dataset',
            data: [{
                x: -10,
                y: 0
            }, {
                x: 0,
                y: 10
            }, {
                x: 10,
                y: 5
            }]
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
            },
            animation: {
                onProgress: function(animation) {
                    console.log('Scatter progress')
                    // that.progress = animation.animationObject.currentStep / animation.animationObject.numSteps;
                },
                onComplete: function(animation) {
                    console.log('Scatter complete')
                }
            }
        }
    });
  }
}
</script>
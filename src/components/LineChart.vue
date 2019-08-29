<template>
    <canvas id="lineChart" ref="lineChart" width="400" height="400"></canvas>
</template>
<script>
export default {
    props: ['propsdata'],
    data() {
        return {
            progress: 0
        }
    },
    watch: {
        progress(d){
            console.log(d)
        }
    },
    mounted() {
        // var ctx = this.$refs.lineChart
        var that = this
        var lineChart = new this.$_Chart(this.$refs.lineChart, {
            type: 'line',
            data: {
                // labels: [],
                datasets: this.propsdata
            },
            options: {
                legend: {
                    display: true,
                    labels: {
                        fontColor: 'blue'
                    }
                },
                tooltips: {
                    mode: 'index'
                },
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
                        that.progress = animation.animationObject.currentStep / animation.animationObject.numSteps;
                    }
                }
            }
        });
    }
}
</script>
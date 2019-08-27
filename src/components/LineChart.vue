<template>
    <canvas id="lineChart" ref="lineChart" width="400" height="400"></canvas>
</template>
<script>
export default {
    props: ['propsdata'],
    mounted() {
        // var ctx = this.$refs.lineChart
        var lineChart = new this.$_Chart(this.$refs.lineChart, {
            type: 'line',
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
                }
            }
        });
    }
}
</script>
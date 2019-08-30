<template>
    <div>
        <h1>Big Line Chart</h1>
        <canvas id="bigLineChart" ref="bigLineChart" width="400" height="400"></canvas>
    </div>
</template>
<script>

export default {
    props: ['propsdata'],
    data() {
        return {
            bigLineChart:''
        }
    },
    mounted() {
        var that = this;

        this.bigLineChart = new this.$_Chart(this.$refs.bigLineChart.getContext('2d'), {
            type: 'line',
            data: {
                datasets: this.propsdata
            }
        })
    }
}
</script>
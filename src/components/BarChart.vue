<template>
    <div>
        <h1>Bar Chart</h1>
        <canvas id="barChart" ref="barChart" width="400" height="400"></canvas>
        <button @click="addData">addData</button>
        <button @click="removeData">removeData</button>
    </div>
</template>
<script>

export default {
    props: ['propsdata'],
    data() {
        return {
            barChart:''
        }
    },
    methods: {
        addData() {
            console.log(this.barChart)
            // this.barChart.data.datasets.push({
            //         label: '# of Votes in 2020',
            //         data: [12, 19, 3, 5, 2, 3],
            //         backgroundColor: [
            //             'rgba(255, 99, 132, 0.2)',
            //             'rgba(54, 162, 235, 0.2)',
            //             'rgba(255, 206, 86, 0.2)',
            //             'rgba(75, 192, 192, 0.2)',
            //             'rgba(153, 102, 255, 0.2)',
            //             'rgba(255, 159, 64, 0.2)'
            //         ],
            //         borderColor: [
            //             'rgba(255, 99, 132, 1)',
            //             'rgba(54, 162, 235, 1)',
            //             'rgba(255, 206, 86, 1)',
            //             'rgba(75, 192, 192, 1)',
            //             'rgba(153, 102, 255, 1)',
            //             'rgba(255, 159, 64, 1)'
            //         ],
            //         borderWidth: 1
            //     })
            this.barChart.data.labels.push('newLegend');
            this.barChart.data.datasets.forEach((dataset) => {
                dataset.data.push(10);
            });
            this.barChart.update({
                duration: 2000,
                easing: 'easeOutBounce'
            });
        },
        removeData(chart) {
            this.barChart.data.labels.pop();
            this.barChart.data.datasets.forEach((dataset) => {
                dataset.data.pop();
            });
            this.barChart.update();
        }
    },
    mounted() {
        var that = this;

        this.barChart = new this.$_Chart(this.$refs.barChart.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes in 2018',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: '# of Votes in 2019',
                    data: [1,2,3,4,5,6],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
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
                onClick: function(event, item) {
                    console.log('onClick')
                    console.log(this.data)
                    console.log('event', event)
                    console.log('item', item)
                    that.$emit('refresh:chart')
                },
                onHover: function() {
                    console.log('onHover')
                },
                events: ['click'],
                animation: {
                    onProgress: function(animation) {
                        console.log('bar progress')
                        that.progress = animation.animationObject.currentStep / animation.animationObject.numSteps;
                    },
                    onComplete: function(animation) {
                        console.log('bar complete')
                    }
                },
                legend: {
                    display: true,
                    onClick(event, item) {
                        console.log('legend onclick')
                        console.log(event, item)
                        console.log(this.chart.data.datasets[1].data)
                    }
                }
            }
        })
    }
}
</script>
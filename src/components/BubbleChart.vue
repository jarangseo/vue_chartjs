<template>
    <div>
        <h1>Bubble Chart</h1>
        <canvas id="bubbleChart" ref="bubbleChart" width="400" height="400"></canvas>
    </div>
</template>
<script>

export default {
    props: ['propsdata'],
    mounted() {
    var that = this;
    var bubbleChart = new this.$_Chart(this.$refs.bubbleChart.getContext('2d'), {
      type: 'bubble',
      data: {
        //   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        // datasets: this.propsdata
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
            label: '# of Votes in 2018',
            data: [{x:1,y:3,r:7}, {x:5,y:3,r:10}, {x:2,y:7,r:8}],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)'
            ],
            // borderColor: [
            //     'rgba(255, 99, 132, 1)',
            //     'rgba(54, 162, 235, 1)',
            //     'rgba(255, 206, 86, 1)',
            //     'rgba(75, 192, 192, 1)',
            //     'rgba(153, 102, 255, 1)',
            //     'rgba(255, 159, 64, 1)'
            // ],
            // borderWidth: 1
        },
        {
            label: '# of Votes in 2019',
            data: [{x:6,y:-4,r:9}, {x:9,y:-2,r:10}, {x:-12,y:7,r:8}],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)'
            ],
            // borderColor: [
            //     'rgba(255, 99, 132, 1)',
            //     'rgba(54, 162, 235, 1)',
            //     'rgba(255, 206, 86, 1)',
            //     'rgba(75, 192, 192, 1)',
            //     'rgba(153, 102, 255, 1)',
            //     'rgba(255, 159, 64, 1)'
            // ],
            // borderWidth: 1
        }
        ]
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
                    console.log('bubble progress')
                    // that.progress = animation.animationObject.currentStep / animation.animationObject.numSteps;
                },
                onComplete: function(animation) {
                    console.log('bubble complete')
                }
            }
        }
    });
  }
}
</script>
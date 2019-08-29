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
                ///Boolean - 차트 눈금 표시 여부 설정
                scaleShowGridLines : true,
                //String - 차트 눈금 색 설정
                scaleGridLineColor : "rgba(0,0,0,0.05)",
                //Number - 차트 눈금 선 굵기 설정
                scaleGridLineWidth : 1,
                //Boolean - 차트 선이 꺽이는 부분을 곡선 처리 여부 설정
                bezierCurve : true,
                //Number - 차트 선의 곡선의 정도 설정
                bezierCurveTension : 0.4,
                //Boolean - 차트 선의 데이터 부분 점 표시 여부 설정
                pointDot : true,
                //Number - 차트 선의 데이터 부분 점 크기 설정
                pointDotRadius : 4,
                //Number - 차트 선의 데이터 부분 점 테두리 너비 설정
                pointDotStrokeWidth : 1,
                //Number - 차트 선의 데이터 부분 팝업 노출 범위 설정
                pointHitDetectionRadius : 20,
                //Boolean - Whether to show a stroke for datasets
                datasetStroke : true,
                //Number - 차트 선의 너비 설정
                datasetStrokeWidth : 2,
                //Boolean - 차트에서 선만 노출 여부 설정
                datasetFill : true,
                scaleShowGridLines : true,
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
                        console.log('progress')
                        that.progress = animation.animationObject.currentStep / animation.animationObject.numSteps;
                    },
                    onComplete: function(animation) {
                        console.log('complete')
                    }
                }
            }
        });
    }
}
</script>
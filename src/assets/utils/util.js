
export const util = {
  getRandomData() {
    let chartDataSet = []
    for(let j = 0; j < 200; j++) {
      let chartDataItem = {label: `chart Data Item ${j}`, data: [], backgroundColor: "#"+((1<<24)*Math.random()|0).toString(16)}
      for (let i = 0; i < 200; i++){
        chartDataItem.data.push(Math.random() * 10)
      }
      chartDataSet.push(chartDataItem)
    }
    return chartDataSet
  },
  getRandomColor () {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++){
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }
}

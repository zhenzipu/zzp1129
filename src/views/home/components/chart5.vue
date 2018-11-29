<template>
  <div id="chart5" style="width:500px;height:200px;"></div>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  name: "chart5",
  props: {},
  data() {
    return {};
  },
  methods: {
    initChart() {
      var mixLineBar = echarts.init(document.getElementById("chart5"));
      const option = {
        // 提示框组件
        tooltip: {
          confine: true,
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#fff"
            }
          }
        },
            xAxis: {
                type: 'category',
                data: ['00:00','02:00','04:00','06:00','08:00','10:00','12:00']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [120, 200, 150, 80, 70, 99, 48, 29],
                stack:'line',
                type: 'line'
            },{
                data: [120, 200, 150, 80, 70, 99, 48, 29],
                stack:'line',
                type: 'line'
            },{
                data: [120, 200, 150, 80, 70, 99, 48, 29],
                stack:'line',
                type: 'line'
            }]
      };
      mixLineBar.setOption(option);
      window.addEventListener("resize", function() {
        mixLineBar.resize();
      });
    }
  },
  mounted() {
    this.initChart();
  }
};
</script>

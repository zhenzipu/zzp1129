<template>
  <div id="chart6" style="width:500px;height:200px;"></div>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  name: "chart6",
  props: {},
  data() {
    return {};
  },
  methods: {
    initChart() {
      var mixLineBar = echarts.init(document.getElementById("chart6"));
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
                name:'非洲猪瘟',
                data: [120, 200, 150, 80, 70, 99, 48, 29],
                stack:'line',
                type: 'line'
            },{
                name:'滥伐林木',
                data: [120, 200, 150, 80, 70, 99, 48, 29],
                stack:'line',
                type: 'line'
            },{
                name:'黑中介',
                data: [120, 200, 150, 80, 70, 99, 48, 29],
                stack:'line',
                type: 'line'
            },{
                name:'垃圾焚烧',
                data: [120, 200, 150, 80, 70, 99, 48, 29],
                stack:'line',
                type: 'line'
            },{
                name:'烂尾',
                data: [120, 200, 150, 80, 70, 99, 48, 29],
                stack:'line',
                type: 'line'
            },{
                name:'违禁药品',
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

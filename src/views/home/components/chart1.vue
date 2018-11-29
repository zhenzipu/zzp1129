<template>
  <div
    id="chart1"
    style="width:200px;height:200px;"
  ></div>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  name: "chart1",
  props: {},
  data() {
    return {};
  },
  methods: {
    initChart() {
      var mixLineBar = echarts.init(document.getElementById("chart1"));
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
          type: "category",
          data: ["媒体1", "媒体2", "媒体3", "媒体4", "媒体5", "媒体6"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 96],
            type: "bar"
          }
        ]
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

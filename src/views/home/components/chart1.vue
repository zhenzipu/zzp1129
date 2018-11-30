<template>
  <div
    id="chart1"
    style="width:280px;height:200px;"
  ></div>
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
        // title : {
        //     subtext: '单位:篇'
        // },
       legend: {
            data:['网页','微信','客户端','微博','报刊','论坛']
        },
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
      
        textStyle: {
          color: "rgba(255, 255, 255)"
        },
        xAxis: {
          type: "category",
          data: ["媒体1", "媒体2", "媒体3", "媒体4", "媒体5", "媒体6"],
          color:"#fff",
          
        },
        yAxis: {
        name: '单位：篇',
          type: "value"
        },
        series: [
          {
            data: [120, 110, 98, 87, 76, 54],
            type: "bar",
            barWidth:'10',
            itemStyle:{
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: 'red'},
                            {offset: 0.9, color: '#188df0'},
                            {offset: 1, color: '#188df0'}
                        ]
                    )
                },
            }
          },
        //   {
        //     data: [null, 12, null, null, null, null],
        //     type: "bar",
        //     barWidth:'10',
        //     itemStyle:{
        //         normal: {
        //             color: new echarts.graphic.LinearGradient(
        //                 0, 0, 0, 1,
        //                 [
        //                     {offset: 0, color: 'green'},
        //                     {offset: 0.9, color: '#188df0'},
        //                     {offset: 1, color: '#188df0'}
        //                 ]
        //             )
        //         },
        //     }
        //   },
        //   {
        //     data: [null, null, 89, null, null, null],
        //     type: "bar",
        //     barWidth:'10',
        //     itemStyle:{
        //         normal: {
        //             color: new echarts.graphic.LinearGradient(
        //                 0, 0, 0, 1,
        //                 [
        //                     {offset: 0, color: 'orange'},
        //                     {offset: 0.9, color: '#188df0'},
        //                     {offset: 1, color: '#188df0'}
        //                 ]
        //             )
        //         },
        //     }
        //   },
        //   {
        //     data: [null, null, null, 73, null, null],
        //     type: "bar",
        //     barWidth:'10',
        //     itemStyle:{
        //         normal: {
        //             color: new echarts.graphic.LinearGradient(
        //                 0, 0, 0, 1,
        //                 [
        //                     {offset: 0, color: 'green'},
        //                     {offset: 0.9, color: '#188df0'},
        //                     {offset: 1, color: '#188df0'}
        //                 ]
        //             )
        //         },
        //     }
        //   },
        //   {
        //     data: [null, null, null, null, 140, null],
        //     type: "bar",
        //     barWidth:'10',
        //     itemStyle:{
        //         normal: {
        //             color: new echarts.graphic.LinearGradient(
        //                 0, 0, 0, 1,
        //                 [
        //                     {offset: 0, color: 'green'},
        //                     {offset: 0.9, color: '#188df0'},
        //                     {offset: 1, color: '#188df0'}
        //                 ]
        //             )
        //         },
        //     }
        //   }
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

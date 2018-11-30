<template>
  <div id="chart2" style="width:230px;height:180px;"></div>
</template>
<script>
import echarts from "echarts";
import wordcloud from "echarts-wordcloud";
export default {
  name: "chart2",
  props: {},
  data() {
    return {};
  },
  methods: {
    createRandomItemStyle() {
      return {
        normal: {
          color:
            "rgb(" +
            [
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160)
            ].join(",") +
            ")"
        }
      };
    },
    initChart() {
      var mixLineBar = echarts.init(document.getElementById("chart2"));
    const  option = {
        // title: {
        //   text: "Google Trends",
        //   link: "http://www.google.com/trends/hottrends"
        // },
        tooltip: {
          show: true
        },
        series: [
          {
            name: "Google Trends",
            type: "wordCloud",
            size: ["100%", "90%"],
            textRotation: [0, 45, 90, -45],
            textPadding: 0,
            autoSize: {
              enable: true,
              minSize: 14
            },
            data: [
              {
                name: "非洲猪瘟",
                value: 10000,
                textStyle: {
                  normal: {
                    color: "black"
                  }
                }
              },
              {
                name: "违法开采",
                value: 6181,
                textStyle: this.createRandomItemStyle(),
              },
              {
                name: "违禁药品",
                value: 4386,
                textStyle: this.createRandomItemStyle()
              },
              {
                name: "黑中介",
                value: 4055,
                textStyle: this.createRandomItemStyle()
              },
              {
                name: "违法开采",
                value: 6181,
                textStyle: this.createRandomItemStyle()
              },
              {
                name: "违禁药品",
                value: 4386,
                textStyle: this.createRandomItemStyle()
              },
              {
                name: "黑中介",
                value: 4055,
                textStyle: this.createRandomItemStyle()
              },
              {
                name: "黑中介",
                value: 4055,
                textStyle: this.createRandomItemStyle()
              },
              {
                name: "违法开采",
                value: 6181,
                textStyle: this.createRandomItemStyle()
              },
              {
                name: "违禁药品",
                value: 4386,
                textStyle: this.createRandomItemStyle()
              },
              {
                name: "黑中介",
                value: 4055,
                textStyle: this.createRandomItemStyle()
              },
              {
                name: "雪崩",
                value: 5219,
                textStyle: this.createRandomItemStyle()
              },
              {
                name: "雾霾",
                value: 3847,
                textStyle: this.createRandomItemStyle()
              },
              {
                name: "暴力执法",
                value: 2038,
                textStyle: this.createRandomItemStyle()
              },
              {
                name: "车祸",
                value: 2038,
                textStyle: this.createRandomItemStyle()
              },
              {
                name: "套牌",
                value: 2038,
                textStyle: this.createRandomItemStyle()
              },
              {
                name: "超速",
                value: 2038,
                textStyle: this.createRandomItemStyle()
              }
            ]
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
// export default {
//   name: "chart2",
//   props: {},
//   data() {
//     return {};
//   },
//   methods: {
//     initChart() {
//       var mixLineBar = echarts.init(document.getElementById("chart2"));
//       const option = {
//         tooltip: {
//           trigger: "item",
//           formatter: "{a} <br/>{b} : {c} ({d}%)"
//         },
//         textStyle: {
//           color: "#fff"
//         },
//         series: [
//           {
//             name: "访问来源",
//             type: "pie",
//             radius: ["50%", "70%"],
//             data: [
//               { value: 400, name: "微信" },
//               { value: 335, name: "微博" },
//               { value: 310, name: "网页" },
//               { value: 210, name: "报刊" },
//               { value: 150, name: "客户端" },
//               { value: 80, name: "论坛" }
//             ],
//             textStyle: {
//               emphasis: {
//                 shadowBlur: 10,
//                 shadowOffsetX: 0,
//                 shadowColor: "#fff"
//               }
//             },
//             label: {
//               normal: {
//                 color: "#fff"
//                 // formatter: '{b}:{c}/{d}%'
//               }
//             }
//           }
//         ]
//       };
//       mixLineBar.setOption(option);
//       window.addEventListener("resize", function() {
//         mixLineBar.resize();
//       });
//     }
//   },
//   mounted() {
//     this.initChart();
//   }
// };
</script>

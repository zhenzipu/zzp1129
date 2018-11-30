<template>
  <div id="chartMap" style="width:700px;height:600px;"></div>
</template>
<script>
import echarts from "echarts";
import geoJson from "@/libs/530100.json";
export default {
  name: "chartMap",
  props: {},
  data() {
    return {};
  },
  methods: {
    createRandomItemStyle() {
      let a =
        "rgb(" +
        [
          Math.round(Math.random() * 160),
          Math.round(Math.random() * 160),
          Math.round(Math.random() * 160)
        ].join(",") +
        ")";
      return a;
    },
    convertData(data, geoCoordMap) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value)
          });
        }
      }
      return res;
    },
    initChart() {
      var mixLineBar = echarts.init(document.getElementById("chartMap"));
      let arr = [];
      for (let index = 0; index < 100; index++) {
        arr.push(this.createRandomItemStyle());
      }
      echarts.registerMap("kunming", geoJson);

      function randomData() {
        return Math.round(Math.random() * 1000);
      }
      var data = [
        { name: "安宁市", value: 234 },
        { name: "晋宁县", value: 555 },
        { name: "东川区", value: 275 }
      ];

      var geoCoord = {};
      geoJson.features.map(item => {
        geoCoord[item.properties.name] = item.geometry.coordinates[0][0][0];
      });
      var convertData = function(data) {
        var res = [
          { name: "盘龙区", value: 333 },
          { name: "宜良县", value: 433 },
          { name: "东川区", value: 275 }
        ];
        return res;
      };

      console.log(geoCoord);
      const option = {
        toolbox: {
          show: true,
          orient: "vertical",
          left: "right",
          top: "center",
          feature: {
            dataView: { readOnly: false }
          }
        },
        tooltip: {
          trigger: "item"
        },
        geo: {
          map: "knnming",
          label: {
            emphasis: {
              show: false
            }
          },
          roam: true,
          itemStyle: {
            normal: {
              color: "#fff",
              areaColor: "rgba(0,0,0,.1)",
              borderColor: "#fff"
            },
            emphasis: {
              areaColor: "#fff"
            }
          }
        },
        geoCoord: geoCoord,
        series: [
          {
            name: "kunming",
            type: "map",
            mapType: "kunming", // 自定义扩展图表类型
            itemStyle: {
              normal: {
                label: { show: true, fontSize: 6, color: "#fff" },
                areaColor: "rgba(0,0,0,.1)",
                borderColor:'#00d5ff',
                borderWidth:1.5
              },
              emphasis: {
                areaColor: "rgba(255,255,255,.1)",
                label: { show: true, color: "#fff" },
                itemStyle: {
                  backgroundColor: "blue",
                  areaColor: "#fff",
                  color: "green",
                  opacity: 0.2
                }
              }
            },
            markPoint: {
              symbol: "circle",
              //动态标记
              symbolSize: 12,
              itemStyle: {
                normal: {
                  shadowBlur: 2,
                  shadowColor: "rgba(37, 140, 249, 0.8)"
                }
              },
              data: [
                {
                  name: "安宁市",
                  x: 300,
                  y: 500,
                  itemStyle: {
                    normal: {
                      color: "red",
                      opacity: 0.6
                    }
                  }
                },
                {
                  name: "晋宁县",
                  x: 320,
                  y: 400,
                  itemStyle: {
                    normal: {
                      color: "green",
                      opacity: 0.6
                    }
                  }
                },
                {
                  name: "东川区",
                  x: 350,
                  y: 300,
                  itemStyle: {
                    normal: {
                      color: "yellow",
                      opacity: 0.6
                    }
                  }
                }
              ]
            }
          },
          {
            name: "Top 5",
            type: "effectScatter",
            coordinateSystem: "geo",
            data: convertData(
              data
                .sort(function(a, b) {
                  return b.value - a.value;
                })
                .slice(0, 6)
            ),
            symbolSize: 20,
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke"
            },
            hoverAnimation: true,
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: "#f4e925",
                shadowBlur: 10,
                shadowColor: "#333"
              }
            },
            zlevel: 1
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

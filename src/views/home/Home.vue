<style>
.home {
  width: 1200px;
  margin: 0 auto;
}
.text-con3,
.hot-list {
  list-style: none;
}
.text-con3 li,
.text-con1 li {
  line-height: 30px;
  color: #fff;
  border-bottom: 1px dashed #ccc;
}
.hot-list li {
  line-height: 30px;
}
.hot-list li span {
  width: 18px;
  height: 18px;
  line-height: 18px;
  text-align: center;
  color: #fff;
  font-weight: bold;
  display: inline-block;
  margin: 0 5px;
}

.footer-left{
    float: left;
    width: 300px;
    margin-left: 80px;
}
.footer-cen{
    width: 500px;
    float: left;
}
.footer-cen p{
line-height: 50px;
font-weight: bold;
font-size: 20px;
color: #00b3ff;
}
.footer-right{
    padding-right: 50px;
    float: left;
    width: 300px;
}
.footer-left p,.footer-right p{
    color: #fff;
}
.footer-right p{
    text-align: right;  
}
.footer-right p:nth-child(2){
    color: #06d6d3;
    line-height: 28px;
}
.footer-left p:nth-child(2){
    color: #06d6d3;
    line-height: 28px;
}
</style>
<template>
  <div style="width:100%;">
    <div class="home">
      <Row>
        <Col span="24">
          <Row>
            <Col span="2">
              <span style="lineHeight:40px;color:#fff;fontWeight:bold;fontSize:20px;">线索搜索</span>
            </Col>
            <Col span="18">
              <Input search size="large" style="float:left;" enter-button="搜索" placeholder="搜索线索"/>
            </Col>
            <Col span="3" offset="1">
              <a style="lineHeight:40px;">刷新</a>
            </Col>
          </Row>
        </Col>
        <Col span="24" style="marginTop:10px;">
          <Row>
            <Col span="18">
              <ButtonGroup>
                <Button type="primary">全部</Button>
                <Button type="default">危害食品安全</Button>
                <Button type="default">危害药品安全</Button>
                <Button type="default">损害自然资源</Button>
                <Button type="default">损害生态环境</Button>
                <Button type="default">违法出让国有土地使用权</Button>
                <Button type="default">损害消费者权益</Button>
              </ButtonGroup>
            </Col>
            <Col span="6">
              <ButtonGroup>
                <Button type="primary">最近一周</Button>
                <Button type="default">最近一月</Button>
                <Button type="default">最近一季度</Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row style="marginTop:10px;">
        <Col span="6">
          <Card :padding="10" :style="{background:image}">
            <p slot="title" style="color:#fff;">热点关键词</p>
            <div>
              <ul class="text-con3">
                <li v-for="(item,index) in aText1" :key="index">
                  <div>
                    <p>
                      <span style="padding:0 5px;">{{index+1}}</span>
                      {{item.title}}
                      <b style="float:right;">{{item.num}}</b>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </Card>
          <Card :style="{background:image,marginTop:'10px'}">
            <p slot="title" style="color:#fff;">情感属性</p>
            <div style="padding:0 20px;">
              <chart3></chart3>
            </div>
          </Card>
        </Col>
        <Col span="12">
          <div>
            <img style="width:100%;height:100%" src="../../assets/map.png" alt>
          </div>
        </Col>
        <Col span="6">
          <Card :style="{background:image}">
            <p slot="title" style="color:#fff;">主题词云</p>
            <div style="padding:0 20px;height:180px;">
              <p>主题词云</p>
            </div>
          </Card>
          <Card :style="{background:image,marginTop:'10px'}">
            <p slot="title" style="color:#fff;">媒体分布</p>
            <div style="padding:0 20px;">
              <chart1></chart1>
            </div>
          </Card>
        </Col>
      </Row>
      <!-- 两个图 -->
      <Row :gutter="10">
        <Col span="12" style="marginTop:10px;">
          <Card :style="{background:image}">
            <p slot="title" style="color:#fff;">热词走势</p>
            <div style="padding:0 20px;">
              <!-- <chart2></chart2> -->
              <chart6></chart6>
            </div>
          </Card>
        </Col>
        <Col span="12" style="marginTop:10px;">
          <Card :style="{background:image}">
            <p slot="title" style="color:#fff;">情感走势</p>
            <div style="padding:0 20px;">
              <!-- <chart4></chart4> -->
              <chart5></chart5>
            </div>
          </Card>
        </Col>
      </Row>
      <!-- 最后一行 -->
      <Row :gutter="10">
        <Col span="8" style="marginTop:10px;">
          <Card :style="{background:image}">
            <p slot="title" style="color:#fff;">预警信息</p>
            <a slot="extra">查看更多</a>
            <div style="padding:0 20px;">
              <ul class="text-con1">
                <li v-for="(item,index) in aText2" :key="index">
                  <div>
                    <p>
                      {{item.title}}
                      <span style="float:right;">{{item.time}}</span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </Card>
        </Col>
        <Col span="8" style="marginTop:10px;">
          <Card :style="{background:image}">
            <p slot="title" style="color:#fff;">敏感信息</p>
            <a slot="extra">查看更多</a>
            <div style="padding:0 20px;">
              <ul class="text-con1">
                <li v-for="(item,index) in aText3" :key="index">
                  <div>
                    <p>
                      {{item.title}}
                      <span style="float:right;">{{item.time}}</span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </Card>
        </Col>
        <Col span="8" style="marginTop:10px;">
          <Card :style="{background:image}">
            <p slot="title" style="color:#fff;">行政处罚书</p>
            <a slot="extra">查看更多</a>
            <div style="padding:0 20px;">
              <ul class="text-con1">
                <li v-for="(item,index) in aText4" :key="index">
                  <div>
                    <p>
                      {{item.title}}
                      <span style="float:right;">{{item.time}}</span>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </Card>
        </Col>
        <Col span="24" :style="{background:imgFot,height:'50px',marginTop:'10px'}">
        <div class="footer-left">
            <p>当前时间</p>
            <p>2018年 11月 29 日  23:32:59</p>
        </div>
        <div class="footer-cen">
            <p>Beijing Blitech Technology CO., LTD @ Copyright</p>
        </div>
        <div class="footer-right">
            <p>当前大厅</p>
            <p>昆明市人民检察院·智慧侦监分析平台</p>
        </div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
import chart1 from "./components/chart1.vue";
import chart2 from "./components/chart2.vue";
import chart3 from "./components/chart3.vue";
import chart4 from "./components/chart4.vue";
import chart5 from "./components/chart5.vue";
import chart6 from "./components/chart6.vue";
export default {
  name: "home",
  components: {
    chart1,
    chart2,
    chart3,
    chart4,
    chart5,
    chart6
  },
  data() {
    return {
    image:"url(" + require("../../assets/bg.png") + ")",
    imgFot:"url(" + require("../../assets/footer.png") + ")",
      // 文章
      aText1: [
        {
          title: "受得了副科单价了解到酸辣粉",
          num: 88
        },
        {
          title: "受得了副科级了解到酸辣粉",
          num: 88
        },
        {
          title: "受得了副科级数量单辣粉",
          num: 33
        },
        {
          title: "受得了副科了解到酸辣粉",
          num: 88
        },
        {
          title: "受得了副量单价了解到酸辣粉",
          num: 356
        },
        {
          title: "受得了副量单价了解到酸辣粉",
          num: 88
        },
        {
          title: "受得了副量单价了解到酸辣粉",
          num: 88
        }
      ],
      // 文章
      aText2: [
        {
          title: "受得了副科单价了解到酸辣粉",
          time: "2018-11-29"
        },
        {
          title: "受得了副科级了解到酸辣粉",
          time: "2018-11-29"
        },
        {
          title: "受得了副科级数量单辣粉",
          time: "2018-11-29"
        },
        {
          title: "受得了副科了解到酸辣粉",
          time: "2018-11-29"
        },
        {
          title: "受得了副量单价了解到酸辣粉",
          time: "2018-11-29"
        },
        {
          title: "受得了副量单价了解到酸辣粉",
          time: "2018-11-29"
        }
      ],
      // 文章
      aText3: [
        {
          title: "受得了副科单价了解到酸辣粉",
          time: "2018-11-29"
        },
        {
          title: "受得了副科级了解到酸辣粉",
          time: "2018-11-29"
        },
        {
          title: "受得了副科级数量单辣粉",
          time: "2018-11-29"
        },
        {
          title: "受得了副科了解到酸辣粉",
          time: "2018-11-29"
        },
        {
          title: "受得了副量单价了解到酸辣粉",
          time: "2018-11-29"
        },
        {
          title: "受得了副量单价了解到酸辣粉",
          time: "2018-11-29"
        }
      ],
      // 文章
      aText4: [
        {
          title: "受得了副科单价了解到酸辣粉",
          time: "2018-11-29"
        },
        {
          title: "受得了副科级了解到酸辣粉",
          time: "2018-11-29"
        },
        {
          title: "受得了副科级数量单辣粉",
          time: "2018-11-29"
        },
        {
          title: "受得了副科了解到酸辣粉",
          time: "2018-11-29"
        },
        {
          title: "受得了副量单价了解到酸辣粉",
          time: "2018-11-29"
        },
        {
          title: "受得了副量单价了解到酸辣粉",
          time: "2018-11-29"
        }
      ],
      // 热点list
      aHot: [
        "老师的街坊邻居",
        "老师的街坊邻居",
        "老师的街坊邻居",
        "杀戮空间发了打法",
        "老师的街坊邻居",
        "是非窝太晚日2522",
        "老师的街坊邻居",
        "外套43感受到感受到",
        "  说的房",
        "老师的街坊邻居",
        "撒地方撒的说的sd",
        "老师的街坊邻居",
        " 色任务玩日无日峰人事"
      ]
    };
  },
  mounted() {}
};
</script>

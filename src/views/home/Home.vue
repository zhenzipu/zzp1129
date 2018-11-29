<style>
.text-con,.hot-list{
    list-style: none;
}
.text-con li{
    padding: 28px;
    border-bottom: 1px solid #ccc;
}
.hot-list li{
    line-height: 30px;
}
.hot-list li span{
    width: 18px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    color: #fff;
    font-weight: bold;
    display: inline-block;
    margin: 0 5px;
}
</style>
<template>
  <div class="home">
    <Row :gutter="20">
      <Col span="18">
      <Row>
      <Input search size="large" enter-button="搜索" placeholder="搜索线索"/>
      </Row>
      <Tabs value="tab2">
          <TabPane label='信息汇总' name="tab1">
              <Row></Row>
                    <Card>
                        <p slot="title">
                        原文链接
                        </p>
                        <div>
                            <div>
                                <p style="height:38px;">
                                    <span>时间：</span>
                                    <Button type="dashed">近30天</Button>
                                    <Button type="text">近7天</Button>
                                    <Button type="text">昨天</Button>
                                    <Button type="text">今天</Button>
                                </p>
                                <p style="height:38px;">
                                    <span>情感：</span>
                                    <Button type="dashed">全部</Button>
                                    <Button type="text">正面</Button>
                                    <Button type="text">中性</Button>
                                    <Button type="text">负面</Button>
                                </p>
                                <p style="height:38px;">
                                    <span>排序：</span>
                                    <Button type="dashed">时间降序</Button>
                                    <Button type="text">时间升序</Button>
                                </p>
                                <p style="height:38px;">
                                    <span>媒体平台</span>
                                    <Button type="dashed">全部（2352）</Button>
                                    <Button type="text">微信（103）</Button>
                                    <Button type="text">微博（42）</Button>
                                    <Button type="text">网页（102）</Button>
                                    <Button type="text">报刊（55）</Button>
                                    <Button type="text">客户端（13）</Button>
                                    <Button type="text">论坛（332）</Button>
                                </p>
                            </div>
                            <div style="padding:0 20px;">
                                <ul class="text-con">
                                    <li v-for="(item,index) in aText" :key="index">
                                        <Button ghost :type="item.type==1?'success':item.type==2?'error':'info'" style="float:left;marginLeft:-50px;marginRight:10px;" size="small">{{item.type==1?'正面':item.type==2?'负面':'中性'}}</Button>
                                        <div>
                                            <p style="fontSize:16px;lineHeight:34px;">{{item.title}}</p>
                                            <p style="color:#7d7d7d">{{item.info}}</p>
                                            <p style="lineHeight:30px;"><a>相似文章{{item.num}}</a></p>
                                            <div><span style="float:left;">主题词：</span><span style="float:left;padding:0 10px;" v-for="(item_word,index_word) in item.word" :key="index_word">{{item_word}}</span><b style="float:right;">{{item.time}}</b></div>
                                        </div>
                                    </li>
                                </ul>
                                <Row type="flex" justify="center" :style="{marginTop:'10px'}">
                                    <Col>
                                    <Page :pageSize="1" :total="112" :current="1" show-total></Page>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Card>
          </TabPane>
          <TabPane label='内容分析' name="tab2">
              <Card>
                <div>
                    <div>
                        <p style="height:38px;">
                            <span>时间：</span>
                            <Button type="dashed">全部</Button>
                            <Button type="text">今天</Button>
                            <Button type="text">昨天</Button>
                            <Button type="text">近7天</Button>
                            <Button type="text">近30天</Button>
                        </p>
                        <p style="height:38px;">
                            <span>媒体平台</span>
                            <Button type="dashed">全部（2352）</Button>
                            <Button type="text">微信（103）</Button>
                            <Button type="text">微博（42）</Button>
                            <Button type="text">网页（102）</Button>
                            <Button type="text">报刊（55）</Button>
                            <Button type="text">客户端（13）</Button>
                            <Button type="text">论坛（332）</Button>
                        </p>
                    </div>
                    <Row :gutter="20">
                        <Col span="12">
                            <Card>
                                <p slot="title">
                                活跃媒体
                                </p>
                                <div style="padding:0 20px;">
                                    <chart1></chart1>
                                </div>
                            </Card>
                        </Col>
                        <Col span="12">
                            <Card>
                                <p slot="title">
                                媒体分布
                                </p>
                                <div style="padding:0 20px;">
                                    <chart2></chart2>
                                </div>
                            </Card>
                        </Col>
                        <Col span="12" style="marginTop:10px;">
                            <Card>
                                <p slot="title">
                                情感属性
                                </p>
                                <div style="padding:0 20px;">
                                    <chart3></chart3>
                                </div>
                            </Card>
                        </Col>
                        <Col span="12" style="marginTop:10px;">
                            <Card>
                                <p slot="title">
                                发布热区
                                </p>
                                <div style="padding:0 20px;">
                                    <chart4></chart4>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>
              </Card>
          </TabPane>
      </Tabs>
      </Col>
      <Col span="6">
      <Card>
        <p slot="title">
          热点关键词
        </p>
        <div style="padding:0 20px;">
            <ul class="hot-list">
                <li v-for="(item,index) in aHot" :key="index"><span :style="{background:index==0?'red':index==1?'orange':index==2?'yellow':'#4ec7fa'}">{{index}}</span>{{item}}</li>
            </ul>
        </div>
      </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
import chart1 from './components/chart1.vue';
import chart2 from './components/chart2.vue';
import chart3 from './components/chart3.vue';
import chart4 from './components/chart4.vue';
export default {
  name: "home",
  components: {
    chart1,
    chart2,
    chart3,
    chart4,
  },
  data() {
    return {
        // 文章
        aText:[
            {   
                type:1,
                title:'受得了副科级数量单价了解到酸辣粉',
                info:'杀戮空间氛围较为软件老司机，数量及辅导老师缴费基数',
                num:88,
                word:[
                    'sld','23432','sdfsd'
                ],
                time:'2018年10月09日'
            },
            {   
                type:2,
                title:'受得了副科级数量单价了解到酸辣粉',
                info:'杀戮空间氛围较为软件老司机，数量及辅导老师缴费基数',
                num:88,
                word:[
                    'sld','23432','sdfsd'
                ],
                time:'2018年10月09日'
            },
            {   
                type:3,
                title:'受得了副科级数量单价了解到酸辣粉',
                info:'杀戮空间氛围较为软件老司机，数量及辅导老师缴费基数',
                num:88,
                word:[
                    'sld','23432','sdfsd'
                ],
                time:'2018年10月09日'
            },
            {   
                type:1,
                title:'受得了副科级数量单价了解到酸辣粉',
                info:'杀戮空间氛围较为软件老司机，数量及辅导老师缴费基数',
                num:88,
                word:[
                    'sld','23432','sdfsd'
                ],
                time:'2018年10月09日'
            },
        ],
      // 热点list
      aHot: [
          '老师的街坊邻居',
          '老师的街坊邻居',
          '老师的街坊邻居',
          '杀戮空间发了打法',
          '老师的街坊邻居',
          '是非窝太晚日2522',
          '老师的街坊邻居',
          '外套43感受到感受到',
          '  说的房',
          '老师的街坊邻居',
          '撒地方撒的说的sd',
          '老师的街坊邻居',
          ' 色任务玩日无日峰人事',
      ]
    };
  },
  mounted() {}
};
</script>

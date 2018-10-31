<template>
    <div>
      <el-radio-group v-model="type" @change="showChart">
      <el-radio-button label="全年销售额按月统计"></el-radio-button>
      <el-radio-button label="全年商品服务销售额统计"></el-radio-button>
    </el-radio-group>
      <div class="total" id="myChart" ref="myChart"></div>
    </div>
</template>

<script>
import echarts from "echarts/lib/echarts";
// 引入柱状图
require("echarts/lib/chart/bar");

require("echarts/lib/chart/pie");
// 引入提示框和标题组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
require("echarts/lib/component/legend");
import axios from 'axios'
export default {
    data() {
        return {
            type: "全年销售额按月统计",
            monthDataAxisData:[],
            monthDataSeriesData:[],
            typeDataAxisData:[],
            typeDataSeriesData:[]
        };
    },
    mounted() {
        this.$nextTick(()=> {
            this.showChart();
        });
    },

    methods: {
        showChart() {
            let myChart = echarts.init(this.$refs.myChart);
                axios({
                    url:"/orders",
                    method:"get"
                }).then(res => {
                  this.monthDataAxisData = res.data.monthDataAxisData;
                  this.monthDataSeriesData =res.data.monthDataSeriesData;
                  this.typeDataAxisData = res.data.typeDataAxisData;
                  this.typeDataSeriesData = res.data.typeDataSeriesData;
                  if(this.type=="全年销售额按月统计"){
                    myChart.setOption(this.monthDataOptions,true)
                    }else{
                    myChart.setOption(this.typeDataOptions,true);
                    }

                })
        }
    },
    computed: {
        monthDataOptions() {
            return {
                title: {
                    text: "全年销售额按月统计"
                },
                tooltip: {
                    
                },
                xAxis: {
                    data: this.monthDataAxisData
                },
                yAxis: {},
                series: [
                    {
                        name: "单月销售额",
                        type: "bar",
                        data: this.monthDataSeriesData
                    }
                ]
            };
        },
        typeDataOptions() {
            return {
                title: {
                    text: "全年商品服务销售额统计",
                    subtext: "纯属虚构",
                    x: "center"
                },
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                  show:true,
                    orient: "vertical",
                    left: "right",
                    // data: this.typeDataAxisData
                    data: ["商品销售额","服务销售额"]
                },
                series: [
                    {
                        name: "来源",
                        type: "pie",
                        radius: ["30%","65%"],
                        // center: ["50%", "60%"],
                        data: [
                          {
                            value: this.typeDataSeriesData[0],name: "商品销售额"
                          },
                          {
                            value: this.typeDataSeriesData[1],name: "服务销售额"
                          }
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: "rgba(0, 0, 0, 0.5)"
                            }
                        }
                    }
                ]
            };
        }
    }
};
</script>
<style scoped>
.total {
  width: 100%;
  height: 450px;
}
</style>
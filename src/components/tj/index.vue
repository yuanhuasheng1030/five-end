<template>
    <div>
      <el-radio-group v-model="type" @change="showChart">
      <el-radio-button label="班级人数统计"></el-radio-button>
      <el-radio-button label="年龄分布统计"></el-radio-button>
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
import axios from 'axios'
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
    data() {
        return {
            type: "销售统计",
            classAxisData:[],
            classSeriesData:[],
            ageAxisData:[],
            ageSeriesData:[]
        };
    },
    mounted() {
        this.$nextTick(()=> {
            this.showChart();
        });
    },

    methods: {
        showChart() {
            console.log("chart");
            let myChart = echarts.init(this.$refs.myChart);
            
            if (this.type == "销售统计") {
                axios({
                    url:"/students/classesTotal",
                    method:"get"
                }).then(res => {
                    this.classAxisData = res.data.axisData;
                    this.classSeriesData = res.data.seriesData;
                    myChart.setOption(this.classesOptions,true);
                })
                
            }else{
                 axios({
                    url:"/students/ageTotal",
                    method:"get"
                }).then(res => {
                    this.ageAxisData = res.data.axisData;
                    this.ageSeriesData = res.data.seriesData;
                    myChart.setOption(this.ageOpitons,true);
                })
               
            }
        }
    },
    computed: {
        classesOptions() {
            return {
                title: {
                    text: "销售统计"
                },
                tooltip: {
                    
                },
                xAxis: {
                    data: this.classAxisData
                },
                yAxis: {},
                series: [
                    {
                        name: "人数",
                        type: "bar",
                        data: this.classSeriesData
                    }
                ]
            };
        },
        ageOpitons() {
            return {
                title: {
                    text: "销售统计",
                    subtext: "纯属虚构",
                    x: "center"
                },
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: "vertical",
                    left: "left",
                    data: this.ageAxisData
                },
                series: [
                    {
                        name: "访问来源",
                        type: "pie",
                        radius: "55%",
                        center: ["50%", "60%"],
                        data: this.ageSeriesData,
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
    height: 500px;
}
</style>


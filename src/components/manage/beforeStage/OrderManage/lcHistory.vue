<template>
    <div>
    
        <el-date-picker v-model="value7" type="daterange" align="right" unlink-panels range-separator="至"
            start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions2" value-format="yyyyMMdd"
            style="border-radius:17px">
        </el-date-picker>
        <el-button type="primary" round size="small" @click="search">搜索</el-button>
        <el-table :data="orderAry1" style="width: 100%" :default-sort="{prop: 'serviceTime', order: 'descending'}">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="宠主姓名">
                            <span>{{ props.row.petsKeepers.name }}</span>
                        </el-form-item>
                        <el-form-item label="宠物名">
                            <span>{{ props.row.petsKeepers.nickname }}</span>
                        </el-form-item>
                        <el-form-item label="电话">
                            <span>{{ props.row.petsKeepers.phone }}</span>
                        </el-form-item>
                        <el-form-item label="项目">
                            <span>{{ props.row.services.serviceType }}</span>
                        </el-form-item>
                        <el-form-item label="时间">
                            <span>{{ props.row.serviceTime }}</span>
                        </el-form-item>
                        <el-form-item label="完成详情">
                            <span>{{ props.row.address }}</span>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column label="宠主姓名" prop="petsKeepers.name">
            </el-table-column>
            <el-table-column label="宠物名" prop="petsKeepers.nickname">
            </el-table-column>
            <el-table-column label="电话" prop="petsKeepers.phone">
            </el-table-column>
            <el-table-column label="状态" prop="orderStatus">
            </el-table-column>
            <el-table-column label="时间" prop="serviceTime" sortable>
            </el-table-column>
            <el-table-column fixed="right" label="操作">
                <template slot-scope="scope">
                    <!-- <el-button @click="update(scope.row)" type="primary" round size="small">修改</el-button> -->
                    <el-button type="danger" round size="small" @click="del(scope)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
            :page-sizes="[5, 10, 20, 30]" :page-size="5" layout="total, sizes, prev, pager, next, jumper" :total="orderAryLength"
            :background="true">
        </el-pagination>
  
    </div>




</template>

<script>
    import axios from "axios";
    import lodash from "lodash";
    export default {

        props: {
            msg: String
        },
        data: function () {
            return {
                orderAryLength: 0,
                currentPage4: 4,
                orderAry1: [],
                orderDay: '',
                page: '',
                rows: '',
                pickerOptions2: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },

                value7: ''
            };
        },
        created: function () {
            this.show()
        },
        methods: {
            show: function (page = 1, rows = 5, orderStatus ) {
                axios({
                    method: "get",
                    url: "/lcRouter/",
                    params: {
                        page,
                        rows,
                        orderStatus,
                    }
                }).then(response => {
                    console.log(response.data, '332222');

                    let a=response.data.rows
                    a=lodash.filter(a,function(o) { return o.shops._id==location.href.split("=")[1]; })
                    console.log(a);
                    
                    this.orderAry1 = a
                    this.orderAryLength = response.data.total
                });
            },
            handleSizeChange(val) {
                // console.log(`每页 ${val} 条`);
                this.rows = val
                this.show(1, val)

            },
            handleCurrentChange(val) {
                // console.log(`当前页: ${val}`);
                this.page = val;
                this.show(val, 5)
            },
            del: function (scope) {
                let id = scope.row._id;
                this.$confirm('此操作将删除该订单, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    axios({
                        method: 'delete',
                        url: '/lcRouter/' + id,
                    }).then((response) => {
                        // this.orderAry = response.data
                        // this.orderAryLength = response.data.length

                    })
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    this.show(this.page, this.rows)
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            search: function () {
                axios({
                    method: "get",
                    url: "/lcRouter/",
                }).then(response => {
                    let ks = this.value7[0] - 0;
                    let js = this.value7[1] - 0;
                    let orderAry = response.data;
                    let newOrderAry = [];
                    for (let item of orderAry) {
                        let a = item.serviceTime.split(' ')[0]
                        let b = a.split('-').join('') - 0
                        if (ks <= b && b <= js) {
                            newOrderAry.push(item)
                        }
                    }
                    this.orderAry1 = newOrderAry
                });
            }
        },
        
    }
</script>


<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .demo-table-expand {
        font-size: 0;
    }

    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }

    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
</style>
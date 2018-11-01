<template>
  <el-tabs type="border-card">
    <el-tab-pane label="预约订单">
      <Lcnopay></Lcnopay>
    </el-tab-pane>
    <el-tab-pane label="待接收的订单">
      <Lcpay></Lcpay>
    </el-tab-pane>
    <el-tab-pane label="已完成的订单">
      <Lccomplete></Lccomplete>
    </el-tab-pane>
    <el-tab-pane label="已取消的订单">
      <Revocatory></Revocatory>
    </el-tab-pane>
    <el-tab-pane label="历史订单记录">
      <LcHistory></LcHistory>
    </el-tab-pane>
  </el-tabs>

</template>

<script>
  import axios from "axios";
  import Lcpay from "./lcpay.vue";
  import Lcnopay from "./lcnopay.vue";
  import Lccomplete from "./lccomplete.vue";
  import Revocatory from "./revocatory.vue";
  import LcHistory from "./lcHistory.vue";
  import lodash from "lodash";
  export default {

    props: {
      msg: String
    },
    data: function () {
      return {
        orderAryLength: 0,
        currentPage4: 4,
        orderAry: [],
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
    // created: function () {
    //   this.show()
    // },
    methods: {
      show: function (page = 1, rows = 5, orderStatus = "未支付") {
        axios({
          method: "get",
          url: "/lcRouter/",
          params: {
            page,
            rows,
            orderStatus
          }
        }).then(response => {
          console.log(response.data, '33');
          this.orderAry = response.data.rows
          this.orderAryLength = response.data.total
        });
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.rows = val
        this.show(1, val)

      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
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
          this.orderAry = newOrderAry
        });
      }
    },
    components: {
      Lcpay,
      Lcnopay,
      Lccomplete,
      Revocatory,
      LcHistory
    }
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
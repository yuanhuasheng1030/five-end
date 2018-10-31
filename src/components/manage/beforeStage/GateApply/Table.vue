<template>
  <el-table :data="data" style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="营业执照号">
            <span>{{ props.row.lisenceNum }}</span>
          </el-form-item>
          <el-form-item label="营业执照照片">
            <span>{{ props.row.lisenceImg }}</span>
          </el-form-item>
          <el-form-item label="营业员人数">
            <span>{{props.row.salesmen.length}}</span>
          </el-form-item>
          <el-form-item label="法人代表">
            <span>{{ props.row.legalPerson }}</span>
          </el-form-item>
          <el-form-item label="法人电话">
            <span>{{ props.row.phone }}</span>
          </el-form-item>
          <el-form-item label="法人图片">
            <span>{{ props.row.legalPersonImg }}</span>
          </el-form-item>
          <el-form-item label="VIP等级">
            <span>{{ props.row.VIPlevel }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column label="编号" prop="_id">
    </el-table-column>
    <el-table-column label="名称" prop="name">
    </el-table-column>
    <el-table-column label="状态" prop="status">
    </el-table-column>
    <el-table-column label="地址" prop="addr">
    </el-table-column>
    <el-table-column fixed="right" label="操作">
      <template slot-scope="scope">
        <el-button @click="rungoods(scope.row)" type="success" round size="small">商店管理</el-button>

      </template>
    </el-table-column>
  </el-table>
</template>

<style>
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

<script>
import axios from "axios";
import { createNamespacedHelpers } from 'vuex'
const { mapActions,mapState,mapMutations } = createNamespacedHelpers('cdw')
export default {
  data() {
    return {
      data: []
    };
  },
  methods: {
    ...mapMutations(['setShopName']),
    message: function(item) {
      console.log(item);
      return 123;
    },
    rungoods: function(item) {


      console.log(221, item);
      this.$router.push("/beforeStage/tradeManage?shopsId=" + item._id);
      this.setShopName(item.name);
    }
  },
  created() {
    let id = location.href.split("=")[1];
    axios({
      method: "get",
      url: "/trademanage/table/",
      params: {
        id
      }
    }).then(response => {
      console.log(32, response.data);
      this.data = response.data;
    });
  }
};
</script>
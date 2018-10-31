<template>
<div>
  <el-table
    :data="nopassShops"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="店铺名称：">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="店铺地址：">
            <span>{{ props.row.addr }}</span>
          </el-form-item>
          <el-form-item label="店铺电话：">
            <span>{{ props.row.phone }}</span>
          </el-form-item>
          <el-form-item label="佣金比例：">
            <span>{{ props.row.commissionRate }}</span>
          </el-form-item>
          <el-form-item label="VIP等级：">
            <span>{{ props.row.VIPlevel }}</span>
          </el-form-item>
          <el-form-item label="经纬度：">
            <span>{{ props.row.location }}</span>
          </el-form-item>
          <el-form-item label="店铺法人：">
            <span>{{ props.row.legalPerson }}</span>
          </el-form-item>
          <el-form-item label="营业执照号码：">
            <span>{{ props.row.lisenceNum }}</span>
          </el-form-item>
          <el-form-item label="营业执照图片：">
            <img :src="/images/+props.row.lisenceImg" alt="" class="img">
          </el-form-item>
          <el-form-item label="法人图片：">
            <img :src="/images/+props.row.legalPersonImg" alt="" class="img">

          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="店铺名称"
      prop="name">
    </el-table-column>
    <el-table-column
      label="店铺地址"
      prop="addr">
    </el-table-column>
    <el-table-column
      label="法人代表"
      prop="legalPerson">
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
       <el-button
          size="mini"
          type="danger"
          @click="noPass(scope.$index, scope.row._id)">审核不通过</el-button>
      </template>
    </el-table-column>
  </el-table>
  <NoCheckpage :show="show"></NoCheckpage>
  </div>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from 'vuex'
const { mapState,mapMutations } = createNamespacedHelpers('zyl')
import NoCheckpage from "../UserManage/NoCheckpage.vue";
// import {mapMutations} from 'vuex';
export default {
  // props: ["student","show"],
  data: function() {
    return {
      nopassShops: []
    };
  },
  created() {
    this.show();
  },
  methods: {
    show: function(page=1,rows=3) {
      axios({
        method: "post",
        url: "/backStores/nopass",
        data:{page,rows}
      }).then(response => {
        console.log(response.data);
        // this.setStudent(response.data);
        // this.$emit("set",response.data)
        this.nopassShops=response.data.rows;
        this.setNoCheckPagnation(response.data);
        // this.shops = response.data;
        // console.log(this.shops,1111)
      });
    },
    ...mapMutations(["setNoCheckPagnation"]),
    
  },
  
  components: {NoCheckpage},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  .img{
    width: 100px;
    height: 120px;
  }
</style>
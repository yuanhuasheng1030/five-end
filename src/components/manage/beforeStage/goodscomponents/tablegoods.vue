<template>
  <el-table :data="goods.ary" style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="规格型号">
            <span>{{ props.row.guigeSize }}</span>
          </el-form-item>
          <el-form-item label="库存">
            <span>{{ props.row.inventory }}</span>
          </el-form-item>
          <el-form-item label="单位">
            <span>{{ props.row.type }}</span>
          </el-form-item>
          <el-form-item label="打折">
            <span>{{ props.row.sale }}</span>
          </el-form-item>
          <el-form-item label="供货商">
            <span>{{ props.row.suppliers }}</span>
          </el-form-item>
          <el-form-item label="产品类别">
            <span>{{ props.row.productCategory }}</span>
          </el-form-item>
          <el-form-item label="进货价">
            <span>{{ props.row.buy }}</span>
          </el-form-item>
          <el-form-item label="商品照片">
            <span>
              <img style="width:80px;height:60px" :src="/upload/+props.row.img" />
            </span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>

    <el-table-column label="条形码" prop="size">
    </el-table-column>
    <el-table-column label="商品名称" prop="name">
    </el-table-column>
    <el-table-column label="售价" prop="selling">
    </el-table-column>
    <el-table-column label="会员价" prop="vipSelling">
    </el-table-column>
    <el-table-column label="库存" prop="inventory">
    </el-table-column>
    <el-table-column fixed="right" label="操作">
      <template slot-scope="scope">
        <el-button type="primary" @click="rungoods(scope.$index)" icon="el-icon-edit" circle></el-button>
        <el-button type="danger" @click="deletegoods(scope.$index)" icon="el-icon-delete" circle></el-button>
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
const { mapActions,mapState,mapMutations } = createNamespacedHelpers('yl')
export default {
  data() {
    return {
      id: "",
      data: [],
     
    };
  },
  computed: {
    ...mapState(["goods"])
  },
  methods: {
    ...mapActions(["setGoods","setGood"]),
    deletegoods:function(index){
        axios({
      url: "/trademanage/delete",
      method: "get",
      params: {
          index,id:this.id
        }
    }).then(response => {
      this.setGoods({id:this.id});
    });
    },
    rungoods: function(item) {
      this.$emit("update:open",true);
      this.setGood({id:this.id,index:item})
    }
  },
  created() {
let id = location.href.split("=")[1];
  this.id=id;
    
    this.setGoods({id});
  }
};
</script>
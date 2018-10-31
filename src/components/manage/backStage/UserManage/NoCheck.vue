<template>
<div>
  <el-table
    :data="noCheckUsers"
    border
    style="width: 100%">
    <el-table-column
      prop="username"
      label="用户名">
    </el-table-column>
   <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="pass(scope.$index, scope.row._id)">审核通过</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="noPass(scope.$index, scope.row._id)">审核不通过</el-button>
      </template>
    </el-table-column>
  </el-table>
  <NoCheckPage :show="show"></NoCheckpage>
  </div>
</template>
<script>
import axios from "axios";
import { createNamespacedHelpers } from 'vuex'
const { mapState,mapMutations } = createNamespacedHelpers('zyl')
import NoCheckPage from "./NoCheckpage.vue";
// import {mapMutations} from 'vuex';
export default {
  // props: ["student","show"],
  data: function() {
    return {
noCheckUsers: []
    };
  },
  created() {
    this.show();
  },
  methods: {
    show: function(page=1,rows=3) {
      axios({
        method: "post",
        url: "/backUsers/noCheck",
        data:{page,rows}
      }).then(response => {
        console.log(response.data);
        // this.setStudent(response.data);
        // this.$emit("set",response.data)
        this.noCheckUsers=response.data.rows;
        this.setNoCheckPagnation(response.data);
        // this.shops = response.data;
        // console.log(this.shops,1111)
      });
    },
    ...mapMutations(["setNoCheckPagnation"]),
    pass(index,id){
console.log(index,id)
     axios({
        method: "post",
        url: "/backUsers/pass",
        data:{id}
      }).then(response => {
        console.log(response.data);
        this.show();
        // this.setStudent(response.data);
        // this.$emit("set",response.data)
        // this.shops = response.data;
        // console.log(this.shops,1111)
      });
    },
        noPass(index,id){
console.log(index,id)
     axios({
        method: "post",
        url: "/backUsers/nopass",
        data:{id}
      }).then(response => {
        console.log(response.data);
        this.show();
        // this.setStudent(response.data);
        // this.$emit("set",response.data)
        // this.shops = response.data;
        // console.log(this.shops,1111)
      });
    }
  },
  components: {NoCheckPage},
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

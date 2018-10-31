<template>
<div>
  <el-table
    :data="Checknopass"
    border
    style="width: 100%">
    <el-table-column
      prop="username"
      label="用户名">
    </el-table-column>
    
   <el-table-column label="状态">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
        >审核未通过</el-button>
      </template>
    </el-table-column>
  </el-table>
  <Page :show="show"></page>
  </div>
</template>
<script>
import axios from "axios";
import { mapState } from "vuex";
import { mapMutations } from "vuex";
import Page from "../GateManage/page.vue";
// import {mapMutations} from 'vuex';
export default {
  // props: ["student","show"],
  data: function() {
    return {
Checknopass: []
    };
  },
  created() {
    this.show();
  },
  methods: {
    show: function(page=1,rows=3) {
      axios({
        method: "post",
        url: "/backUsers/Checknopass",
        data:{page,rows}
      }).then(response => {
        console.log(response.data);
        this.Checknopass=response.data.rows;
        this.setPagnation(response.data);
      });
    },
    ...mapMutations(["setPagnation"]),
  },
  
  components: {Page},
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
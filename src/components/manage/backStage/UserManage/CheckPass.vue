<template>

<div>
  <div class="as">
     <Addstudents :show="show"></Addstudents>
  <Search :show="show"></Search>
  </div>

  <el-table
    :data="gateUsers"
    border
    style="width: 100%">
    <el-table-column
      prop="username"
      label="用户名">
    </el-table-column>
    <el-table-column
      :formatter="identity"
      label="管理员身份">
    </el-table-column>
     <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">修改</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="dele(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <Checkpasspage :show="show"></Checkpasspage>
  <Updatestudents :show="show" ></Updatestudents>
  </div>
</template>
<script>
import axios from "axios";
import Checkpasspage from "./Checkpasspage.vue";
import Updatestudents from "./Updatestudents.vue";
import Addstudents from "./Addstudents.vue";
import Search from "./Search.vue";
import { createNamespacedHelpers } from 'vuex'
const { mapState,mapMutations } = createNamespacedHelpers('zyl')
export default {
  data() {
    return {};
  },
  created: function() {
    this.show();
  },

  methods: {
    identity(row) {
      if (row.privilege == "1") {
        return "平台管理员";
      } else {
        return "门店管理员";
      }
    },
    show: function(page = 1, rows = 3,type,value) {
      axios({
        method: "post",
        url: "/backUsers",
        data: { page, rows,type,value }
      }).then(response => {
        console.log(response.data.rows, 12121212);
        // this.setStudent(response.data);
        // this.$emit("set",response.data)
        this.setUsers(response.data.rows);
        this.setCheckpassPagnation(response.data);
        // this.shops = response.data;
        // console.log(this.shops,1111)
      });
    },
    handleEdit: function(index, row) {
      console.log(row, 88888888);
      this.setUser(row);
      this.setdialogFormVisible(true);
    },
    ...mapMutations(["setUsers","setUser", "setdialogFormVisible", "setCheckpassPagnation"]),
    dele: function(index, row) {
      let id = row._id;
      axios({
        method: "delete",
        url: "/backUsers/" + id,
        data: {
          id
        }
      }).then(response => {
        this.show();
      });
    }
  },

  computed: {
    ...mapState(["gateUsers"])
    // shenfen: function() {
    //   console.log("formatter");

    // }
  },
  components: {Checkpasspage,Updatestudents,Addstudents,Search}, 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.as{
  display: flex
}
</style>
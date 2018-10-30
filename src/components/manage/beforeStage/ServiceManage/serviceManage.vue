<template>
<div>
  <div class="searchAndAdd">
    <Search class="search"></Search>
    <Add></Add>
  </div>
  <Update></Update>
  <el-table
    :data="services"
    >
    <el-table-column
      label="类别"
      width="100">
      <template slot-scope="scope">
        <span>{{ scope.row.serviceType }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="名称"
      width="100">
      <template slot-scope="scope">
        <span>{{ scope.row.name }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="售价"
      width="100">
      <template slot-scope="scope">
        <span>{{ scope.row.basePrice }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="会员价"
      width="100">
      <template slot-scope="scope">
        <span>{{ scope.row.VIPprice }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="可预约时间"
      width="200">
      <template slot-scope="scope">
        <span>{{ scope.row.schedule }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <Page></Page>
</div>
</template>

<script>
import Search from "./Search.vue";
import Page from "./Page.vue";
import Add from "./Add.vue";
import Update from "./Update.vue";
import { mapState, mapActions, mapMutations } from "vuex";
import axios from 'axios';
export default {
  data: function() {
    return {
    };
  },
  components: { Search, Page, Add, Update },
  created() {
    this.setServices();
  },
  computed: {
    ...mapState(["services", "pagination"])
  },
  methods: {
    ...mapActions(["setServices","setService","updateService"]),
    ...mapMutations(["setDialogUpdateVisible"]),
    handleDelete(index, row) {
      this.id=row._id;
      axios.delete("/services/" + row._id, {}).then(response => {
        this.setServices();
      });
    },
    handleEdit(index, row) {
      this.setService(row._id);
      this.setDialogUpdateVisible(true);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
.searchAndAdd {
  display: flex;
  margin-bottom: 30px;
}
.search {
  width: 400px;
  margin-right: 30px;
}
</style>

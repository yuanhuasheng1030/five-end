<template>
  <div>
      <el-input placeholder="请输入内容" v-model="input" class="inputBox">
        <el-select v-model="select" slot="prepend" placeholder="请选择" class="selectBox">
            <el-option label="客户姓名" value="name"></el-option>
            <el-option label="客户昵称" value="nickname"></el-option>
            <el-option label="客户电话" value="phone"></el-option>
            <el-option label="会员卡" value="VIPcard"></el-option>
            <el-option label="区 域" value="location"></el-option>
            <el-option label="地 址" value="addr"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search" @click="searchBtn()"></el-button>
    </el-input>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("clf");
import axios from "axios";
export default {
  data: function() {
    return {
      input: "",
      select: ""
    };
  },
  methods: {
    searchBtn: function() {
      this.setPetsKeepers({
        type: this.select,
        value: this.input,
        page: 1,
        rows: 3
      });
    },
    ...mapActions(["setPetsKeepers"])
  },
  comments: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inputBox {
  width: 500px;
}
.selectBox {
  width: 120px;
}
</style>

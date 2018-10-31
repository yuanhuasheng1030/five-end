<template>
  <div>
      <el-input placeholder="请输入内容" v-model="input" class="inputBox">
        <el-select v-model="select" slot="prepend" placeholder="请选择" class="selectBox">
            <el-option label="供应商姓名" value="name"></el-option>
            <el-option label="供应商电话" value="phone"></el-option>
            <el-option label="供应商地址" value="addr"></el-option>
            <el-option label="审核情况" value="isChecked"></el-option>
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
    searchBtn() {
      console.log(222);
      console.log(this.select);
      console.log(this.input);
      this.setSuppliers({
        type: this.select,
        value: this.input,
        page: 1,
        rows: 3
      });
    },
    ...mapActions(["setSuppliers"])
  },
  components: {}
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

<template>
<div  style="margin-top: 15px;">
  <el-input placeholder="0代表门店管理员·1代表平台管理员" v-model="search.value" class="input-with-select">
    <el-select class="sele" v-model="search.type" slot="prepend" placeholder="请选择">
      <el-option label="用户名" value="username"></el-option>
      <el-option label="管理者类别(0和1表示)" value="privilege"></el-option>
    </el-select>
    <el-button @click="greet" slot="append" icon="el-icon-search"></el-button>
  </el-input>
</div>
</template>
<script>
import axios from "axios";
export default {
  props: ["show"],
  data: function() {
    return {
      search: {
        type: "username",
        value: ""
      }
    };
  },
  methods: {
    greet: function() {   
       let   type= this.search.type;
       let  value =this.search.value; 
       console.log(type,value,876876)
       this.show(1,100,type,value)
 
    }
  },
  components: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sele{
    width: 200px;
}
.input-with-select{
  width: 600PX;
}
</style>
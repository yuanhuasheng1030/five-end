<template>
<div>
<el-dialog title="修改" :visible="dialogFormVisible" @update:visible="setdialogFormVisible($event)">
  <el-form  v-model="form">
    <el-form-item label="用户名" >
      <el-input v-model="gateUser.username" autocomplete="off"></el-input>
    </el-form-item>
   <el-form-item label="密码" >
      <el-input v-model="gateUser.password" autocomplete="off"></el-input>
    </el-form-item>
     <el-radio-group v-model="gateUser.privilege">
    <el-radio label="1">平台管理员</el-radio>
    <el-radio label="0">门店管理员 </el-radio>
  </el-radio-group>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="quxiao">取 消</el-button>
    <el-button type="primary"  @click="quxiao(),greet()">确 定</el-button>
  </div>
</el-dialog>
</div>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from 'vuex'
const { mapState,mapMutations } = createNamespacedHelpers('zyl')
export default {
  props: ["show"],

  data() {
    return {};
  },
  computed: {
    ...mapState(["gateUser", "dialogFormVisible"])
  },
  methods: {
    greet: function() {
      console.log(this.gateUser.privilege,"shenfen");
      axios({
        method: "post",
        url: "/backUsers/confirm",
        data: {
          id:this.gateUser._id,
          username: this.gateUser.username,
          password: this.gateUser.password,
          privilege:this.gateUser.privilege
        }
      }).then(() => {
        // console.log(response.data);
        this.show();
      });
    },
    quxiao: function() {
      this.setdialogFormVisible(false);
    },
    ...mapMutations(["setdialogFormVisible"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
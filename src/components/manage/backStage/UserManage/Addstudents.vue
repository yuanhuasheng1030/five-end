<template>
<div >
    <el-button type="text" @click="dialogFormVisible = true" class="btn">新增</el-button>
<el-dialog  title="新增" :visible.sync="dialogFormVisible">
  <el-form  v-model="form">
    <el-form-item label="用户名" >
      <el-input v-model="user.username" autocomplete="off"></el-input>
    </el-form-item>
   <el-form-item label="密码" >
      <el-input v-model="user.password" autocomplete="off"></el-input>
    </el-form-item>
     <el-radio-group v-model="user.privilege">
    <el-radio label="1">平台管理员</el-radio>
    <el-radio label="0">门店管理员</el-radio>
  </el-radio-group>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary"  @click="dialogFormVisible = false,greet()">确 定</el-button>
  </div>
</el-dialog>

</div>
</template>

<script>
import axios from "axios";
export default {
    props: ["show"],
  data() {
    return {
      dialogFormVisible: false,    
      user: {
        username: "",
        password: "",
        privilege: ""
      }
    };
  },
  methods: {
    greet: function() {
      axios({
        method: "post",
        url: "/backUsers/add",
        data: {
          username: this.user.username,
          password: this.user.password,
          privilege: this.user.privilege
        }
      }).then(() => {
        // console.log(response.data);
        this.show();
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .btn{
    width: 100px;
    height: 60px;
  }
</style>
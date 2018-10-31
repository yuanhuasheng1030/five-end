<template>
  <div>
    <el-dialog title="添加店铺" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="店铺名称:" :label-width="formLabelWidth">
          <el-input v-model="name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="店铺地址:" :label-width="formLabelWidth">
          <el-input v-model="addr" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="营业执照号码:" :label-width="formLabelWidth">
          <el-input v-model="lisenceNum" autocomplete="off"></el-input>
        </el-form-item>
        <!-- <el-form-item label="性别" :label-width="formLabelWidth">
          <el-select v-model="gender" placeholder="请选择">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>

        </el-form-item> -->
        <el-form-item label="营业执照图片:" :label-width="formLabelWidth">
          <el-upload class="avatar-uploader" action="/students/upload" :show-file-list="false" :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="btn">确 定</el-button>
      </div>
    </el-dialog>
  </div>

</template>

<script>
import InputElement from "./InputElement";
import { mapActions } from "vuex";
export default {
  props: {
    msg: String
  },
  data: function() {
    return {
      imageUrl: "",
      formLabelWidth: "120px",
      dialogFormVisible: true,
      name: "",
      addr: "",
      location: "",
      legalPerson: "",
      phone: "",
      lisenceNum: ""
    };
  },
  methods: {
    ...mapActions(["addShops"]),
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      console.log("1212", file);
      this.img = file.response;
    },
    beforeAvatarUpload(file) {
      // console.log('111',file);

      const isJPG = file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    btn() {
      (this.dialogFormVisible = false),
        this.addShops({
          name: this.name,
          age: this.addr,
          gender: this.lisenceNum,
          img: this.imageUrl
        });
    }
  },
  components: {
    InputElement
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

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
  border: 1px solid black;
}
input:hover {
  color: red;
  cursor: pointer;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
<template>
  <div>

    <el-container>
      <el-header>添加店铺</el-header>
      <el-main>
        <el-form :model="form" style="width:500px;margin:auto" :rules="rules" ref="form">
          <el-form-item label="店铺名称:" :label-width="formLabelWidth" prop="name">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="店铺地址:" :label-width="formLabelWidth" prop="addr">
            <el-input v-model="form.addr" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="店主（法人）:" :label-width="formLabelWidth" prop="legalPerson">
            <el-input v-model="form.legalPerson" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="联系电话:" :label-width="formLabelWidth" prop="phone">
            <el-input v-model="form.phone" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="佣金比例:" :label-width="formLabelWidth">
            <el-input v-model="form.commissionRate" autocomplete="off" :disabled="true" value="0.2"></el-input>
          </el-form-item>
          <el-form-item label="营业执照号码:" :label-width="formLabelWidth" prop="lisenceNum">
            <el-input v-model="form.lisenceNum" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="营业执照图片:" :label-width="formLabelWidth" prop="imageUrl">
            <el-upload class="avatar-uploader" action="/lcRouter/upload" :show-file-list="false" :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="法人图片:" :label-width="formLabelWidth" prop="frImageUrl">
            <el-upload class="avatar-uploader" action="/lcRouter/upload" :show-file-list="false" :on-success="handleFrSuccess"
              :before-upload="beforeFrUpload">
              <img v-if="form.frImageUrl" :src="form.frImageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="店铺图片:" :label-width="formLabelWidth">
            <el-upload action="/lcRouter/upload" list-type="picture-card" :on-preview="handlePictureCardPreview"
              :on-success="handleDpSuccess" :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </el-form-item>
        </el-form>
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="btn('form')">确 定</el-button>
      </el-main>
    </el-container>
  </div>

</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";
export default {
  props: {
    msg: String
  },
  data: function() {
    var validateImageUrl = (rule, value, callback) => {
      if (this.form.imageUrl === "") {
        callback(new Error("请上传图片"));
      } else {
        if (this.form.imageUrl !== "") {
          this.$refs.form.validateField("frImageUrl");
        }
        callback();
      }
    };
    return {
      dialogImageUrl: "",
      dialogImageUrlAry: [],
      dialogVisible: false,
      formLabelWidth: "120px",
      dialogFormVisible: true,
      img: "",
      // imageUrl: "",
      // frImageUrl: "",
      frImg: "",
      form: {
        imageUrl: "",
        frImageUrl: "",
        name: "",
        addr: "",
        location: "",
        legalPerson: "",
        phone: "",
        lisenceNum: "",
        commissionRate: "0.2"
      },
      status: 0,
      rules: {
        name: [
          {
            required: true,
            message: "请输入店铺名称",
            trigger: "blur"
          }
        ],
        addr: [
          {
            required: true,
            message: "请输入店铺地址",
            trigger: "blur"
          }
        ],
        legalPerson: [
          {
            required: true,
            message: "请输入店铺法人",
            trigger: "blur"
          }
        ],
        phone: [
          {
            required: true,
            message: "请输入联系电话",
            trigger: "blur"
          },
          {
            pattern: /^1\d{10}$/,
            message: "手机号格式不正确"
          }
        ],
        lisenceNum: [
          {
            required: true,
            message: "请输入营业执照号码",
            trigger: "blur"
          }
        ],
        imageUrl: [
          {
            required: true,
            message: "请上传营业执照图片",
            trigger: "blur"
          },
          {
            validator: validateImageUrl
          }
        ],
        frImageUrl: [
          {
            required: true,
            message: "请上传法人图片",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    // ...mapActions(["addShops"]),
    handleAvatarSuccess(res, file) {
      this.form.imageUrl = URL.createObjectURL(file.raw);
      // console.log("1212", this.imageUrl, file.response);
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
    handleFrSuccess(res, file) {
      this.form.frImageUrl = URL.createObjectURL(file.raw);
      // console.log("1212", file);
      this.frImg = file.response;
    },
    beforeFrUpload(file) {
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
    open() {
      this.$alert("注册成功，欢迎加入宠物帮！", "欢迎", {
        confirmButtonText: "确定"
      });
    },

    btn(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios({
            method: "post",
            url: "/lcRouter/",
            data: {
              name: this.form.name,
              addr: this.form.addr,
              legalPerson: this.form.legalPerson,
              phone: this.form.phone,
              lisenceNum: this.form.lisenceNum,
              lisenceImg: this.img,
              legalPersonImg: this.frImg,
              shopsAry: this.dialogImageUrlAry,
              status: this.status,
              commissionRate: this.form.commissionRate
            }
          }).then(response => {
            this.open();
            this.$router.push("/beforeStage");
          });
        }
      });
    },
    handleRemove(file, fileList) {
      // console.log(file, fileList);
      let index = this.dialogImageUrlAry.indexOf(file.response);
      // console.log(index,'45');
      this.dialogImageUrlAry.splice(index, 1);
      // console.log(this.dialogImageUrlAry);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDpSuccess(res, file) {
      // this.frImageUrl = URL.createObjectURL(file.raw);
      // console.log("1212", file);
      // console.log("11",file.response);

      this.dialogImageUrlAry.push(file.response);
      //  console.log("22", this.dialogImageUrlAry);
    }
  },
  components: {}
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
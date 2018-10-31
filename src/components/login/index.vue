
<template>
    <div>
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="50px" class="demo-ruleForm">
            <el-form-item class="item" label="帐号" prop="phone">
                <el-input class="input" type="text" placeholder="请输入11位手机号码" v-model="ruleForm2.phone" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item class="item" label="密码" prop="password">
                <el-input  class="input"   type="password" placeholder="请输入您的密码" v-model="ruleForm2.password" autocomplete="off"></el-input>
            </el-form-item>
    
            <el-form-item class="buttom">
                <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
                <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>

              <div class="footer">
                  <a></a>
                  <a @click="dialogTableVisible = true">
                    <el-button type="text">忘记密码?</el-button>
                  </a>
            </div>
        </el-form>
    </div>
</template>

<script>
import axios from 'axios';
  export default {
    data() {
      var validatePhone = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入11位手机号码'));
        } else {
          callback();
        }
      };
   
      var validatePassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入您的密码'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          phone: '',
          password: '',
         
        },
        rules2: {
          phone: [
            { validator: validatePhone, trigger: 'blur' }
          ],
          checkPassword: [
            { validator: validatePassword, trigger: 'blur' }
          ],
         
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
              // console.log(this.ruleForm2.phone,this.ruleForm2.password); //得到用户输入的账户和密码
                axios({
                    method: "post",
                    url: "/login/lg",
                    data: {
                        phone:this.ruleForm2.phone ,
                        pwd: this.ruleForm2.password,
                    },
                }).then((response) => {
                    // console.log(response.data.status)
                    if(response.data.status == 0){
                      // console.log("平台管理员登录成功")
                       this.$router.push("backStage");    
                  }else if(response.data.status == 1){
                        // console.log("商户登录成功")
                        console.log('====================================');
                        console.log(123,response.data._id);
                        console.log('====================================');
                          this.$router.push("beforeStage?id="+response.data._id);  
                  }else{
                   this.$notify({
                          title: '登录失败',
                          message: '请确认您的帐户或密码是否正确',
                    });  
                  }

                });

          } else {
            // console.log("失败")
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      forgotPwd () { //忘记密码事件
        console.log("测试忘记密码事件");
        this.showstatus.value = true;
        
      }
    },
    components:{
    }
  }
</script>

<style scoped>
label{
    /* background: red; */
    text-align: right;
    margin-right: -30px;
}
.buttom{
    /* outline: 1px solid black; */
    margin-top: 50px;
    display: flex;
}
.item{
     /* outline: 1px solid black; */
     margin-top: 30px;
}
.input{
    /* outline: 1px solid red; */
    border-radius: 30px;
}
.footer{
    /* outline: 1px solid yellow; */
    height: 30px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
}
.footer a{
    /* outline: 1px solid red; */
    display: inline-block;
    width: 100px;
    text-decoration: none;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
}

</style>


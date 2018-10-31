<template>
    <div class="RgRoot">
      <img src="../../assets/logo_02.png" class="rgImg">
        <h1 class="rgTitle">宠物邦管理系统</h1>
            <div class="rgHead">
                <el-tabs class="tabs" v-model="activeName" @tab-click="handleClick">
                      
                      <el-tab-pane  label="快速登录" value="login">
                        <Login></Login>
                      </el-tab-pane>
                
                      <el-tab-pane label="快速注册" value="register">
                          <el-form  :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                          
                          <el-form-item  class="rgFormItem" label="手机号码"  prop="phone">
                              <el-input class="rgInPut" placeholder="请输入手机号" type="text" v-model="ruleForm2.phone" autocomplete="off"></el-input>
                          </el-form-item>


                          <el-form-item  class="rgFormItem" label="密  码" prop="pass">
                              <el-input class="rgInPut" placeholder="6-20位数字，字母和下划线组成" type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
                          </el-form-item>

                          <el-form-item  class="rgFormItem" label="确认密码" prop="checkPass">
                              <el-input class="rgInPut" placeholder="请再次输入密码" type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
                          </el-form-item>

                        
                          <el-form-item  label="验证码" prop="code">
                              <el-input class="rgCode" placeholder="请输入短信验证码" type="text" v-model="ruleForm2.code" autocomplete="off"></el-input>
                              <el-button class="rgCodeButton" size="medium">获取验证码</el-button>
                          </el-form-item>

                            <el-form-item  class="rgFormItem" label="用户名" prop="username">
                              <el-input class="rgInPut" placeholder="请输入您的名字" type="text" v-model="ruleForm2.username" autocomplete="off"></el-input>
                          </el-form-item>

                          <el-form-item class="rgFormItem" >
                              <el-button type="primary" class="rgbtn" @click="submitForm('ruleForm2')">注册</el-button>
                              <el-button class="rgReset" @click="resetForm('ruleForm2')">重置</el-button>
                          </el-form-item>
                      
                     
                          </el-form>
                       </el-tab-pane>
                </el-tabs>
            </div>
      </div>

</template>

<script>
import axios from 'axios';
import Login from '../login/index.vue'
export default {
   data() {
            //手机号
      let checkPhone = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('手机号码不能为空'));
        }else{
            // console.log(value);//得到用户输入的手机号码
            let rg= /^1[3,4,5,7,8,9]\d{9}$/;
            if(rg.test(value)){
              axios({ 
                      method: "get",
                      url: "/reg/rg",
                       params: { phone: value }
              }).then((response) => {
                    console.log(response.data)
                     if (response.data.status == 1) {
                      callback("该号码已经注册！")
                    } else (
                      callback()
                    )
              })
             
            }else{
               return callback(new Error('手机号码格式不正确'));
              
            }
        }
      };
       //密码
      let validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入正确的密码'));
        } else {
          let rg= /^\w{6,20}$/;
          if(rg.test(value)){
            callback()
          }else{
            callback(new Error('密码输入不正确'));
          }
        }
      };

      //确认密码
      let validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };

       //验证码
      let checkCode = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入四位数字验证码'));
        }else{
           let rg= /^\d{4}$/;
           if(rg.test(value)){
              return callback();
           }else{
               return callback(new Error('验证码错误'));
           }
        }
      };

       let checkUsername = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }else{
          return callback();
        }
      };

      return {
        value:'login',
        activeValue: 'login', //默认选中

         ruleForm2: {
          pass: '',
          checkPass: '',
          phone: '',
          code:''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          phone: [
            { validator: checkPhone, trigger: 'blur' }
          ],
          code:[
            { validator:checkCode,trigger: 'blur'}
          ],
          username:[
            { validator:checkUsername,trigger: 'blur'}
          ]
        }
      };
},
      methods:{
          submitForm(formName) {
          this.$refs[formName].validate((valid) => {
                if (valid) {
                    // console.log(this.ruleForm2.username)
                    axios({
                                method:"post",
                                url:"/reg/put",
                                data:{
                                    phone:this.ruleForm2.phone,
                                    password:this.ruleForm2.pass,
                                    username:this.ruleForm2.username
                                }
                                }).then((response) =>{
                                console.log("测试注册成功");
                                  this.$notify({
                                    title: '注册成功',
                                    message: '恭喜您，注册成功，现在可以去登录啦！',
                                    type: 'success'
                                  });  
                    })
                } else {
                    // console.log('登录失败');
                    return false;
                }
            });
          },
          resetForm(formName) {
            this.$refs[formName].resetFields();
          }
    },
    components:{
      Login
    }
}
</script>


<style scoped>
.RgRoot{
  width: 100%;
  height: 100%;
  background: #ffeb77;
  margin-top: -30px;
  display: flex;
}
.rgImg{
  width: 300px;
  height: 280px;
  margin-top: 200px;
  margin-left: 150px;
}
 .rgTitle{ /*管理系统标题*/
    /* margin: 80px auto 50px auto; */
    text-align: center;
    color: #fff;
    font-size: 50px;
    font-weight: bold;
    text-shadow: 0px 1px 1px #555;
    margin-top: 100px;
     text-align: center;
       

 }
 .rgHead{ /*登录注册 整体部分*/
     /* outline: 1px solid black; */
     width: 400px;
     height: auto;
     margin: auto;
 }
 .rgHead>div{
     /* background: red; */
     width: 100%;
     height: 100%;
     display: flex;
     flex-wrap: wrap;
     justify-content: center;
 }
  /*表格内容区域*/
 .rgHead>div>div>div{
     /* background: gray; */
    display: flex;
    justify-content:center;
    color:#333;
    height: 100%;
    margin: auto;
 }
 .rgFormItem{
   /* background: red; */
   display: flex;
   justify-content: space-between
 }
  .rgInPut{ /*inoput 输入框*/
   /* outline: 1px solid black; */
   margin-left: -100px;
   width: 250px;
  
  }
  .rgCode{
    width: 140PX;
  }
  .rgCodeButton{
    width: 100px;
    margin-left: 10px;
  }
  .rgReset{
    width: 80px;
  }
  .rgbtn{
    width: 100px;
  }

</style>

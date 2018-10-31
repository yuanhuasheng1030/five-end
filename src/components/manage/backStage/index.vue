<template>
  <div class='main'>
      <el-container class='main'>
        <!-- <el-header class="backTitle">宠物邦后台管理系统</el-header> -->
          <el-container class='main'>
            <el-aside class='main' width="200px" style="background-color: rgb(238, 241, 246)">
              <div class="aside">
                 <div class="sanjiao"><div>旗舰版</div></div>
                  <div class="administator">
                    <div class="imgDiv">
                          <img class="userImg" title="点击头像退出"  @click="remove" src="../../../assets/logo_02.png">
                    </div>
                    <div class="administatorName">当前管理员:<span>{{administator}}</span></div>
                    
                  </div>

                      <el-menu :default-active="path" :router="true" class="el-menu-vertical-demo">
                        <el-menu-item index="/backStage/userManage">
                          <span slot="title">
                            用户管理系统
                          </span>
                        </el-menu-item>

                        <el-menu-item index="/backStage/gatemanage">
                          <span slot="title">
                            门店管理系统
                          </span>
                        </el-menu-item>

                        <el-menu-item index="/backStage/petManage">
                          <span slot="title">
                            宠主管理系统
                          </span>
                        </el-menu-item>

                        <el-menu-item index="/backStage/supplierManage">
                          <span slot="title">
                            供应商管理系统
                          </span>
                        </el-menu-item>

                        <el-menu-item index="/backStage/dataAnalysis">
                          <span slot="title">
                            数据统计
                          </span>
                        </el-menu-item>
                      </el-menu>

                </div>
              </el-aside>
            <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data:function(){
    return{
      administator:"",
    }
  },
  beforeCreate() { //创建前
    axios({
        type:"get",
        url:"/getSession",
        // dataType:"json",
        }).then((response) => {
          //  console.log(response.data);
           this.administator=response.data.username
        })
  },
  methods:{
    remove(){
        axios({
        type:"get",
        url:"/removeSession",
        }).then((response) => {
           this.$router.push("/");   
        })
    }
  },
 
  computed: {

    path() {
      return this.$router.history.current.path;
    }
  }
};
</script>

<style scoped>
.main{
  height: 100%;
}
/*用户头像部分*/
.administator{
  background: #2b2a2a;
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  color: #fff;
}
.imgDiv{
  /* outline: 2px solid yellow; */
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.userImg{
  width: 50px;
  height: 50px;
  cursor: pointer;
}
.administatorName{
  /* outline: 1px solid red; */
  height: 35px;
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
}
.administatorName:hover{
  background: #ffea00;
  color: #333;
}
.administatorName>span{
font-weight: bold;
}
/* --------------------------------- */
/*左侧导航列表*/
.el-menu-vertical-demo{
  background: #2b2a2a;
  width: 100%;
}
.el-menu-vertical-demo>li{
  height: 45px;
  border-radius: 35px;
  color:gray;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  font-weight: bold;
  margin:10px auto;
}
.el-menu-vertical-demo>li:hover{
  color: #333;
}
.aside{
  height: 100%;
  background: #2b2a2a;
  width: 199px;
}

/* ------------------------------------------- */
.sanjiao{ /*黄色三角形*/
  /* outline: 1px solid red; */
  height: 0px;
  width: 0;
  border-style: solid;
  border-width: 0px 0px 90px 86px;;
  border-color: transparent transparent transparent #ffe000;
}
.sanjiao>div{
  width: 80px;
  height: 30px;
  color: #fff;
  font-size: 16px;
  position: relative;
  left: -80px;
  top: 10px;
  color: #333;
  font-weight: bold;
  transform: rotate(-43deg)
 
}
</style>
<template>
  <div class='main'>
      <el-container class='main'>
        <!-- <el-header>前台管理系统</el-header> -->
        <el-container class='main'>
          
          <el-aside class='main' width="200px" style="background-color: rgb(238, 241, 246)">
              <div class="leftAside">
                  <div class="sanjiao"><div>旗舰版</div></div>
                  <div class="administator">
                      <div class="imgDiv">
                            <img class="userImg" title="点击头像退出"  @click="remove" src="../../../assets/logo_02.png">
                      </div>
                      <div class="administatorName">当前店家 :<span>{{administator}}</span></div>
                  </div>

                  <el-menu :default-active="path" :router="true" class="el-menu-vertical-demo">
                      <el-menu-item index="/beforeStage/gateapply">
                        <span slot="title">
                          门店申请系统
                        </span>
                      </el-menu-item>
                      <el-menu-item index="/beforeStage/orderManage">
                        <span slot="title">
                          订单管理系统
                        </span>
                      </el-menu-item>
                      <el-menu-item index="/beforeStage/tradeManage">
                        <span slot="title">
                          商品管理系统
                        </span>
                      </el-menu-item>
                      <el-menu-item index="/beforeStage/serviceManage">
                        <span slot="title">
                          服务管理系统
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
  },
  created() {
    // this.id=
  },
};
</script>

<style scoped>
/*管理员信息部分*/
.administator{
  /* background: red; */
  height: 130px;
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
  /* outline: 1px solid white; */
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
/* -------------------------------- */
/*三角部分*/
.sanjiao{
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
  transform: rotate(-45deg)
}
/* -------------------------------- */
/*左边导航列表部分*/
.el-menu-vertical-demo{
  background: #2b2a2a;
  width: 100%;
}
.leftAside{
  height: 100%;
  background: #2b2a2a;
  width: 199px;
  /* outline: 2px solid red; */
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
.main{
  height: 100%;
}
</style>
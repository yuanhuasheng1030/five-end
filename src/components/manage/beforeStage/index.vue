<template>
  <div class='main'>
    <el-container class='main'>
      <el-header>前台管理系统</el-header>
      <el-container class='main'>
        <el-aside class='main' width="200px" style="background-color: rgb(238, 241, 246)">
          <el-menu :default-active="path" :router="true" class="el-menu-vertical-demo">
            <el-menu-item index="/beforeStage/gateapply?id=5bd2cbf17f4f82100392f886">
              <span slot="title">
                门店管理系统
              </span>
            </el-menu-item>
            <el-menu-item index="/beforeStage/tradeManage?id=5bd2cbf17f4f82100392f886">
              <span slot="title">
                商店管理系统
              </span>
            </el-menu-item>
          </el-menu>
        </el-aside>

        <el-main>
          <router-view />
        </el-main>

      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data:function(){
return{
    id:""
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
<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  height: auto;
  background: white;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
html,
body,
#app,
head {
  height: 100%;
  padding: 0;
  margin: 0;
}
.main {
  height: 100%;
}
</style>
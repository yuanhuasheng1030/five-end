<template>
  <div class='main'>
    <el-container class='main'>
      <el-header>后台管理系统</el-header>
      <el-container class='main'>
        <el-aside class='main' width="200px" style="background-color: rgb(238, 241, 246)">
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
                数据分析
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
  computed: {
    path() {
      return this.$router.history.current.path;
    }
  }
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
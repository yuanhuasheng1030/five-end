<template>

<div>
<el-menu :default-active="path" :router="true" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="/backStage/userManage/noCheck">待审核门店管理员</el-menu-item>
  <el-menu-item index="/backStage/userManage/checkPass">审核通过管理员</el-menu-item>
  <el-menu-item index="/backStage/userManage/ChecknoPass">审核未通过管理员</el-menu-item>
</el-menu>
 <el-main>
          <router-view />
        </el-main>

</div>
</template>
<script>
import CheckPass from "./CheckPass.vue";
import NoCheck from "./NoCheck.vue";
import ChecknoPass from "./ChecknoPass.vue";
export default {
   data() {
    return {};
  },
 components: {CheckPass,NoCheck,ChecknoPass}, 
   computed: {
    path() {
      return this.$router.history.current.path||"/backStage/userManage/noCheck";
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

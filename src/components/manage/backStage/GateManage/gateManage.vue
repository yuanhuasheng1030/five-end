<template>

<div>
<el-menu :default-active="path" :router="true" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="/backStage/gatemanage/nocheckGate">待审核门店</el-menu-item>
  <el-menu-item index="/backStage/gatemanage/passgate">审核通过门店</el-menu-item>
  <el-menu-item index="/backStage/gatemanage/nopassgate">审核未通过门店</el-menu-item>
</el-menu>
 <el-main>
          <router-view />
        </el-main>

</div>
</template>
<script>
export default {
   data() {
    return {};
  },
   computed: {
    path() {
      return this.$router.history.current.path||"/backStage/gatemanage/nocheckGate";
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

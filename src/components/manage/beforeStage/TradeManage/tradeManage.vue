<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="商品管理" name="first">
    <Goods />
    </el-tab-pane>
    <el-tab-pane label="服务管理" name="second">
    <ServiceManage />
    </el-tab-pane>
    <el-tab-pane label="订单管理" name="third">

      <OrderManage />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
// import Page from './Page'
// import Table from './Table'
import {mapActions,mapState,mapMutations} from 'vuex';
import Goods from '../goodsManage';
import ServiceManage from '../ServiceManage/serviceManage.vue';
import OrderManage from '../OrderManage/orderManage.vue';
export default {
  components:{
    Goods,ServiceManage,OrderManage
  },
  data:function(){
    return{
      id:'',
      activeName: 'first'
    }
  },
  created() {
    let id =location.href.split("=")[1]
  },
  computed:{
    
  },
  methods:{
handleClick(tab, event) {
        console.log(tab, event);
      }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

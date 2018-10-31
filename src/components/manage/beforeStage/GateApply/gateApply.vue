<template>
  <div>
    <el-button @click="btn" type="success" plain>注册店铺</el-button>
    <Table />
  </div>
</template>
<script>
import Page from './Page'
import Table from './Table'
import { createNamespacedHelpers } from 'vuex'
const { mapActions,mapState,mapMutations } = createNamespacedHelpers('yl')
export default {
  components:{
    Table,Page
  },
  data:function(){
    return{
      id:''
    }
  },
  created() {
    let id =location.href.split("=")[1]
  },
  computed:{
    
  },
  methods:{
btn(){
   this.$router.push("/ri?id="+location.href.split("=")[1]);
  
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

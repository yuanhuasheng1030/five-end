<template>
      <div >
            分类查询:
    <el-radio-group  @change="btn()" text-color="white" fill="#ffea00" v-model="type" size="medium">
      <el-radio-button label="宠物用品" ></el-radio-button>
      <el-radio-button label="宠物食品"></el-radio-button>
      <el-radio-button label="宠物药品"></el-radio-button>
      <el-radio-button label="其他分类"></el-radio-button>
      <el-radio-button label="全部"></el-radio-button>
    </el-radio-group>
  </div>
</template>

<script>
// import axios from "axios";
// import lodash from "lodash";
import { createNamespacedHelpers } from 'vuex'
const { mapActions,mapState,mapMutations } = createNamespacedHelpers('yl')
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data(){
      return {
          type:""
      }
  },
  methods:{
       ...mapActions(["setGoods"]),
      btn(e){
          if(this.type=="全部"){
              this.type=''
          }
          console.log(123141,this.type);
          this.setGoods({
              type:this.type,id:location.href.split("=")[1]
          })
      }
  }
};
</script>

<style scoped>
</style>

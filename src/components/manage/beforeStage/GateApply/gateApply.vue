<template>
  <div>
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

  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

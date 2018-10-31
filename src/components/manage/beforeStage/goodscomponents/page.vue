<template>
    <div>
        <div>{{goods.num}}</div>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[2, 5, 10]" :page-size="1" layout="total, sizes, prev, pager, next, jumper" :total="goods.num">
        </el-pagination>
    </div>
</template>
<script>
import axios from "axios";
import { createNamespacedHelpers } from 'vuex'
const { mapActions,mapState,mapMutations } = createNamespacedHelpers('yl')
export default {
  created: function() {},
  computed: {
    ...mapState(["goods"])
  },
  methods: {
    ...mapActions(["setGoods"]),
    handleSizeChange(a) {
      console.log(`每页 ${a} 条`);
      this.rows=a;
      this.setGoods({rows:a,page:this.page,id:this.id});
    },
    handleCurrentChange(page) {
     console.log(2,page);
     this.page=page;
     this.setGoods({page,rows:this.rows,id:this.id});
    }
  },
  data() {
    return {
      currentPage4: 1,
      page:1,
      rows:2,
      id:location.href.split("=")[1]
    };
  }
};
</script>
<style scoped>
.page1 {
  text-align: right;
  margin-top: 20px;
}
</style>
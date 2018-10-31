<template>
  <div>
    <!-- 删除弹框 -->
     <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>确认要删除吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmDel()">确 定</el-button>
      </span>
     </el-dialog>
    <!-- 渲染表格 -->
      <el-table
        :data="petsKeepers"
        style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="宠物姓名:">
                <span>{{ props.row.pets[0].petName }}</span>
              </el-form-item>
              <el-form-item label="品 类:">
                <span>{{ props.row.pets[0].petRace }}</span>
              </el-form-item>
              <el-form-item label="种 类:">
                <span>{{ props.row.pets[0].petType }}</span>
              </el-form-item>
              <el-form-item label="颜 色:">
                <span>{{ props.row.pets[0].color }}</span>
              </el-form-item>
              <el-form-item label="出生日期:">
                <span>{{ props.row.pets[0].birthday }}</span>
              </el-form-item>
              <el-form-item label="性 格:">
                <span>{{ props.row.pets[0].character }}</span>
              </el-form-item>
              <el-form-item label="头 像:">
                <span>{{ props.row.img }}</span>
              </el-form-item>
            </el-form>
          </template> 
        </el-table-column>
        <el-table-column
          label="客户姓名"
          prop="name">
        </el-table-column>
        <el-table-column
          label="客户昵称"
          prop="nickname">
        </el-table-column>
        <el-table-column
          label="客户电话"
          prop="phone">
        </el-table-column>
        <el-table-column
          label="会员卡"
          prop="VIPcard">
        </el-table-column>
        <el-table-column
          label="积 分"
          prop="score">
        </el-table-column>
        <el-table-column
          label="区 域"
          prop="location">
        </el-table-column>
        <el-table-column
          label="地 址"
          prop="addr">
        </el-table-column>
        <el-table-column label="选择操作">
          <template slot-scope="scope" style="display:flex;">
            <!-- <el-button size="small" @click="update(scope.row._id)"  type="text">修改 </el-button> -->
            <el-button size="small" @click="remove(scope.row._id)" type="mini" >删除 </el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- {{pagination}} -->
      <el-pagination
            @current-change='changePage'
            class="page"
            background
            layout="prev, pager, next"
            :page-size='pagination.eachpage'
            :total="pagination.total">
        </el-pagination>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("clf");
import axios from "axios";
export default {
  data: function() {
    return {
      dialogVisible: false,
      delId: ""
    };
  },
  // 创建时的渲染
  created() {
    this.setPetsKeepers();
  },
  // 方法
  methods: {
    // 删除
    remove(id) {
      this.dialogVisible = true;
      this.delId = id;
    },
    confirmDel() {
      let id = this.delId;
      console.log(id, "shuahsihaihsiahio");
      axios({
        method: "delete",
        url: "/petsKeepers/" + id
      }).then(Response => {
        // if(this.pagination.rows==[]){
        //   console.log("空数组");
        //    this.setPetsKeepers({page:this.pagination.page});
        // }else{
        this.setPetsKeepers({ page: this.pagination.curpage });
        // }
      });
      this.dialogVisible = false;
    },

    // 修改
    update(id) {
      console.log(id);
      this.$emit("update:updateVisible", true);
      this.setPetsKeeper(id);
    },
    changePage(page) {
      this.setPetsKeepers({ page });
    },
    ...mapActions(["setPetsKeepers", "setPetsKeeper"])
  },
  // 计算属性
  computed: {
    ...mapState(["petsKeepers", "petsKeeper", "pagination"])
  },
  comments: {}
};
</script>
<style scoped>
/* 样式 */
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.page {
  margin-top: 15px;
}
</style>

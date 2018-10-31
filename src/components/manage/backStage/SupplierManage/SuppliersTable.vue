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
        :data="suppliers"
        style="width: 100%"
        max-height="250">
        <el-table-column
          prop="name"
          label="供应商姓名">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="电话">
        </el-table-column>
        <el-table-column
          prop="addr"
          label="地址">
        </el-table-column>
        <el-table-column
          prop="isChecked"
          label="审核">
        </el-table-column>
        <el-table-column label="选择操作">
          <template slot-scope="scope" style="display:flex;">
            <el-button size="small" @click="update(scope.row._id)"  type="mini">修改 </el-button>
            <el-button size="small" @click="remove(scope.row._id)" type="mini" >移除 </el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
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
      // suppliers:[]
      dialogVisible: false,
      delId: ""
    };
  },
  // 创建时的渲染
  created() {
    this.setSuppliers();
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
        url: "/suppliers/" + id
      }).then(Response => {
        this.setSuppliers({ page: this.pagination.curpage });

        // this.setSuppliers({ curpage });
      });
      this.dialogVisible = false;
    },
    // 修改
    update(id) {
      console.log(id);
      this.$emit("update:updateVisible", true);
      this.setSupplier(id);
    },
    // 分页
    changePage(page) {
      console.log("显示当前页", page);
      this.setSuppliers({ page });
    },
    ...mapActions(["setSuppliers", "setSupplier"])
  },

  computed: {
    ...mapState(["suppliers", "supplier", "pagination"])
  },
  comments: {}
};
</script>
<style scoped>
</style>

<template>
  <div>
      <el-button type="primary" @click="dialogFromVisible=true" plain>增加供应商</el-button>
      <el-dialog title="增加供应商" :visible.sync="dialogFromVisible">
      <el-form>
        <el-form-item label="姓 名" :label-width="formLabelWidth">
          <el-input v-model="name" ></el-input>
        </el-form-item>
        <el-form-item label="电 话" :label-width="formLabelWidth">
          <el-input v-model="phone" ></el-input>
        </el-form-item>
        <el-form-item label="地 址" :label-width="formLabelWidth">
          <el-input v-model="addr" ></el-input>
        </el-form-item>
        <el-form-item label="审核情况" :label-width="formLabelWidth">
          <el-radio-group v-model="isChecked">
            <el-radio label="已审核">已审核</el-radio>
            <el-radio label="未审核">未审核</el-radio>
          </el-radio-group>
        </el-form-item>        
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFromVisible=false">取 消</el-button>
        <el-button type="primary" @click="AddSuppliers()">确 定</el-button>
      </div>
    </el-dialog>  
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("clf");
import axios from "axios";
export default {
  data: function() {
    return {
      dialogFromVisible: false,
      formLabelWidth: "80px",
      name: "",
      phone: "",
      addr: "",
      isChecked: ""
    };
  },
  methods: {
    AddSuppliers: function() {
      axios({
        url: "/suppliers",
        method: "post",
        data: {
          name: this.name,
          phone: this.phone,
          addr: this.addr,
          isChecked: this.isChecked
        }
      }).then(response => {
        // this.setSuppliers();
        this.dialogFromVisible = false;
        this.name = "";
        this.phone = "";
        this.addr = "";
        this.isChecked = "";
        this.setSuppliers({ page: this.pagination.curpage });
      });
    },
    ...mapActions(["setSuppliers"])
  },
  computed: {
    ...mapState(["suppliers", "supplier", "pagination"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

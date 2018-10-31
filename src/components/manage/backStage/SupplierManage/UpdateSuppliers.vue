<template>
  <div>
    <el-dialog title="修改供应商信息" :visible="updateVisible" @update:visible="$emit('update:updateVisible',$event)">
      <el-form>
        <el-form-item label="姓 名" :label-width="formLabelWidth">
          <el-input v-model="supplier.name" ></el-input>
        </el-form-item>
        <el-form-item label="电 话" :label-width="formLabelWidth">
          <el-input v-model="supplier.phone" ></el-input>
        </el-form-item>
        <el-form-item label="地 址" :label-width="formLabelWidth">
          <el-input v-model="supplier.addr" ></el-input>
        </el-form-item>
        <el-form-item label="审核情况" :label-width="formLabelWidth">
          <el-radio-group v-model="supplier.isChecked">
            <el-radio label="已审核">已审核</el-radio>
            <el-radio label="未审核">未审核</el-radio>
          </el-radio-group>
        </el-form-item>        
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="$emit('update:updateVisible',false)">取 消</el-button>
        <el-button type="primary" @click="updateConfirm(supplier._id)">确 定</el-button>
      </div>
    </el-dialog>  
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapState } from "vuex";
export default {
  props: ["updateVisible"],
  data() {
    return {
      formLabelWidth: "80px",
      name: "",
      phone: "",
      addr: "",
      isChecked:""
    };
  },
  methods: {
    updateConfirm(id) {
      console.log(333);
      axios({
        url: "/suppliers/" + id,
        method: "put",
        data: {
          name: this.supplier.name,
          phone: this.supplier.phone,
          addr: this.supplier.addr,
          isChecked: this.supplier.isChecked
        }
      }).then(response => {
        console.log("进入确认修改");
        this.$emit("update:updateVisible", false);
        // this.setSuppliers();
        this.setSuppliers({page:this.pagination.curpage});
      });
    },
    ...mapActions(["setSuppliers"])
  },
  computed: {
    ...mapState(["supplier","pagination"])
  },
  components: {}
};
</script>

<style scoped>
</style>

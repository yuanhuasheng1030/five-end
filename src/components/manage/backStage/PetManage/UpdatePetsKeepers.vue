<template>
  <div>
      <el-dialog title="修改信息" :visible="updateVisible" @update:visible="$emit('update:updateVisible',$event)">
        <!-- <el-form>
          <el-form-item label="客户姓名" :label-width="foemLabelWidth">
            <el-input v-model="formLabelAlign.name"></el-input>
          </el-form-item>
          <el-form-item label="客户昵称" :label-width="foemLabelWidth">
            <el-input v-model="formLabelAlign.region"></el-input>
          </el-form-item>
          <el-form-item label="客户电话" :label-width="foemLabelWidth">
            <el-input v-model="formLabelAlign.type"></el-input>
          </el-form-item>
        </el-form>  -->
        <!-- <div slot="footer" class="dialog-footer">
          <el-button @click="$emit('update:updateVisible',false)">取 消</el-button>
          <el-button type="primary" @click="updateConfirm(petsKeeper.id)">打开内层 Dialog</el-button>
        </div> -->
      </el-dialog>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("clf");
import axios from "axios";
export default {
  props: ["updateVisible"],
  data() {
    return {};
  },
  methods: {
    updateConfirm(id) {
      console.log(222222222222222222222);
      axios({
        url: "/petsKeepers" + id,
        method: "put",
        data: {}
      }).then(reponse => {
        this.$emit("update:updateVisible", false);
        this.setPetsKeepers();
      });
    },
    ...mapActions(["setPetsKeeper"])
  },
  computed: {
    ...mapState(["petsKeeper"])
  },
  components: {}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

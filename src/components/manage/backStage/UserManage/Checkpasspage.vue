<template>
<el-pagination
  background
  layout="prev, pager, next"
  @current-change="handleCurrent"
  :total="Checkpasspagnation.maxpage*10">
</el-pagination>
</template>

<script>
import axios from "axios";
import { createNamespacedHelpers } from 'vuex'
const { mapState,mapMutations } = createNamespacedHelpers('zyl')
export default {
  props: ["show"],
  data() {
    return {};
  },
  methods: {
    handleCurrent(page) {
      this.show(page);
    }
  },
  computed: {
    ...mapState(["Checkpasspagnation"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
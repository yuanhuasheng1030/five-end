<template>
<el-pagination
  background
  layout="prev, pager, next"
  @current-change="handleCurrent"
  :total="NoCheckpagnation.maxpage*10">
</el-pagination>
</template>

<script>
import axios from "axios";
import { mapState, mapActions } from "vuex";
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
    ...mapState(["NoCheckpagnation"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
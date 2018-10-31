<template>
  <div>
    <div class="main">
      <Add />
      <Find /> 
    </div>
    <Alter  :open.sync="open"/>
    <TableGoods :open.sync="open" />
    <Page />
  </div>
</template>
<script>
// import Page from './Page'
import TableGoods from "./goodscomponents/tablegoods";
import Page from "./goodscomponents/page";
import Add from "./goodscomponents/Add";
import Alter from "./goodscomponents/alter";
import Find from "./goodscomponents/Find";
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  components: {
    TableGoods,Add,Alter,Find,Page
  },
  data: function() {
    return {
      id: "",
      open:false,
    };
  },
  created() {
    let id = location.href.split("=")[1];
  },
  computed: {},
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  display: flex;
  align-items: center;
  
}
</style>

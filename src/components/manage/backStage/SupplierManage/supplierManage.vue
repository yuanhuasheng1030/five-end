<template>
  <div>
    <div style="display:flex;">
      <AddSuppliers></AddSuppliers>
      <SearchSuppliers></SearchSuppliers>
    </div>
    <SuppliersTable style="margin-top:15px;" :updateVisible.sync="updateVisible"></SuppliersTable>
    <UpdateSuppliers :updateVisible.sync="updateVisible"></UpdateSuppliers>
    <!-- <SuppliersPage></SuppliersPage> -->
  </div>
</template>

<script>
import AddSuppliers from "./AddSuppliers.vue";
import SuppliersTable from "./SuppliersTable.vue";
import UpdateSuppliers from "./UpdateSuppliers.vue";
import SearchSuppliers from "./SearchSuppliers.vue";
// import SuppliersPage from "./SuppliersPage.vue"
export default {
  data: function() {
    return {
      updateVisible: false,
    };
  },
  components:{
    AddSuppliers,SuppliersTable,UpdateSuppliers,SearchSuppliers
    // SuppliersPage
  }
}
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

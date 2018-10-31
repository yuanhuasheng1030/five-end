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
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("clf");
import axios from "axios";
export default {
  data: function() {
    return {
      updateVisible: false
    };
  },
  created() {
    this.setSuppliers();
  },
  methods: {
    ...mapActions(["setSuppliers"])
  },
  components: {
    AddSuppliers,
    SuppliersTable,
    UpdateSuppliers,
    SearchSuppliers
    // SuppliersPage
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

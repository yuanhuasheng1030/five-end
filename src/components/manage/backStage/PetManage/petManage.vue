<template>
  <div>
      <div style="display:flex;">
        <!-- <AddPetsKeepers></AddPetsKeepers> -->
        <SearchPetsKeepers></SearchPetsKeepers>
      </div>
      <PetsKeepersTable :updateVisible.sync="updateVisible"  style="margin-top:15px;"></PetsKeepersTable>
      <UpdatePetsKeepers :updateVisible.sync="updateVisible" ></UpdatePetsKeepers>
      <!-- <PetsKeepersPage></PetsKeepersPage> -->
  </div>
</template>

<script>
import PetsKeepersTable from "./PetsKeepersTable.vue";
import AddPetsKeepers from "./AddPetsKeepers.vue";
import UpdatePetsKeepers from "./UpdatePetsKeepers.vue";
import SearchPetsKeepers from "./SearchPetsKeepers.vue";
// import DeletePetsKeepers from "./DeletePetsKeepers.vue";
import { mapActions, createNamespacedHelpers } from "vuex";
// import PetsKeepersPage from "./PetsKeepersPage.vue";

// import { mapActions } from 'vuex';
// import { createNamespacedHelpers } from "vuex";
// const { mapActions } = createNamespacedHelpers("petsKeepers");
export default {
  data: function() {
    return {
      updateVisible: false,
      // deleteVisible:false
    };
  },
  // created() {
  //   this.setPetsKeepers();
  // },
  methods: {
  //   ...mapActions(["setPetsKeepers"])
  },
  components: {
    PetsKeepersTable,
    AddPetsKeepers,
    UpdatePetsKeepers,
    SearchPetsKeepers
    // DeletePetsKeepers
    // PetsKeepersPage
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
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
} */
</style>

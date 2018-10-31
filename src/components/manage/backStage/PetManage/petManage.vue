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
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("clf");
export default {
  data: function() {
    return {
      updateVisible: false
    };
  },
  created() {
    this.setPetsKeepers();
  },
  methods: {
    ...mapActions(["setPetsKeepers"])
  },
  computed() {},
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
</style>

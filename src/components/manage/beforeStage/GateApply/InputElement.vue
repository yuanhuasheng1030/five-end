<template>
     <div >
                <label><slot></slot></label>
                <input :value="value"  @input="$emit('input',$event.target.value)" :type="type"  />
            </div>
</template>

<script>
// import axios from 'axios'
export default {
  props: ["value", "type"],
  data: function() {
    return {};
  },
  components: {}
};
</script>


<style scoped>
</style>

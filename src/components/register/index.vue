<template>
  <el-row>
    <el-button type="success" @click="before">前台</el-button>
    <el-button type="success" @click="back">后台</el-button>
  </el-row>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    methods: {
      before() {
        console.log('====================================');
        console.log(3333);
        console.log('====================================');
        this.$router.push("/beforeStage");
      },
      back() {
        console.log('====================================');
        console.log(3333);
        console.log('====================================');
        this.$router.push("/backStage");
      },
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
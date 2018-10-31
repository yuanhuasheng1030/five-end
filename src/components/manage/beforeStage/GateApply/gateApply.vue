<template>
  <div>
    <Table />
  </div>
</template>
<script>
import Page from './Page'
import Table from './Table'
import { createNamespacedHelpers } from 'vuex'
const { mapActions,mapState,mapMutations } = createNamespacedHelpers('yl')
export default {
  components:{
    Table,Page
  },
  data:function(){
    return{
      id:''
    }
  },
  created() {
    let id =location.href.split("=")[1]
  },
  computed:{
    
  },
  methods:{

  },
  props: {
    msg: String
  },
  data: function() {
    return {
      imageUrl: "",
      formLabelWidth: "120px",
      dialogFormVisible: true,
      name: "",
      addr: "",
      location: "",
      legalPerson: "",
      phone: "",
      lisenceNum: ""
    };
  },
  methods: {
    ...mapActions(["addShops"]),
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      console.log("1212", file);
      this.img = file.response;
    },
    beforeAvatarUpload(file) {
      // console.log('111',file);

      const isJPG = file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    btn() {
      (this.dialogFormVisible = false),
        this.addShops({
          name: this.name,
          age: this.addr,
          gender: this.lisenceNum,
          img: this.imageUrl
        });
    }
  },
  components: {
    InputElement
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

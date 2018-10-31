<template>
    <div>
        <el-pagination
            @current-change='changePage'
            class="page"
            background
            layout="prev, pager, next"
            :page-size='pagination.eachpage'
            :total="pagination.total">
        </el-pagination>
    </div>
</template>

<script>
import { mapActions,mapState } from "vuex";
export default{
    data:function(){
        return {};
    },
    methods:{
        changePage(page){
            this.setPetsKeepers({ page });
        },
        ...mapActions(['setPetsKeepers'])
    },
    computed:{
        ...mapState(['pagination'])
    },
    comments:{}
}
</script>
<style scoped>
.page{
    margin-top: 15PX;
}

</style>



<template>
    <div>
        <el-input placeholder="请输入内容" v-model="value" class="input-with-select">
            <el-select v-model="select" class="select" slot="prepend" placeholder="请选择">
            <el-option label="名称" value="name"></el-option>
            <el-option label="类型" value="serviceType"></el-option>
            <el-option label="服务等级" value="serverLevel"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search" @click="searchSubmit"></el-button>
        </el-input>
    </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from 'vuex'
    export default {
        data: function () {
            return {
                select: '',
                value: ''
            }
        },
        computed: {
            ...mapState(['search'])
        },
        methods: {
            ...mapActions(['setServices']),
            ...mapMutations(['setSearch']),
            searchSubmit: function(){
                this.setSearch({name:this.select, value: this.value});
                this.setServices(this.search);
            }
        }
    }
</script>

<style scoped>
.select{
    width:100px;
}
</style>
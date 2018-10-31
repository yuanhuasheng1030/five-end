<template>
    <div class="page">
        <span class="normalPage" v-show="pagination.curpage != 1" @click="changePage(pagination.curpage-1)">上</span>
        <span :key="page" v-for="page in pagination.maxpage" :class="pagination.curpage == page? 'curpage':'normalPage'" @click="changePage(page)">{{page}}</span>
        <span class="normalPage" v-show="pagination.curpage != pagination.maxpage" @click="changePage(pagination.curpage+1)">下</span>
    </div>
</template>

<script>
    import axios from 'axios'
    import {mapState, mapActions} from 'vuex'
    export default {
        computed: {
            ...mapState(['pagination', 'search'])
        },
        methods: {
            ...mapActions(['setServices']),
            changePage: function(page){             
                this.setServices({page,...this.search});
            }
        }                            
    }
</script>

<style scoped>
.page{
    margin-top: 20px;
}
    .normalPage,.curpage{
        display: inline-block;
        width: 25px;
        height: 25px;
        border: 1px solid black;
        text-align: center;
        line-height: 25px;
        margin-right: 10px;
    }
    .curpage{
        background: #f56c6c;
        color: white;
        border: 1px solid transparent;
    }
</style>

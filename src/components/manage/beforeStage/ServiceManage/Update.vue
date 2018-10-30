<template>
<div>
<el-dialog title="修改服务" :visible="dialogUpdateVisible" @update:visible="setDialogUpdateVisible">
        <el-form ref="form" :model="service" label-width="80px" size="mini">
    <el-form-item label="服务名称">
        <el-input v-model="service.name"></el-input>
    </el-form-item>
    <el-form :model="service" :inline="true">
        <el-form-item label="服务类型">
            <el-select v-model="service.serviceType" placeholder="请选择服务类型">
            <el-option label="美容" value="美容"></el-option>
            <el-option label="摄影" value="摄影"></el-option>
            <el-option label="娱乐" value="娱乐"></el-option>
            <el-option label="托运" value="托运"></el-option>
            <el-option label="洗澡" value="洗澡"></el-option>
            <el-option label="其他" value="其他"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="适用规格">
            <el-input v-model="service.adaptPets"></el-input>
        </el-form-item>
    </el-form>
    <el-form-item label="服务时间">
        <el-col :span="11">
        <el-time-select
        placeholder="起始时间"
        v-model="service.startTime"
        :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30'
        }">
    </el-time-select>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
        <el-time-select
        placeholder="结束时间"
        v-model="service.endTime"
        :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30',
        minTime: service.startTime
        }">
    </el-time-select>
        </el-col>
    </el-form-item>
    <el-form :model="service" :inline="true">
    <el-form-item label="基础价格">
        <el-input v-model="service.basePrice"></el-input>
    </el-form-item>
    <el-form-item label="会员价格">
        <el-input v-model="service.VIPprice"></el-input>
    </el-form-item>
    </el-form>

    <el-form-item label="服务规格">
        <el-input v-model="service.serviceStandard" placeholder="如精修、普修"></el-input>
    </el-form-item>
        <el-form-item label="服务时长">
        <el-select v-model="service.timeCost" placeholder="请选择服务时长">
        <el-option label="30分钟" value="30分钟"></el-option>
        <el-option label="40分钟" value="40分钟"></el-option>
        <el-option label="50分钟" value="50分钟"></el-option>
        <el-option label="60分钟" value="60分钟"></el-option>
        <el-option label="90分钟" value="90分钟"></el-option>
        <el-option label="120分钟" value="120分钟"></el-option>
        </el-select>
    </el-form-item>
    <el-form-item size="large">
        <el-button type="primary" @click="onSubmit">立即修改</el-button>
        <el-button @click="setDialogUpdateVisible(false)">取消</el-button>
    </el-form-item>
    </el-form>
</el-dialog>
</div>
</template>
<script>
import {mapActions, mapMutations, mapState} from 'vuex'
export default {
    data:function(){
        return {
        };
    },
    computed: mapState(['service','dialogUpdateVisible']),
    methods: {
        ...mapActions(['updateService','setServices']),
        ...mapMutations(['setDialogUpdateVisible']),
        onSubmit(){
        this.updateService();
        this.setServices();
        this.setDialogUpdateVisible(false);
        }
    }
}
</script>
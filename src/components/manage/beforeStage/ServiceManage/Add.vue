<template>
<div>
    <el-button @click="dialogAddVisible = true">新增服务</el-button>
<el-dialog title="新增服务" :visible.sync="dialogAddVisible">
        <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
    <el-form-item label="服务名称">
        <el-input v-model="sizeForm.name"></el-input>
    </el-form-item>
    <el-form :model="sizeForm" :inline="true">
        <el-form-item label="服务类型">
            <el-select v-model="sizeForm.serviceType" placeholder="请选择服务类型">
            <el-option label="美容" value="美容"></el-option>
            <el-option label="摄影" value="摄影"></el-option>
            <el-option label="娱乐" value="娱乐"></el-option>
            <el-option label="托运" value="托运"></el-option>
            <el-option label="洗澡" value="洗澡"></el-option>
            <el-option label="其他" value="其他"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="适用规格">
            <el-input v-model="sizeForm.adaptPets"></el-input>
        </el-form-item>
    </el-form>
    <el-form-item label="服务时间">
        <el-col :span="11">
        <el-time-select
        placeholder="起始时间"
        v-model="startTime"
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
        v-model="endTime"
        :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30',
        minTime: startTime
        }">
    </el-time-select>
        </el-col>
    </el-form-item>
    <el-form :model="sizeForm" :inline="true">
    <el-form-item label="基础价格">
        <el-input v-model="sizeForm.basePrice"></el-input>
    </el-form-item>
    <el-form-item label="会员价格">
        <el-input v-model="sizeForm.VIPprice"></el-input>
    </el-form-item>
    </el-form>

    <el-form-item label="服务规格">
        <el-input v-model="sizeForm.serviceStandard" placeholder="如精修、普修"></el-input>
    </el-form-item>
        <el-form-item label="服务时长">
        <el-select v-model="sizeForm.timeCost" placeholder="请选择服务时长">
        <el-option label="30分钟" value="30分钟"></el-option>
        <el-option label="40分钟" value="40分钟"></el-option>
        <el-option label="50分钟" value="50分钟"></el-option>
        <el-option label="60分钟" value="60分钟"></el-option>
        <el-option label="90分钟" value="90分钟"></el-option>
        <el-option label="120分钟" value="120分钟"></el-option>
        </el-select>
    </el-form-item>
    <el-form-item size="large">
        <el-button type="primary" @click="onSubmit">立即新增</el-button>
        <el-button @click="dialogFormVisible = false">取消</el-button>
    </el-form-item>
    </el-form>
</el-dialog>
</div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    data() {
        return {
        dialogAddVisible: false,
        startTime: "",
        endTime:"",
        sizeForm: {
            name: "",
            serviceType: "",
            basePrice: "",
            VIPprice:"",
            serviceStandard:"",
            timeCost: "",
            adaptPets:""
        }
        };
    },
    methods: {
        ...mapActions(['addService']),
        onSubmit(){
        this.addService({...this.sizeForm,startTime:this.startTime,endTime:this.endTime, schedule:`${this.startTime}-${this.endTime}`});
        this.dialogAddVisible = false
        }
    }
}
</script>
<template>
  <div>
    <el-dialog title="修改商品信息" :visible="open" @update:visible="$emit('update:open',false)" width="60%">
      <el-form :model="ruleForm2" status-icon ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <div class="bj">
          <div>
            <el-form-item label="产品名称">
              <el-input type="text" placeholder="请输入产品名称" v-model="good.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="拼音码">
              <el-input type="text" v-model="good.pinyin" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="打折">
              <div>
                <el-radio-group v-model="good.sale">
                  <el-radio-button label="是"></el-radio-button>
                  <el-radio-button label="否"></el-radio-button>
                </el-radio-group>
              </div>
            </el-form-item>
            <el-form-item label="适用宠物类型">
              <el-select v-model="good.petType" placeholder="请选择适用宠物类型" style="width:300px">
                <el-option v-for="item in gender" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="条形码">
              <el-input type="text" placeholder="点击打印" v-model="good.size" autocomplete="off"></el-input>
              <el-button type="success" @click="tiaoxingma" plain>打印</el-button>
            </el-form-item>
            <el-form-item label="产品类别">
              <el-select v-model="good.productCategory" placeholder="请选择产品类别" style="width:300px">
                <el-option v-for="item in productCategory" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="品牌">
              <el-select v-model="good.productBrand" placeholder="请选择产品品牌" style="width:300px">
                <el-option v-for="item in productBrand" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="单位">
              <el-select v-model="good.type" placeholder="请选择产品单位" style="width:300px">
                <el-option v-for="item in type" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <div>
            <el-form-item label="进货价">
              <el-input type="text" placeholder="请输入进货价" v-model="good.buy" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="售价">
              <el-input type="text" placeholder="请输入售价" v-model="good.selling" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="会员价">
              <el-input type="text" placeholder="请输入会员价" v-model="good.vipSelling" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="规格型号">
              <el-input type="text" placeholder="请输入规格型号" v-model="good.guigeSize" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="供应商">
              <el-select v-model="good.suppliers" placeholder="请选择供应商" style="width:220px">
                <el-option v-for="item in suppliers" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="库存">
              <el-input type="text" placeholder="请输入库存" v-model="good.inventory" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="商品照片">
              <el-upload class="avatar-uploader" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload" name="uploadHeader" action="/upload" :show-file-list="false">
                <img v-if="/upload/+good.img" :src="/upload/+good.img" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
          </div>
        </div>

      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="$emit('update:open',false)">取 消</el-button>
        <el-button type="primary" @click="add">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
import lodash from "lodash";
import { createNamespacedHelpers } from 'vuex'
const { mapActions,mapState,mapMutations } = createNamespacedHelpers('yl')
export default {
  data() {
    return {
      gender: [
        {
          value: "猫用",
          label: "猫用"
        },
        {
          value: "狗用",
          label: "狗用"
        },
        {
          value: "猫狗共用",
          label: "猫狗共用"
        },
        {
          value: "小宠",
          label: "小宠"
        },
        {
          value: "其他",
          label: "其他"
        }
      ],
      type: [
        {
          value: "把",
          label: "把"
        },
        {
          value: "个",
          label: "个"
        },
        {
          value: "包",
          label: "包"
        },
        {
          value: "袋",
          label: "袋"
        },
        {
          value: "件",
          label: "件"
        }
      ],
      productCategory: [
        {
          value: "宠物用品",
          label: "宠物用品"
        },
        {
          value: "宠物食品",
          label: "宠物食品"
        },
        {
          value: "宠物药品",
          label: "宠物药品"
        },
        {
          value: "其他分类",
          label: "其他分类"
        }
      ],
      productBrand: [
        {
          value: "比瑞吉",
          label: "比瑞吉"
        },
        {
          value: "麦德氏",
          label: "麦德氏"
        },
        {
          value: "味纯",
          label: "味纯"
        },
        {
          value: "发育宝",
          label: "发育宝"
        }
      ],
      suppliers: [],
      imageUrl: "",
      dialogVisible: false,
      ruleForm2: {
        type: "",
        petType: "",
        sale: "",
        pinyin: "",
        name: "",
        buy: "",
        selling: "",
        vipSelling: "",
        guigeSize: "",
        suppliers: "",
        inventory: "",
        img: "",
        size: "",
        id: ""
      }
    };
  },
  props: ["open"],
  created: function() {
    axios({
      url: "/trademanage/gys",
      method: "get"
    }).then(response => {
      for (let item of response.data) {
        this.suppliers.push({
          value: item.name,
          label: item.name
        });
      }
    });
  },
  computed: {
    ...mapState(["good"])
  },
  methods: {
    tiaoxingma() {
      this.good.size = lodash.random(0, 999999);
    },
    handleAvatarSuccess(res, file) {
      this.good.img = URL.createObjectURL(file.raw);
      this.good.img = file.response;
      console.log(2, file);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    add() {
      console.log(99, this.good);
      // this.good.id = location.href.split("=")[1];
      axios({
        url: "/trademanage/alter",
        method: "get",
        params: {
          productCategory: this.good.productCategory,
          type: this.good.type,
          productBrand:this.good.productBrand,
          petType: this.good.petType,
          sale: this.good.sale,
          pinyin: this.good.pinyin,
          name: this.good.name,
          buy: this.good.buy,
          selling: this.good.selling,
          vipSelling: this.good.vipSelling,
          guigeSize: this.good.guigeSize,
          suppliers: this.good.suppliers,
          inventory: this.good.inventory,
          img: this.good.img,
          size: this.good.size,
          id: location.href.split("=")[1],
          index: this.good.index
        }
      }).then(response => {
        this.setGoods({id: location.href.split("=")[1]});
        this.$emit("update:open", false);
      });

      
    },
    ...mapActions(["setAdd", "setGoods"])
  }
};
</script>
<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.bj {
  display: flex;
  justify-content: space-around;
}
</style>
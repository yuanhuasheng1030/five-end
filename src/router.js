import Vue from 'vue'
import Router from 'vue-router'
import Register from './components/register/index.vue'
import Login from './components/login/index.vue'
import BeforeStage from './components/manage/beforeStage/index.vue'
import BackStage from './components/manage/backStage/index.vue'
import GateManage from './components/manage/backStage/GateManage/gateManage.vue'
import PetManage from './components/manage/backStage/PetManage/petManage.vue'
import SupplierManage from './components/manage/backStage/SupplierManage/supplierManage.vue'
import UserManage from './components/manage/backStage/UserManage/userManage.vue'
import GateApply from './components/manage/beforeStage/GateApply/gateApply.vue'
import Ri from './components/ri/index.vue'
import Tj from './components/tj/index.vue'
import OrderManage from './components/manage/beforeStage/OrderManage/orderManage.vue'
import ServiceManage from './components/manage/beforeStage/ServiceManage/serviceManage.vue'
import TradeManage from './components/manage/beforeStage/TradeManage/tradeManage.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/ri',
      name: 'ri',
      component: Ri
    },
    {
      path: '/tj',
      name: 'tj',
      component: Tj
    },
    {
      path: '/backStage',//后台
      component: BackStage,
      children: [{
          path: 'gatemanage',//门店管理
          component: GateManage
        },
        {

          path: 'petManage',//宠主管理
          component: PetManage
        },
        {

          path: 'supplierManage',//供应商管理
          component: SupplierManage
        },
        {

          path: 'userManage',//用户管理
          component: UserManage
        }
      ]
    },
    {
      path: '/beforeStage',//前台
      component: BeforeStage,
      children: [{
          path: 'gateApply',//门店申请
          component: GateApply
        },
        {

          path: 'orderManage',//订单管理
          component: OrderManage
        },
        {

          path: 'serviceManage',//服务管理
          component: ServiceManage
        },
        {

          path: 'tradeManage',//商品管理
          component: TradeManage
        }
      ]
    }
  ]
})
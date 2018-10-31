import Vue from 'vue'
import Router from 'vue-router'
import Register from './components/register/index.vue'
import Login from './components/login/index.vue'
import BeforeStage from './components/manage/beforeStage/index.vue'
import BackStage from './components/manage/backStage/index.vue'
import GateManage from './components/manage/backStage/GateManage/gateManage.vue'
import NocheckGate from './components/manage/backStage/GateManage/NocheckGate.vue'
import Passgate from './components/manage/backStage/GateManage/Passgate.vue'
import Nopassgate from './components/manage/backStage/GateManage/Nopassgate.vue'
import PetManage from './components/manage/backStage/PetManage/petManage.vue'
import SupplierManage from './components/manage/backStage/SupplierManage/supplierManage.vue'
import UserManage from './components/manage/backStage/UserManage/userManage.vue'
import CheckPass from './components/manage/backStage/UserManage/CheckPass.vue'
import ChecknoPass from './components/manage/backStage/UserManage/ChecknoPass.vue'
import NoCheck from './components/manage/backStage/UserManage/NoCheck.vue'
import GateApply from './components/manage/beforeStage/GateApply/gateApply.vue'
import TradeManage from './components/manage/beforeStage/TradeManage/tradeManage.vue'
import DataAnalysis from './components/manage/backStage/DataAnalysis/dataAnalysis.vue'

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
      path: '/backStage',//后台
      component: BackStage,
      children: [{
          path: 'gatemanage',//门店管理
          component: GateManage,
          children: [{
            path: 'nocheckGate',//门店申请
            component: NocheckGate
          },
          {
  
            path: 'passgate',//订单管理
            component: Passgate
          },
          {
  
            path: 'nopassgate',//服务管理
            component: Nopassgate
          }
        ]
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
          component: UserManage,
          children: [{
            path: 'checkPass',//门店申请
            component: CheckPass
          },
          {
  
            path: 'checknoPass',//订单管理
            component: ChecknoPass
          },
          {
  
            path: 'noCheck',//服务管理
            component: NoCheck
          }
        ]
        }
      ]
    },
    {
      path: '/beforeStage',//前台
      component: BeforeStage,
      children: [{
          path: 'gateApply',//门店管理
          component: GateApply
        },
        {
          path: 'tradeManage',//商店管理
          component: TradeManage
        }
      ]
    }
  ]
})
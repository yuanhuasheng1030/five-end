import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 宠主
    petsKeepers: [],
    petsKeeper: {},

    paginationPetsKeepers: {},
    pagination: {},
    // 供应商
    suppliers: [],
    supplier: {},
    paginationSuppliers: {}
  },
  mutations: {
    // 宠主
    setPetsKeepers(state, petsKeepers) {
      state.petsKeepers = petsKeepers;
    },
    setPetsKeeper(state, petsKeeper) {
      state.petsKeeper = petsKeeper;
    },
    setPagination(state, pagination) {
      state.pagination = pagination;
    },
    // setPaginationPetsKeepers(state,paginationPetsKeepers) {
    //   state.paginationPetsKeepers = paginationPetsKeepers;
    // },
    // 供应商
    setSuppliers(state, suppliers) {
      state.suppliers = suppliers;
    },
    setSupplier(state, supplier) {
      state.supplier = supplier;
    }
    // setPaginationSuppliers(state,paginationSuppliers) {
    //   state.paginationSuppliers = paginationSuppliers;
    // },
  },
  actions: {
    setPetsKeepers({
      commit
    }, payload = {}) {
      axios({
        method: "get",
        url: "/petsKeepers/petsKeepers",
        params: {
          type: payload.type || '',
          value: payload.value || '',
          page: payload.page || 1,
          rows: payload.rows || 3
        }
      }).then((response) => {
        console.log(response.data);
        // if(response.data.rows.length= 0 && response.data.curpage!=1){
        //   console.log('====================================');
        //   console.log("budengyuyi");
        //   console.log('====================================');
        //   commit('setPetsKeepers', response.data.rows);
        //   commit('setPagination', response.data);
        // }else if(response.data.rows.leng=0&&response.data.curpage == 1){
        //   commit('setPetsKeepers', response.data.rows);
        //   commit('setPagination', response.data);
        // }
        console.log("进入渲染store",response.data);
        commit('setPetsKeepers', response.data.rows);
        commit('setPagination', response.data);
      });
    },
    setPetsKeeper({
      commit
    }, id) {
      console.log(9,id);
      axios({
        method: "get",
        url: "/petsKeepers/" + id
      }).then((response) => {
        console.log('进入store里面的异步修改');
        commit('setPetsKeeper', response.data);
      });
    },







    // 供应商
    setSuppliers({
      commit
    }, payload = {}) {
      axios({
        method: "get",
        url: "/suppliers/suppliers",
        params: {
          type: payload.type || '',
          value: payload.value || '',
          page: payload.page || 1,
          rows: payload.rows || 3
        }
      }).then((response) => {
        // console.log("进入供应商页面管理");
        commit('setSuppliers', response.data.rows);
        commit('setPagination',response.data);
      });
    },

    // 修改数据
    setSupplier({
      commit
    }, id) {
      axios({
        method: "get",
        url: "/suppliers/" + id
      }).then((response) => {
        console.log("供应商修改",response.data);
        commit('setSupplier', response.data);
      });
    }
  },
});
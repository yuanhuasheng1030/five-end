import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
const state = {
  gateShops:[],
  gateUsers:[],
  pagnation:[],
  Checkpasspagnation:[],
  NoCheckpagnation:[],
  gateUser:{},
  dialogFormVisible:false
}
const mutations = {
  setShops(state, gateShops) {
    state.gateShops = gateShops;
  },
  setUsers(state, gateUsers) {
    state.gateUsers = gateUsers;
  },   
  setUser(state, gateUser) {
    state.gateUser = gateUser;
  }, 
  setdialogFormVisible(state, user) {
    state.dialogFormVisible = user;
  },
  setPagnation(state, pagnation) {
    state.pagnation = pagnation;
  },
  setNoCheckPagnation(state, pagnation) {
    state.NoCheckpagnation = pagnation;
  },
  setCheckpassPagnation(state, pagnation) {
    state.Checkpasspagnation = pagnation;
  },
}
const getters = {

}
const actions = {
  setGood({
    commit,
    dispatch
  }, {
    id,
    index
  }) {
    console.log(23, {
      id,
      index
    });
    axios({
      url: "/trademanage/good",
      method: "get",
      params: {
        id,
        index
      }
    }).then(response => {
      commit('setGood', response.data);
    });
  },
  setGoods({
    commit,
    dispatch
  }, payload) {
    axios({
      method: "get",
      url: "/trademanage/table/shops/",
      params: {
        id: payload.id,
        page: payload.page ||this.state.pagenation.page|| 1,
        rows: payload.rows ||this.state.pagenation.rows|| 2,
        type: payload.type,
        value: payload.value
      }
    }).then(response => {
      if(payload.type){
        console.log(22, response.data);
      commit('setGoods', response.data);
      }else{
        commit('setGoods', response.data);
        commit('pagenation', response.data.page);
      }
      // commit('setPage',response.data);
    });
  },
  setAdd({
    commit,
    dispatch
  }, payload) {
    axios({
      url: '/trademanage/add',
      method: 'post',
      data: {
        ...payload
      }
    }).then(() => {
      dispatch('setGoods', {
        id: payload.id
      });
    })
  },
}
export default {
  namespaced:true,
  state,
  mutations,
  getters,
  actions
}

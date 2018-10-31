import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
gateShops:[],
gateUsers:[],
pagnation:[],
Checkpasspagnation:[],
NoCheckpagnation:[],
gateUser:{},
dialogFormVisible:false
  },
  mutations: {
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
  },
  actions: {
   
  }
})

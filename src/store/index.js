import Vue from 'vue'
import Vuex from 'vuex'
import yl from "./modules/yl"
import zyl from "./modules/zyl"
import lml from "./modules/lml"
import clf from "./modules/clf"
import cdw from "./modules/cdw"
import lc from "./modules/lc"
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    yl,lml,zyl,clf,lc,cdw
  },
  state: {
    count: 0,
    price: 100,
    user: {}
  },
  mutations: {

    increment() {
      this.state.count++
    },
    setPrice(state, payload) {
      state.price = payload.price;
    }
  },
  getters: {
    getPrice(state) {
      return "$" + state.price;
    }
  },
  actions: {
    setPrice({
      commit
    }, payload) {
      setTimeout(function () {
        commit("setPrice", payload);
      }, 1000);
    },
  }
})
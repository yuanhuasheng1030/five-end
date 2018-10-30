import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goods: [],
    good: {}
  },
  mutations: {
    setGoods(state, goods) {
      state.goods = goods;
    },
    opened(state, opened) {
      state.opened = opened
    },
    setGood(state, good) {
      state.good = good
    }
  },
  actions: {
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
          page: payload.page || 1,
          rows: payload.rows || 3,
          type: payload.type,
          value: payload.value
        }
      }).then(response => {
        if(payload.type){
          console.log(22, response.data);
        commit('setGoods', response.data);
        }else{
          commit('setGoods', response.data.rows[0].shopGoods);
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
})
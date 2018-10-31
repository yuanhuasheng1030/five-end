import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
<<<<<<< HEAD
=======

>>>>>>> fc8aa83204b69649e95ffbbfb7bb8af8e1f2d8ff
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
<<<<<<< HEAD
    services: [],
    service: {},
    pagination: {},
    search: {},
    dialogUpdateVisible: false,
    username: "张雨霖",
    shopName: "爱宠小店"
  },
  mutations: {
    setServices(state, services) {
      state.services = services
    },
    setPagination(state, pagination) {
      state.pagination = pagination
    },
    setSearch(state, search) {
      state.search = search
    },
    setService(state, service) {
      state.service = service
    },
    setDialogUpdateVisible(state, upload) {
      state.dialogUpdateVisible = upload
    }
  },
  actions: {
    setServices({
      commit
    }, payload = {}) {
      axios.get('/services', {
        params: {
          name: payload.name || '',
          value: payload.value || '',
          username: this.state.username,
          shopName: this.state.shopName,
          page: payload.page || 1,
          rows: payload.rows || 3
        }
      }).then((response) => {

        commit('setServices', response.data.rows)
        commit('setPagination', response.data)
      })
    },
    addService({
      dispatch
    }, payload = {}) {
      axios.post('/services', {
        newService: { ...payload,
          username: this.state.username,
          shopName: this.state.shopName
        }
      }).then(() => {
        dispatch('setServices');
      })
    },
    setService({
      commit
    }, id) {
      axios.get('/services/' + id, {}).then((response) => {
        commit('setService', response.data)
      })
    },
    updateService({
      dispatch
    }, payload = {}) {
      axios({
        method: "put",
        url: "/services/" + this.state.service._id,
        data: {
          name: this.state.service.name,
          serviceType: this.state.service.serviceType,
          basePrice: this.state.service.basePrice,
          VIPprice: this.state.service.VIPprice,
          serviceStandard: this.state.service.serviceStandard,
          timeCost: this.state.service.timeCost,
          adaptPets: this.state.service.adaptPets,
          username: this.state.username,
          shopName: this.state.shopName,
          startTime: this.state.service.startTime,
          endTime: this.state.service.endTime,
          schedule: `${this.state.service.startTime}-${this.state.service.endTime}`
        }
      })
    }
=======
    goods: [],
    good: {},
    pagenation:{}
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
    },
    pagenation(state, pagenation) {
      state.pagenation = pagenation
    },
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
      console.log('====================================');
      console.log(90,payload.page,payload.rows);
      console.log('====================================');
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
>>>>>>> fc8aa83204b69649e95ffbbfb7bb8af8e1f2d8ff
  }
})
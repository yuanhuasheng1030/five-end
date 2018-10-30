import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
  }
})
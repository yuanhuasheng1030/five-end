import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
const state = {
  services: [],
    service: {},
    pagination: {},
    search: {},
    dialogUpdateVisible: false,
    username: "",
    shopName: ""
}
const mutations = {
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
  },
  setShopName(state, shopName){
    state.shopName = shopName;
  },
  setUsername(state, username){
    state.username = username
  }
}
const getters = {

}
const actions = {
  setServices({
    commit
  }, payload = {}) {
    axios.get('/services', {
      params: {
        name: payload.name || '',
        value: payload.value || '',
        username: this.state.cdw.username,
        shopName: this.state.cdw.shopName,
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
        username: this.state.cdw.username,
        shopName: this.state.cdw.shopName
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
      url: "/services/" + this.state.cdw.service._id,
      data: {
        name: this.state.cdw.service.name,
        serviceType: this.state.cdw.service.serviceType,
        basePrice: this.state.cdw.service.basePrice,
        VIPprice: this.state.cdw.service.VIPprice,
        serviceStandard: this.state.cdw.service.serviceStandard,
        timeCost: this.state.cdw.service.timeCost,
        adaptPets: this.state.cdw.service.adaptPets,
        username: this.state.cdw.username,
        shopName: this.state.cdw.shopName,
        startTime: this.state.cdw.service.startTime,
        endTime: this.state.cdw.service.endTime,
        schedule: `${this.state.cdw.service.startTime}-${this.state.cdw.service.endTime}`
      }
    }).then(() => {
      dispatch('setServices');
    })
  }
}
export default {
  namespaced:true,
  state,
  mutations,
  getters,
  actions
}

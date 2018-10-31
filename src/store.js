import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import { mapActions } from 'vuex';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     
  },
  mutations: {
    // setShops(state,shops){
    //   state.shops=shops
    // },
  },
  actions: {
    // addShops({commit,dispatch},payload={}){
    //   console.log('22',payload);
      
    //   axios({
    //     method: "post",
    //     url: "/lcRouter/",
    //     data: {
    //       name: payload.name,
    //       addr: payload.addr,
    //       legalPerson: payload.legalPerson,     
    //       phone: payload.phone,
    //       lisenceNum: payload.lisenceNum,
    //       lisenceImg: payload.lisenceImg,
    //       legalPersonImg: payload.legalPersonImg,
    //       shopsAry: payload.shopsAry,
    //       status:payload.status,
    //       commissionRate:payload.commissionRate
    //     }
    //   }).then(response => {
    //     // dispatch("setShops")
        
    //   });
    // },
  }
})

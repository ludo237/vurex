import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currencies: [],
    selectedCurrency: {},
    rates: [],
  },

  mutations: {
  },

  actions: {
    fetchRates: () => {
      // https://openexchangerates.org/api/currencies.json
    }
  },

  getters: {
    hasRates: () => {
      return false;
    }
  }
})

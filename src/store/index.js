import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currencies: [],
    selectedCurrency: {},
    rates: [],
  },

  mutations: {
    // Tansform the key:value array from the API into an array of key:value objects for better usability
    // https://i.imgflip.com/2z9wub.jpg!
    updateCurrencies: (state, currencies) => state.currencies = Object.keys(currencies).map(currency => ({ symbol: currency, name: currencies[currency] })),
  },

  actions: {
    // TODO Handling error
    fetchRates: ({ commit }) => {
      Axios
        .get('https://openexchangerates.org/api/currencies.json?prettyprint=true&show_alternative=false&show_inactive=false')
        .then(({ data }) => {
          commit('updateCurrencies', data);
        });
    }
  },

  getters: {
    hasRates: (state) => {
      return state.rates.length > 0;
    }
  }
})

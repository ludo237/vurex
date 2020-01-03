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

    updateRates: (state, rates) => state.rates = Object.keys(rates).map(rate => ({ currency: rate, value: rates[rate] })),

    setSelectedCurrency: (state, currencySymbol) => state.selectedCurrency = state.currencies.find(currenct => currenct.symbol === currencySymbol),

    cleanRates: (state) => state.rates = {},
  },

  actions: {
    // TODO Handling error
    fetchCurrencies: ({ commit }) => {
      Axios
        .get('https://openexchangerates.org/api/currencies.json?prettyprint=true&show_alternative=false&show_inactive=false')
        .then(({ data }) => commit('updateCurrencies', data));
    },

    fetchRates: ({ state, commit }) => {
      let url = `https://api.exchangeratesapi.io/latest?base=${state.selectedCurrency.symbol}`;
      Axios
        .get(url)
        .then(({ data: { rates } }) => commit('updateRates', rates))
        .catch(() => commit('cleanRates'));
    },

    changeSelectedCurrency: ({ commit, dispatch }, currencySymbol) => {
      commit('setSelectedCurrency', currencySymbol);

      dispatch('fetchRates');
    }
  },

  getters: {
    hasRates: (state) => state.rates.length > 0,

    hasSelectedCurrency: (state) => Object.keys(state.selectedCurrency).length > 0,
  }
})

<template>
  <div class="h-screen bg-gray-200">
    <div class="mx-auto flex justify-center items-center pt-20">
      <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 mx-auto">
        <header class="mb-2">
          <h1 class="text-2xl">Vurex</h1>
          <small class="mt-0 text-gray-600">Select a currency from the list and check the rates</small>
        </header>
        <currency-selector />
        <rates v-if="hasSelectedCurrency" />
        <alert message="please select a currency" v-else />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import Alert from './components/Alert';
import CurrencySelector from './components/CurrencySelector';
import Rates from './components/Rates';

export default {
  name: 'vurex',

  components: {
    Alert, CurrencySelector, Rates
  },

  beforeMount() {
    // Get the currencies list before mounting
    this.fetch();
  },

  methods: mapActions({
    fetch: 'fetchCurrencies'
  }),

  computed: mapGetters({
    hasSelectedCurrency: 'hasSelectedCurrency'
  }),
}
</script>

<style src="./assets/tailwind.css"/>

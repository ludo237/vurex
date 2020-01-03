<template>
  <div class="h-screen bg-gray-200">
    <div class="h-full mx-auto flex justify-center items-center">
      <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white px-6">
        <header class="my-2">
          <h1>Vurex</h1>
          <small class="mt-0 mb-4 text-gray-600">Select a currency from the list and check the rates</small>
        </header>
        <currency-selector />
        <rates />
      </div>
    </div>
  </div>
</template>

<script>

import { mapActions } from 'vuex';

import CurrencySelector from './components/CurrencySelector';
import Rates from './components/Rates';

export default {
  name: 'vurex',

  components: {
    CurrencySelector, Rates
  },

  beforeMount() {
    // Get the currencies list before mounting
    this.fetch();
  },

  methods: mapActions({
    fetch: 'fetchRates'
  }),
}
</script>

<style src="./assets/tailwind.css"/>

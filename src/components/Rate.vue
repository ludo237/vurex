<template>
  <div class="flex justify-between py-1">
    <div class="flex-grow text-left">1 {{ rate.currency }}</div>
    <div class="flex-grow text-right">{{ formattedValue }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'rate',

  props: {
    rate: {
      required: true,
      type: Object,
    }
  },

  computed: {
    formattedValue() {
      return new Intl.NumberFormat('it-IT', {
        style: 'currency',
        currency: this.currency.symbol,
        maximumSignificantDigits: 4
      })
        .format(this.rate.value)
    },

    ...mapState({
      currency: ({ selectedCurrency }) => selectedCurrency
    })
  }
}
</script>

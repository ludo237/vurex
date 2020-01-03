<template>
  <div class="my-2">
    <ul class="overflow-auto h-64" v-if="hasRates">
      <rate v-for="rate in rates" :key="rate.currency" :rate="rate" />
    </ul>
    <alert message="No rates for the selected currency" type="danger" v-else />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

import Alert from './Alert';
import Rate from './Rate';

export default {
  name: 'rates',

  components: {
    Alert, Rate
  },

  computed: {
    ...mapGetters({
      hasRates: 'hasRates',
    }),

    ...mapState({
      rates: ({ rates }) => rates,
    })
  },
}
</script>

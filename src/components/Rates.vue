<template>
  <div class="my-2 mx-auto w-2/3" v-if="hasRates">
    <div class="overflow-auto h-64 px-2">
      <rate v-for="rate in rates" :key="rate.currency" :rate="rate" />
    </div>
  </div>
  <alert message="No rates for the selected currency" type="danger" v-else />
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

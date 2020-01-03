<template>
  <div class="my-2 h-64">
    <ul class="overflow-auto" v-if="hasRates">
      <rate v-for="(rate, index) in rates" :key="index" />
    </ul>
    <div v-else>
      <p>Please select a currency</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import Rate from './Rate';

export default {
  name: 'currencies',

  components: {
    Rate
  },

  computed: {
    ...mapGetters({
      hasRates: 'hasRates'
    }),

    ...mapState({
      rates: ({ rates }) => rates,
    })
  },
}
</script>

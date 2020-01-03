<template>
  <ul class="my-2 h-64 overflow-auto">
    <currency />
  </ul>
</template>

<script>
import Currency from './Currency';

export default {
  name: 'currencies',

  components: {
    Currency
  }
}
</script>

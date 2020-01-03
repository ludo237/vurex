<template>
  <option :value="currency.symbol">{{ currency.name }}</option>
</template>

<script>
export default {
  name: 'currency-selector-item',

  props: {
    currency: {
      required: true,
      type: Object,
    }
  }
}
</script>

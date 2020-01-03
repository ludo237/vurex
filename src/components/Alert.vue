<template>
  <div class="p-3 my-2 rounded relative border" :class="resolveType" role="alert">
    <span class="block sm:inline">{{ message }}</span>
  </div>
</template>

<script>
export default {
  name: 'alert',

  props: {
    message: {
      required: true,
      type: String,
    },

    type: {
      type: String,
      default: "info",
    }
  },

  computed: {
    resolveType() {
      switch (this.type) {
        case 'danger': return ['bg-red-100', 'border-red-500', 'text-red-700']
        case 'info':
        default: return ['bg-teal-100', 'border-teal-500', 'text-teal-700']
      }
    }
  }
}
</script>

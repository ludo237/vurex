<template>
  <div class="h-screen bg-gray-200">
    <div class="h-full mx-auto flex justify-center items-center">
      <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white px-6">
        <header class="my-2">
          <h1>Vurex</h1>
          <small class="mt-0 mb-4 text-gray-600">List of all available currencies</small>
        </header>
        <search-box />
        <currencies />
      </div>
    </div>
  </div>
</template>

<script>
import Currencies from './components/Currencies';
import SearchBox from './components/SearchBox';

export default {
  name: 'vurex',

  components: {
    Currencies, SearchBox
  }
}
</script>

<style src="./assets/tailwind.css"/>

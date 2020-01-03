<template>
  <div class="h-screen bg-gray-200">
    <div class="h-full mx-auto flex justify-center items-center">
      <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white px-6">
        <header class="my-2">
          <h1>Vurex</h1>
          <small class="mt-0 mb-4 text-gray-600">List of all available currencies</small>
        </header>
        <form class="w-full max-w-sm py-2">
          <div class="flex items-center border-b border-b-2 border-teal-500">
            <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none" type="text" placeholder="Search Currency" aria-label="`Search Query" />
          </div>
        </form>
        <ul class="my-2 h-64 overflow-auto">
          <li>EUR</li>
          <li>EUR</li>
          <li>EUR</li>
          <li>EUR</li>
          <li>EUR</li>
          <li>EUR</li>
          <li>EUR</li>
          <li>EUR</li>
          <li>EUR</li>
          <li>EUR</li>
          <li>EUR</li>
          <li>EUR</li>
          <li>EUR</li>
          <li>EUR</li>
          <li>EUR</li>
          <li>EUR</li>
          <li>EUR</li>
          <li>EUR</li>
          <li>EUR</li>
          <li>EUR</li>
          <li>EUR</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'vurex',
}
</script>

<style src="./assets/tailwind.css"/>

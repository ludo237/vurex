<template>
  <div class="h-screen bg-gray-200">
    <div class="h-full mx-auto flex justify-center items-center">
      <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white px-6">
        <div class="py-2">
          <div class="font-bold text-xl mb-1">Vurex</div>
          <small class="text-gray-700 text-sm">List of all available currencies</small>
        </div>
        <form class="w-full max-w-sm">
          <div class="flex items-center border-b border-b-2 border-teal-500 py-2">
            <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 leading-tight focus:outline-none" type="text" placeholder="Search Currency" aria-label="`Search Query" />
          </div>
        </form>
        <ul class="py-2">
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

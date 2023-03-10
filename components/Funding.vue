<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">Funded by</h2>

      <div class="grid grid-cols-2 gap-6 rounded-lg bg-gray-100 p-6 sm:h-40 sm:content-evenly md:grid-cols-2">
        <!-- logo - start -->
        <div class="flex justify-center text-gray-400">
          <NuxtLink target="_blank" to="https://www.ukri.org/councils/ahrc/">
            <img src="https://upload.wikimedia.org/wikipedia/en/e/e0/Arts_and_Humanities_Research_Council_logo.svg">
          </NuxtLink>
        </div>
        <!-- logo - end -->

        <!-- logo - start -->
        <div class="flex justify-center text-gray-400">
          <NuxtLink target="_blank" to="https://www.dfg.de//">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/86/DFG-logo-blau.svg">
          </NuxtLink>
        </div>
        <!-- logo - end -->
      </div>
    </div>
  </div>
</template>

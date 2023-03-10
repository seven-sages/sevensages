<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <!-- text - start -->
      <div class="mb-10 md:mb-16">
        <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
          Main Strands
        </h2>

        <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
          Our project, funded by a UK German collaborative research project in the humanities grant jointly from the Arts and Humanities Research Council and the Deutsche Forschungsgemeinschaft, has three main strands.
        </p>
      </div>
      <!-- text - end -->

      <div class="grid gap-4 sm:grid-cols-3">
        <!-- product - start -->
        <NuxtLink to="/gender" class="block max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Gender</h5>
          <p class="font-normal text-gray-700 text-justify">We reappraise the text's gender politics from the perspective of recent gender studies. </p>
        </NuxtLink>
        <!-- product - end -->

        <!-- product - start -->
        <NuxtLink to="/database" class="block max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Multilingual database</h5>
          <p class="font-normal text-gray-700 text-justify">Most of the versions have not yet been edited or even identified, and we take a first step towards this by collating and expanding the available factual information on the transmission until 1600.</p>
        </NuxtLink>
        <!-- product - end -->

        <!-- product - start -->
        <NuxtLink to="/edition" class="block max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Dutch edition</h5>
          <p class="font-normal text-gray-700 text-justify">We edit one of The Seven Sages' earliest European traditions from a multilingual hub, the three oldest versions of the Dutch tradition. </p>
        </NuxtLink>
        <!-- product - end -->
      </div>
    </div>
  </div>
</template>

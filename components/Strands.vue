<template>
  <div class="bg-white dark:bg-gray-800 py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div class="mb-10 md:mb-16">
        <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:mb-6 lg:text-3xl">
          Main Strands
        </h2>
        <p class="mx-auto max-w-screen-md text-center text-gray-500 dark:text-gray-200 md:text-lg">
          Our project, funded by a UK German collaborative research project in the humanities grant jointly from the Arts and Humanities Research Council and the Deutsche Forschungsgemeinschaft, has three main strands.
        </p>
      </div>
      <div class="grid gap-4 sm:grid-cols-3">
        <NuxtLink to="/gender" class="block max-w-md p-6 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Gender
          </h5>
          <p class="font-normal text-gray-700 dark:text-white text-justify">
            We reappraise the text's gender politics from the perspective of recent gender studies.
          </p>
        </NuxtLink>
        <NuxtLink to="/gender" class="block max-w-md p-6 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Multilingual database
          </h5>
          <p class="font-normal text-gray-700 dark:text-white text-justify">
            Most of the versions have not yet been edited or even identified, and we take a first step towards this by collating and expanding the available factual information on the transmission until 1600.
          </p>
        </NuxtLink>
        <NuxtLink to="/gender" class="block max-w-md p-6 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-800 rounded-lg shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Dutch edition
          </h5>
          <p class="font-normal text-gray-700 dark:text-white text-justify">
            We edit one of The Seven Sages' earliest European traditions from a multilingual hub, the three oldest versions of the Dutch tradition.
          </p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<template>
  <div class="bg-white pb-6 sm:pb-8 lg:pb-12">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <header class="mb-4 flex items-center justify-between py-4 md:py-8">
        <!-- logo - start -->
        <a href="/" class="text-gray-800 inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl" aria-label="logo">
          Seven Sages of Rome
        </a>
        <!-- logo - end -->

        <!-- nav - start -->
        <nav class="hidden gap-12 lg:flex">
          <NuxtLink to="/team" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Team</NuxtLink>
          <NuxtLink to="/edition" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Dutch Edition</NuxtLink>
          <NuxtLink to="/database" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Database</NuxtLink>
          <NuxtLink to="/gender" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Gender</NuxtLink>
          <NuxtLink to="/genre" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Genre</NuxtLink>
          <NuxtLink to="/events" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Events</NuxtLink>
          <NuxtLink to="/materials" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Materials</NuxtLink>
        </nav>
        <!-- nav - end -->
        <button type="button" class="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
          </svg>

          Menu
        </button>
      </header>
    </div>
  </div>
</template>

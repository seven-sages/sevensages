<template>
  <div class="bg-[#FCFCFA] pt-4 sm:pt-10 lg:pt-12">
    <footer class="mx-auto max-w-(--breakpoint-2xl) px-4 md:px-8">
      <div
        class="flex flex-col items-center justify-between gap-4 border-t border-b py-6 md:flex-row"
      >
        <nav
          class="flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6"
        >
          <NuxtLink
            to="/imprint"
            class="text-gray-700 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >Imprint</NuxtLink
          >
          <NuxtLink
            to="/contact"
            class="text-gray-700 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >Contact</NuxtLink
          >
        </nav>
        <div class="flex gap-4">
          <NuxtLink
            href="https://x.com/7SagesResearch"
            :disabled="true"
            target="_blank"
            class="text-gray-700 transition duration-100 hover:text-gray-500 active:text-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
            >
              <path
                fill="currentColor"
                d="M.076 0H3.61l3.145 4.498L10.53 0h1.129L7.185 5.114L12 12H8.468L5.183 7.303L1.128 12H0l4.753-5.312zM1.47.706l7.404 10.588h1.733L3.203.706z"
              />
            </svg>
          </NuxtLink>
        </div>
      </div>

      <div class="py-8 text-center text-sm text-gray-700">
        ©2023 - Present Seven Sages of Rome. All rights reserved.
      </div>
    </footer>
  </div>
</template>
<script setup lang="ts"></script>

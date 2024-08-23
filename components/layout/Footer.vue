<template>
  <div class="bg-white pt-4 sm:pt-10 lg:pt-12">
    <footer class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div
        class="flex flex-col items-center justify-between gap-4 border-b border-t py-6 md:flex-row"
      >
        <!-- nav - start -->
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
        <!-- nav - end -->

        <!-- social - start -->
        <div class="flex gap-4">
          <NuxtLink
            href="https://x.com/7SagesResearch"
            :disabled="true"
            target="_blank"
            class="text-gray-700 transition duration-100 hover:text-gray-500 active:text-gray-600"
          >
            <svg
              class="h-5 w-5"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
              />
            </svg>
          </NuxtLink>
        </div>
        <!-- social - end -->
      </div>

      <div class="py-8 text-center text-sm text-gray-700">
        ©2023 - Present Seven Sages of Rome. All rights reserved.
      </div>
    </footer>
  </div>
</template>
<script setup lang="ts"></script>

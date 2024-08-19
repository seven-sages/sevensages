<script setup lang="ts">
defineProps<{
  name?: string;
  title?: string;
  description?: string;
  image?: string;
  alt?: string;
  mail?: string;
  twitter?: string;
}>();
</script>

<template>
  <div>
    <div
      class="group mb-2 h-110 overflow-hidden rounded-xl bg-gray-100 shadow-lg [perspective:1000px]"
    >
      <div
        class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
      >
        <div class="absolute inset-0">
          <img
            class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
            :src="image"
            :alt="alt"
          />
        </div>
        <div
          class="rounded-sxl absolute inset-0 h-full w-full bg-black/80 px-4 text-center text-slate-200 [backface-visibility:hidden] [transform:rotateY(180deg)]"
        >
          <div class="flex min-h-full flex-col items-center justify-center">
            <p class="text-justify text-md">
              {{ description }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="font-bold text-indigo-500 md:text-lg">
        {{ name }}
      </div>
      <p
        class="mb-3 text-sm text-gray-500 md:mb-4 md:text-base"
      >
        {{ title }}
      </p>
      <div class="flex">
        <div class="flex gap-4">
          <a
            v-show="twitter"
            :href="twitter"
            target="_blank"
            class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
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
          </a>
          <a
            v-show="mail"
            :href="`mailto:${mail}`"
            target="_blank"
            class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
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
                d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"
              />
              <path
                d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

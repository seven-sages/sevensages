<script setup lang="ts">
import NavbarLink from "~/components/layout/NavbarLink.vue";
import { useWindowScroll } from '@vueuse/core'
import { navLinks } from "./sidebar"

defineProps<{
  index: boolean;
}>();

const { x, y } = useWindowScroll()
</script>

<template>
  <header
    ref="header"
    class="fixed w-full z-50 top-0 px-8 py-6"
    :class="{ 'bg-white py-4 border-b': y > 0 }">
    <div
      class="flex items-center justify-between">
        <!-- logo - start -->
        <a
          href="/"
          class="inline-flex items-center gap-2.5 text-2xl font-bold text-gray-50 dark:text-white md:text-3xl cursor-pointer"
          :class="{ 'text-zinc-800': y > 0 || !index }"
          aria-label="Seven Sages of Rome"
        >
          Seven Sages of Rome
        </a>
        <!-- logo - end -->

        <!-- nav - start -->
        <nav class="hidden gap-12 xl:flex">
          <NavbarLink
            v-for="link in navLinks"
            :index="index"
            :key="link.name"
            :link="link.link"
            :name="link.name"
          />
        </nav>
        <!-- nav - end -->
        <button
          type="button"
          aria-label="Open Navigation Drawer"
          class="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base xl:hidden"
          @click="visible = true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
  </header>
</template>

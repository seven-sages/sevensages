<script setup lang="ts">
import NavbarLink from "~/components/layout/NavbarLink.vue";
import { navLinks } from "./sidebar";

defineProps<{
  index: boolean;
}>();

const emit = defineEmits(["toggleDrawer"]);
</script>

<template>
  <header class="fixed top-0 z-50 w-full border-b bg-white px-8 py-2">
    <div class="flex items-center justify-between">
      <!-- logo - start -->
      <a
        href="/"
        class="cursor-pointer text-lg tracking-widest leading-none text-black md:text-2xl"
        id="logo"
        aria-label="The Seven Sages of Rome"
      >
        <i>the</i> <b>Seven <br />Sages</b> <i>of</i> <br /><b>Rome</b>
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
        @click="emit('toggleDrawer')"
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

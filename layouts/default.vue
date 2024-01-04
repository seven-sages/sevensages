<script setup lang="ts">
import ScrollTop from "primevue/scrolltop";

import Navbar from "~/components/layout/Navbar.vue";
import Footer from "~/components/layout/Footer.vue";
</script>

<template>
  <main>
    <Navbar />
    <div class="min-h-screen dark:bg-gray-800">
      <slot />
    </div>
    <Footer />
    <ScrollTop
      :pt="{
        root: {
          class:
            'w-10 h-10 text-black bg-gray-50 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 shadow-2xl dark:text-white dark:bg-gray-900 dark:hover:bg-gray-950 dark:focus:ring-gray-800',
        },
        icon: {
          class: 'w-8 h-8 dark:text-white',
        },
      }"
    />
  </main>
</template>

<style></style>

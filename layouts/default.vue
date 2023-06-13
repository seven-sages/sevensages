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
    <ScrollTop />
  </main>
</template>

<style></style>

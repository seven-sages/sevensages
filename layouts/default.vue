<script setup lang="ts">
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
  </main>
</template>

<style></style>

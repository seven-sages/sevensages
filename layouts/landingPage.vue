<script setup lang="ts">
import Navbar from "~/components/layout/Navbar.vue";
import Footer from "~/components/layout/Footer.vue";
</script>

<template>
  <main>
    <Navbar index />
    <div ref="main" class="min-h-screen bg-white">
      <slot />
    </div>
    <Footer />
  </main>
</template>

<style></style>

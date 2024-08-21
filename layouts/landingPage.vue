<script setup lang="ts">
import Navbar from "~/components/layout/Navbar.vue";
import Footer from "~/components/layout/Footer.vue";
import MobileNavbar from "~/components/layout/MobileNavbar.vue";

const drawer = ref()

function toggleDrawer(){
  drawer.value.toggle(true)
}
</script>

<template>
  <main>
    <MobileNavbar ref="drawer" />
    <Navbar index @toggleDrawer="toggleDrawer" />
    <div ref="main" class="min-h-[calc(100dvh-12rem)] bg-white">
      <slot />
    </div>
    <Footer />
  </main>
</template>

<style></style>

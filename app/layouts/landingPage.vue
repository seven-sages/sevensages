<script setup lang="ts">
const drawer = ref();

function toggleDrawer() {
  drawer.value.toggle(true);
}
</script>

<template>
  <main>
    <LayoutMobileNavbar ref="drawer" />
    <LayoutNavbar index @toggleDrawer="toggleDrawer" />
    <div ref="main" class="bg-[#FCFCFA]">
      <slot />
    </div>
    <LayoutFooter />
  </main>
</template>

<style></style>

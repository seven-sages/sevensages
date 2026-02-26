<script setup lang="ts">
const drawer = ref()

function toggleDrawer(){
  drawer.value.toggle(true)
}
</script>

<template>
  <main>
    <LayoutMobileNavbar ref="drawer" />
    <LayoutNavbar :index="false" @toggleDrawer="toggleDrawer" />
    <div ref="main" class="min-h-[calc(100dvh-12rem)] bg-white pt-16 xl:pt-[7.5rem]">
      <slot />
    </div>
    <LayoutFooter />
  </main>
</template>

<style></style>

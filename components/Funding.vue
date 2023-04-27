<script setup lang="ts">
const color = useColorMode()
</script>

<template>
  <div class="bg-white dark:bg-gray-800 py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:mb-8 lg:text-3xl">Funded by</h2>

      <div class="grid grid-cols-2 gap-6 rounded-lg bg-gray-100 dark:bg-gray-700 p-6 sm:h-40 sm:content-evenly md:grid-cols-2">
        <div class="flex justify-center text-gray-400">
          <img v-if="color.value === 'dark'" src="/funding/dark_mode_ArtsAndHumanities.svg">
          <img v-else src="/funding/light_mode_ArtsAndHumanities.svg">
        </div>
        <div class="flex justify-center text-gray-400">
          <img v-if="color.value === 'dark'" src="/funding/dark_mode_DFG.svg">
          <img v-else src="/funding/light_mode_DFG.svg">
        </div>
      </div>
    </div>
  </div>
</template>

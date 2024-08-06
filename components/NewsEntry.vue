<script setup lang="ts">
const props = defineProps<{
  header?: string;
  abstract?: string;
  img: string;
}>();
</script>
<template>
  <div class="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
    <img v-if="img != 'https://cms.seven-sages-of-rome.org/assets/null'" :src="img" class="rounded h-96" alt="technology" />
    <img v-else src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" class="rounded h-96"  alt=""/>
    <div class="p-4 pl-0">
      <h2 class="font-bold text-2xl text-gray-800">{{ header }}</h2>
      <ClientOnly>
        <p class="text-gray-700 mt-2" v-html="abstract" />
      </ClientOnly>
      <a href="#" class="inline-block py-2 rounded text-green-900 mt-2 ml-auto">Read more</a>
    </div>
  </div>
</template>

<script setup lang="ts">
const { getSingletonItem } = useDirectusItems();
const { getThumbnail: img } = useDirectusFiles();
interface Funding {
  id?: string;
  Header: string;
  UKRI_light: string;
  UKRI_dark: string;
  DFG_light: string;
  DFG_dark: string;
}

const item = await getSingletonItem<Funding>({
  collection: "Funding",
});
</script>

<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <h1
        class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl"
        v-html="item.Header"
      />

      <div
        class="h-100 grid grid-cols-1 content-evenly gap-6 rounded-lg bg-gray-100 p-6 lg:h-40 lg:grid-cols-2"
      >
        <div class="flex justify-center text-gray-400">
          <img :src="img(item.UKRI_light, { format: 'webp', quality: 40 })" alt="UKRI logo" />
        </div>
        <div class="flex justify-center text-gray-400">
          <img :src="img(item.DFG_light, { format: 'webp', quality: 40 })" alt="DFG logo" />
        </div>
      </div>
    </div>
  </div>
</template>

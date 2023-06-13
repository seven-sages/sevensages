<script setup lang="ts">
const { getSingletonItem } = useDirectusItems();
interface IMaterials {
  id?: string;
  Header: string;
}

const materials = await getSingletonItem<IMaterials>({
  collection: "Materials",
});
</script>
<template>
  <div class="bg-white py-6 dark:bg-gray-800 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-md px-4 md:px-8">
      <h1
        class="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white sm:text-3xl md:mb-6"
      >
        {{ materials.Header }}
      </h1>

      <p class="mb-6 text-gray-500 dark:text-gray-200 sm:text-lg md:mb-8"></p>
    </div>
  </div>
</template>

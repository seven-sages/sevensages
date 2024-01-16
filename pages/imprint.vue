<script setup lang="ts">
const { getSingletonItem } = useDirectusItems();
interface IImprint {
  id?: string;
  Content: string;
  Heading: string;
}

const imprint = await getSingletonItem<IImprint>({
  collection: "Imprint",
});
</script>
<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12 dark:bg-gray-800">
    <div class="mx-auto max-w-screen-md px-4 md:px-8">
      <h1
        class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 dark:text-white"
      >
        {{ imprint.Heading }}
      </h1>

      <span
        class="mb-6 text-justify text-gray-500 sm:text-lg md:mb-8 dark:text-gray-200"
        v-html="imprint.Content"
      />
    </div>
  </div>
</template>

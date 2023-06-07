<script setup lang="ts">
const { getSingletonItem } = useDirectusItems()
interface GenreArticle {
  id?: string;
  Content: string;
  Heading: string;
}

const item = await getSingletonItem<GenreArticle>({
  collection: 'Genre'
})
</script>
<template>
  <div class="bg-white dark:bg-gray-800 py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-md px-4 md:px-8">
      <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white sm:text-3xl md:mb-6">
        {{ item.Heading }}
      </h1>

      <span v-html="item.Content" class="mb-6 text-gray-500 dark:text-gray-200 sm:text-lg md:mb-8 text-justify" />
    </div>
  </div>
</template>
